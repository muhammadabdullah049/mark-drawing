"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { FiEyeOff, FiEye } from "react-icons/fi"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showOtpModal, setShowOtpModal] = useState(false)
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false)
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        toast.success("Login successful")
        router.push("/") // Redirect to dashboard or appropriate page
      } else {
        // Increment failed attempts
        setFailedAttempts((prev) => prev + 1)

        // Send email if failed attempts reach the threshold (e.g., 3)
        if (failedAttempts + 1 >= 3) {
          await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.email,
              subject: "Failed Login Attempts",
              message: `You have had ${
                failedAttempts + 1
              } failed login attempts. Please contact support if this was not you.`,
            }),
          })
        }
        setError(data.error || "Invalid credentials")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      })

      const data = await response.json()
      if (response.ok) {
        toast.success("OTP sent to your email")
        setShowForgotPassword(false)
        setShowOtpModal(true)
      } else {
        setError(data.error || "Failed to send OTP")
      }
    } catch (error) {
      setError("Error sending OTP")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      })

      const data = await response.json()
      if (response.ok) {
        toast.success("OTP verified successfully")
        setShowOtpModal(false)
        setShowResetPasswordModal(true)
      } else {
        setError(data.error || "Invalid OTP")
      }
    } catch (error) {
      setError("Error verifying OTP")
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, newPassword }),
      })

      const data = await response.json()
      if (response.ok) {
        toast.success("Password reset successfully")
        setShowResetPasswordModal(false)
        // Clear form fields
        setNewPassword("")
        setConfirmPassword("")
        setOtp("")
      } else {
        setError(data.error || "Failed to reset password")
      }
    } catch (error) {
      setError("Error resetting password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center py-28 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">Customer Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-[#516272] font-medium text-lg">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 w-full border-gray-300"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#516272] font-medium text-lg">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-lg text-[#516272] hover:underline"
            >
              Forgot your password?
            </button>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-[#208B58] hover:bg-[#208B58] text-white text-[16px] py-6 px-24 font-medium cursor-pointer"
              disabled={loading}
            >
              {loading ? "Signing in..." : "SIGN IN"}
            </Button>
          </div>
        </form>

        <div className="text-center mt-6">
          <Link href="/register" className="text-lg text-[#516272]">
            Create account
          </Link>
        </div>

        {/* Forgot Password Modal */}
        <Dialog open={showForgotPassword} onOpenChange={setShowForgotPassword}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Forgot Password</DialogTitle>
              <DialogDescription>
                Enter your email address to receive a password reset OTP
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="forgot-email" className="text-[#516272] font-medium text-lg">
                  Email
                </Label>
                <Input
                  id="forgot-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-2 w-full border-gray-300"
                  required
                />
              </div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForgotPassword(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleForgotPassword}
                disabled={loading}
                className="mt-2 sm:mt-0 bg-[#208B58] hover:bg-[#208B58]"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* OTP Verification Modal */}
        <Dialog open={showOtpModal} onOpenChange={setShowOtpModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Verify OTP</DialogTitle>
              <DialogDescription>
                Enter the 6-digit code sent to {formData.email}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
            </div>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowOtpModal(false)
                  setOtp("")
                  setError("")
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleVerifyOtp}
                disabled={loading || otp.length !== 6}
                className="mt-2 sm:mt-0 bg-[#208B58] hover:bg-[#208B58]"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Reset Password Modal */}
        <Dialog open={showResetPasswordModal} onOpenChange={setShowResetPasswordModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Reset Password</DialogTitle>
              <DialogDescription>
                Create a new password for your account
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="new-password" className="text-[#516272] font-medium text-lg">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mt-2 w-full border-gray-300 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="confirm-password" className="text-[#516272] font-medium text-lg">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-2 w-full border-gray-300"
                  required
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
            </div>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowResetPasswordModal(false)
                  setNewPassword("")
                  setConfirmPassword("")
                  setError("")
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleResetPassword}
                disabled={loading || !newPassword || newPassword !== confirmPassword}
                className="mt-2 sm:mt-0 bg-[#208B58] hover:bg-[#208B58]"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}