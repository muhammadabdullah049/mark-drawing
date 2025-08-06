import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WallArt = () => {
  return (
    <section className="py-6 bg-[#F2F2F2] hover:shadow-lg transition-shadow">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-36">
                {[
                  {
                    image: "/assets/home-page-img/wal-art-collection.png",
                    title: "Echoes of Humanity",
                    originalPrice: "87.00 GBP",
                    salePrice: "43.50 GBP",
                    discount: "50% Off",
                    sold: 56,
                    views: 955,
                    rating: 5,
                  },
                  {
                    image: "/assets/home-page-img/wal-art-collection.png",
                    title: "Abstract Journey",
                    originalPrice: "85.25 GBP",
                    salePrice: "42.63 GBP",
                    discount: "50% Off",
                    sold: 17,
                    views: 798,
                    rating: 5,
                  },
                  {
                    image: "/assets/home-page-img/wal-art-collection.png",
                    title: "Cubist Café",
                    originalPrice: "92.00 GBP",
                    salePrice: "46.00 GBP",
                    discount: "50% Off",
                    sold: 23,
                    views: 1203,
                    rating: 5,
                  },
                  {
                    image: "/assets/home-page-img/wal-art-collection.png",
                    title: "Serenade of Colors",
                    originalPrice: "118.00 GBP",
                    salePrice: "59.00 GBP",
                    discount: "50% Off",
                    sold: 41,
                    views: 876,
                    rating: 5,
                  },
                ].map((item, index) => (
                    <Link href={"/wallart/wallartDetail"}>
                  <div
                    key={index}
                    className="w-[90%] bg-white shadow-sm rounded-md border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="relative p-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full object-cover rounded-md"
                      />
                    </div>
    
                    <div className="pb-4 px-4">
                      {/* Title */}
                      <h3 className="text-center font-medium text-gray-800">
                        {item.title}
                      </h3>
    
                      {/* Pricing */}
                      <div className="text-center">
                        <span className="text-[#B12704] font-semibold text-lg mr-2">
                          {item.salePrice}
                        </span>
                        <span className="text-gray-500 line-through text-sm mr-2">
                          {item.originalPrice}
                        </span>
                        <span className="text-green-600 font-medium text-sm">
                          {item.discount}
                        </span>
                      </div>
    
                      {/* Star Rating */}
                      <div className="flex justify-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
    
                      {/* Sold and Views */}
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Sold: {item.sold}</span>
                        <span>Views: {item.views}</span>
                      </div>
                    </div>
                  </div>
                    </Link>
                ))}
              </div>
            </div>
          </section>
  )
}

export default WallArt