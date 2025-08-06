"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"
import paymentImage from "@/public/assets/footer/payment.png"

export default function CartPage() {
  const [quantity, setQuantity] = useState(2)
  const [couponCode, setCouponCode] = useState("")

  const itemPrice = 75.5
  const total = itemPrice * quantity
  const discount = 0.0
  const grandTotal = total - discount

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change)
    setQuantity(newQuantity)
  }

  return (
    <div className="pb-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Cart Table */}
        <div className="bg-[#F9FAFB] overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#3EB571] text-white">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 font-medium">
              <div className="col-span-5 text-center font-bold">Product</div>
              <div className="col-span-2 text-center font-bold">Price</div>
              <div className="col-span-3 text-center font-bold">Quantity</div>
              <div className="col-span-2 text-center font-bold">Total</div>
            </div>
          </div>

          {/* Cart Item */}
          <div className="border-b">
            <div className="grid grid-cols-12 gap-4 px-6 py-6 items-center">
              {/* Product */}
              <div className="col-span-5 flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Echoes of Humanity"
                  width={80}
                  height={80}
                  className="rounded border"
                />
                <div className="ml-20">
                  <h3 className="font-medium text-[#374151] text-lg">Echoes of Humanity</h3>
                  <p className="text-gray-600 my-0.5">Canvas Size: 30×30 Frame Canvas</p>
                  <button className="text-[#3EB571] cursor-pointer">Remove</button>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 text-center">
                <span className="font-medium text-lg">{itemPrice.toFixed(2)} GBP</span>
              </div>

              {/* Quantity */}
              <div className="col-span-3 flex justify-center">
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 bg-[#3EB571] text-white rounded-none hover:bg-[#3EB571] hover:text-white cursor-pointer"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 text-[16px] text-center border rounded-sm mx-2">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 bg-[#3EB571] text-white rounded-none hover:bg-[#3EB571] hover:text-white cursor-pointer"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Total */}
              <div className="col-span-2 text-center">
                <span className="font-medium text-lg">{total.toFixed(2)} GBP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="mt-8 flex justify-end">
          <div className="w-full max-w-md space-y-4">
            {/* Discount Code */}
            <div>
              <label className="flex justify-end text-lg font-semibold text-[#364153] mb-2">Discount Code</label>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 text-lg rounded-none rounded-l-md py-5"
                />
                <Button className="bg-[#3EB571] hover:bg-[#3EB571] text-white px-6 py-5 font-bold text-lg cursor-pointer rounded-none rounded-r-md">Apply</Button>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2 text-right">
              <div className="flex justify-end gap-2 text-lg font-semibold">
                <span className="text-[#374151]">Discount:</span>
                <span className="text-[#364153] font-[400]">{discount.toFixed(2)} GBP</span>
              </div>
              <div className="flex justify-end gap-2 text-lg font-semibold">
                <span className="text-[#374151]">Grand Total:</span>
                <span className="text-[#364153] font-[400]">{grandTotal.toFixed(2)} GBP</span>
              </div>
              <p className="text-gray-600">Taxes and shipping calculated at checkout</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end space-x-3 pt-4">
              <Button
                variant="outline"
                className="rounded-none border-[#3EB571] hover:bg-transparent text-[#3EB571] hover:text-[#3EB571] text-lg cursor-pointer"
              >
                Update
              </Button>
              <Button className="rounded-none text-lg bg-[#3EB571] hover:bg-[#3EB571] text-white cursor-pointer">Check out</Button>
            </div>

            {/* Secure Checkout */}
            <div className="text-center">
              <p className="flex items-center justify-end text-lg text-green-600 mb-2">Secure Checkout With</p>
              <div className="flex items-center justify-end space-x-2">
                <Image src={paymentImage} alt="Payment Methods" width={200} height={50} className="border p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
