"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Star, MessageCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function WallArtDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [canvasSize, setCanvasSize] = useState(["30×30 Frame Canvas"])
  const [canvasColor, setCanvasColor] = useState("White")

  const productImages = [
    "/assets/wall-art-detail/wal-art-detail-1.png",
    "/assets/wall-art-detail/wal-art-detail-1.png",
    "/assets/wall-art-detail/wal-art-detail-2.png",
    "/assets/wall-art-detail/wal-art-detail-3.png",
    "/assets/wall-art-detail/wal-art-detail-4.png",
    "/assets/wall-art-detail/wal-art-detail-5.png",
  ]


  
  function handleCanvasSizeChange(selectedSize, checked) {
  if (checked) {
    // If a checkbox is checked, set state to only that size
    setCanvasSize([selectedSize]);
  } else {
    // If unchecked, remove it from state (empty array means none selected)
    setCanvasSize([]);
  }
}


  return (
    <div className=" bg-white my-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            {/* Main Product Image */}
            <div className="mb-6">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt="Echoes of Humanity"
                width={400}
                height={200}
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {productImages.slice(1).map((image, index) => (
                <button
                  key={index + 1}
                  onClick={() => setSelectedImage(index + 1)}
                  className={`border-2 rounded-sm overflow-hidden ${
                    selectedImage === index + 1 ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`View ${index + 2}`}
                    width={120}
                    height={90}
                    className="w-30 h-22 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">Echoes of Humanity</h1>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Product Description */}
            <div className="mb-2">
              <p className="text-gray-600 font-medium leading-relaxed">
                "Echoes of Humanity" is a vibrant exploration of human connection and diversity. Bold shapes and colors
                intertwine to depict figures, gestures, and abstract forms, symbolizing the complex interactions that
                define society. With a striking hand at the center, representing unity and the shared human experience,
                this piece captures the essence of community and individuality. Its dynamic composition draws the viewer
                in, encouraging them to find their own stories within the layers. Perfect for a modern space, this
                artwork brings a sense of depth, energy, and introspection to any room.
              </p>
            </div>

            {/* Sales Stats */}
            <div className="flex flex-col space-y-1 mb-6 text-sm">
  <span className="text-green-600 font-[450]">Sold: 56</span>
  <span className="text-green-600 font-[450]">Views: 955</span>
</div>


            {/* Canvas Size Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-[#4B5563]">Canvas Size :</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  "12×12 Frame Canvas",
                  "16×16 Frame Canvas",
                  "20×20 Frame Canvas",
                  "24×24 Frame Canvas",
                  "30×30 Frame Canvas",
                ].map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={canvasSize.includes(size)}
                      onCheckedChange={(checked) => handleCanvasSizeChange(size, checked)}
                    />
                    <Label htmlFor={size} className="text-md font-[400] text-gray-700">
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            {/* Canvas Color Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-[#4B5563]">Canvas Color :</h3>
              <RadioGroup value={canvasColor} onValueChange={setCanvasColor}>
                <div className="flex space-x-6">
                  {["Black", "White", "Walnut", "Plain Oak"].map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <RadioGroupItem value={color} id={color} />
                      <Label htmlFor={color} className="text-md font-[400] text-gray-700">
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Separator className="my-4" />

            {/* Pricing and Add to Cart */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-[30px] font-bold text-[#B12704]">75.50 GBP</span>
                <span className="text-[30px] font-bold text-[#555555] line-through">151.00 GBP</span>
                <span className="text-[30px] font-bold text-green-600">50% Off</span>
              </div>
              <Button className="bg-[#2BB673] hover:bg-[#239E58] text-white px-3 py-4 rounded-sm text-xl cursor-pointer">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 w-14 h-14 shadow-lg">
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  )
}
