import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const PortraitsPage = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/assets/portraits/featured-collection-1.png",
                title: "Black & White Hand Drawing Portrait Detailed",
                price: "14.99 (GBP)",
              },
              {
                image: "/assets/portraits/featured-collection-2.png",
                title: "Hand Drawing Family Pencil Portraits",
                price: "15.75 (GBP)",
              },
              {
                image: "/assets/portraits/featured-collection-3.png",
                title: "Colour Pencil Hand Drawing Portrait",
                price: "16.99 (GBP)",
              },
              {
                image: "/assets/portraits/featured-collection-4.png",
                title: "The most Popular Oil paint Portrait",
                price: "29.57 (GBP)",
              },
            ].map((item, index) => (
                <Link href={"/product/product-detail"}>
              <div
                key={index}
                className="bg-white hover:bg-[#F3F4F6] shadow-sm rounded border border-gray-200 p-4 flex flex-col items-center text-center cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-medium mb-4 text-black text-center min-h-[64px] flex items-center justify-center">
                  {item.title}
                </h3>

                <p className="text-2xl font-bold text-black hover:text-[#2bb573] text-center mb-5">
                  {item.price}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#217c39] border text-[#217c39] hover:bg-[#217c39] hover:text-white px-3 py-[6px] rounded"
                >
                  Buy Now
                </Button>
              </div>
                
                </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PortraitsPage