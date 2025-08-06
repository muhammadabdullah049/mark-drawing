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

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    passwordConfirmation: "",
  })
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showOtpModal, setShowOtpModal] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [otpExpiry, setOtpExpiry] = useState(300)
  const [canResendOtp, setCanResendOtp] = useState(false)
  const [error, setError] = useState("")

  // Timer for OTP expiration
  useEffect(() => {
    if (otpExpiry > 0 && showOtpModal) {
      const timer = setInterval(() => {
        setOtpExpiry((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (otpExpiry === 0) {
      setCanResendOtp(true)
    }
  }, [otpExpiry, showOtpModal])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (formData.password !== formData.passwordConfirmation) {
      toast.error("Passwords do not match")
      return false
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return false
    }
    return true
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    setError("")
    try {
      // First check if email already exists
      const emailCheck = await fetch("/api/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      })

      const emailCheckData = await emailCheck.json()
      if (emailCheckData.exists) {
        toast.error("Email already exists")
        return
      }

      // Send OTP
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (response.ok) {
        toast.success("OTP sent to your email")
        setShowOtpModal(true)
        setOtpExpiry(300) // 5 minutes
        setCanResendOtp(false)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send OTP")
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while sending OTP")
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtpAndRegister = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP")
      return
    }

    setIsVerifying(true)
    setError("")
    try {
      // Verify OTP
      const verifyResponse = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otp,
        }),
      })

      if (!verifyResponse.ok) {
        const errorData = await verifyResponse.json()
        throw new Error(errorData.error || "OTP verification failed")
      }

      // If OTP is verified, proceed with registration
      const registerResponse = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          role: "user",
          address: formData.address,
        }),
      })

      const data = await registerResponse.json()

      if (!registerResponse.ok) {
        throw new Error(data.error || "Registration failed")
      }

      toast.success("Registration successful! Redirecting to login...")
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (error) {
      toast.error(error.message || "An error occurred during registration")
      setError(error.message)
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendOtp = async () => {
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to resend OTP")
      }

      setOtpExpiry(300)
      setCanResendOtp(false)
      setOtp("")
      toast.success("OTP resent successfully!")
    } catch (error) {
      toast.error(error.message || "Failed to resend OTP")
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            {showOtpModal ? "Verify OTP" : "Create Account"}
          </h1>
        </div>

        {!showOtpModal ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <Label htmlFor="firstName" className="text-[#516272] font-medium text-lg">
                First Name*
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300 rounded-none"
                required
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="text-[#516272] font-medium text-lg">
                Last Name*
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300 rounded-none"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-[#516272] font-medium text-lg">
                Email*
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300 rounded-none"
                required
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-[#516272] font-medium text-lg">
                Address*
              </Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300 rounded-none"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-[#516272] font-medium text-lg">
                Password*
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-2 w-full border-gray-300 rounded-none pr-10"
                  required
                  minLength={6}
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
              <Label htmlFor="passwordConfirmation" className="text-[#516272] font-medium text-lg">
                Password Confirmation*
              </Label>
              <Input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                value={formData.passwordConfirmation}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300 rounded-none"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#15803D] hover:bg-[#15803D] text-white text-[16px] py-6 px-12 font-medium cursor-pointer"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "SEND OTP"}
              </Button>
            </div>
          </form>
        ) : (
          <Dialog open={showOtpModal} onOpenChange={setShowOtpModal}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Verify Your Email</DialogTitle>
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

                <div className="text-sm text-center text-[#516272]">
                  {otpExpiry > 0 ? (
                    `OTP expires in: ${Math.floor(otpExpiry / 60)}:${(otpExpiry % 60).toString().padStart(2, "0")}`
                  ) : (
                    "OTP has expired"
                  )}
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                {canResendOtp && (
                  <div className="text-center">
                    <Button
                      onClick={handleResendOtp}
                      variant="link"
                      className="text-[#15803D] p-0 h-auto"
                    >
                      Resend Verification Code
                    </Button>
                  </div>
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
                  onClick={handleVerifyOtpAndRegister}
                  disabled={isVerifying || otp.length !== 6}
                  className="mt-2 sm:mt-0 bg-[#15803D] hover:bg-[#15803D]"
                >
                  {isVerifying ? (
                    <span className="flex items-center">
                      <span className="mr-2">Verifying</span>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    </span>
                  ) : (
                    "Verify & Create Account"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        <div className="text-center mt-6">
          <Link href="/login" className="text-lg text-[#516272]">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}