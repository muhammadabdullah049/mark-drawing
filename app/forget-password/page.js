"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: ""
  })
  const [showOtpField, setShowOtpField] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSendOtp = (e) => {
    e.preventDefault()
    // Here you would typically call an API to send OTP to the email
    console.log("Sending OTP to:", formData.email)
    setOtpSent(true)
    setShowOtpField(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (showOtpField) {
      // Handle OTP verification
      console.log("Verifying OTP:", formData.otp)
    } else {
      // Handle regular email/password login
      console.log("Login:", formData)
    }
  }

  return (
    <div className="flex items-center justify-center py-28 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">Customer Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            {!showOtpField && 
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
              disabled={otpSent}
            />
          </div>
            
            }

          {showOtpField && (
            <div>
              <Label htmlFor="otp" className="text-[#516272] font-medium text-lg">
                OTP
              </Label>
              <Input
                id="otp"
                name="otp"
                type="text"
                value={formData.otp}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300"
                required
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
              {otpSent && (
                <p className="text-sm text-gray-500 mt-1">
                  OTP sent to {formData.email}
                </p>
              )}
            </div>
          )}

          {/* {!showOtpField && (
            <>
              <div>
                <Label htmlFor="password" className="text-[#516272] font-medium text-lg">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-2 w-full border-gray-300"
                  required
                />
              </div>

              <div className="text-center">
                <Link href="/forgot-password" className="text-lg text-[#516272]">
                  Forgot your password?
                </Link>
              </div>
            </>
          )} */}
{showOtpField && 
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="bg-[#208B58] hover:bg-[#208B58] text-white text-[16px] py-6 px-24 font-medium cursor-pointer"
            >
              Verify OTP
            </Button>
          </div>

}
        </form>

        {!showOtpField && (
          <div className="text-center mt-6">
            <Button 
              onClick={handleSendOtp}
              className="bg-[#208B58] hover:bg-[#208B58] text-white text-[16px] py-6 px-20 font-medium cursor-pointer"
            >
              Send OTP
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}