"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function TrackOrderPage() {
  const [formData, setFormData] = useState({
    orderId: "",
    orderEmail: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Track order:", formData)
  }

  return (
    <div className="container mx-auto m-4 bg-[#F3F4F6] items-center justify-center py-12 w-full grid grid-cols-2 gap-4 px-10">
      <Card className="w-full">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-12">
              <Label htmlFor="orderId" className="text-gray-700 font-medium whitespace-nowrap mr-5">
                Order ID
              </Label>
              <Input
                id="orderId"
                name="orderId"
                type="text"
                value={formData.orderId}
                onChange={handleInputChange}
                className="mt-2 border-gray-300"
                required
              />
            </div>

            <div className="flex items-center gap-12">
              <Label htmlFor="orderEmail" className="text-gray-700 font-medium whitespace-nowrap">
                Order Email
              </Label>
              <Input
                id="orderEmail"
                name="orderEmail"
                type="email"
                value={formData.orderEmail}
                onChange={handleInputChange}
                className="mt-2 w-full border-gray-300"
                required
              />
            </div>

            <div className="flex justify-end">
  <Button
    type="submit"
    className="bg-[#2BB673] hover:bg-[#2BB673] text-white py-5 px-12 text-lg font-medium cursor-pointer rounded-sm"
  >
    Submit
  </Button>
</div>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
