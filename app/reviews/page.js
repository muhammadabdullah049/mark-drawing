"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

export default function ReviewsPage() {
  const [currentVideoSet, setCurrentVideoSet] = useState(0)

  const videoTestimonials = [
    [
      {
        title: "Oil Paint Review",
        thumbnail: "/placeholder.svg?height=300&width=400",
        channel: "Mark Drawing",
        verified: true,
      },
      {
        title: "Customer getting emotional",
        thumbnail: "/placeholder.svg?height=300&width=400",
        channel: "Mark Drawing",
        verified: true,
      },
      {
        title: "Customer Birthday",
        thumbnail: "/placeholder.svg?height=300&width=400",
        channel: "Mark Drawing",
        verified: true,
      },
    ],
  ]

  const reviews = [
    {
      name: "Belinda Gore",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 22, 2024",
      text: "My Brother would have been 50 this year amongst his mates. 1 out of 5 friends remain earth-bound. So here is my Brother's mate amongst his guardian angels. The devil amongst his Angel friends. Mark Drawings have once again captured something amazing. Can't thank you enough!",
    },
    {
      name: "Bernice Feaver",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 19, 2024",
      text: "My best friend died suddenly and unexpectedly at the age of 38. I then realized I didn't have a decent photo of us together. Mark Drawings provided the perfect answer and a beautiful drawing of us together was composed. I found the ordering process easy, and I had no qualms with the end result. The only thing I would have liked was an update on the progress of my drawing. This is the first time I've used Mark Drawings, and I wasn't 100% sure how the process works. I received a confirmation email after purchase and that was it until I received the finished product. So some communication would have been nice. I wouldn't hesitate to use Mark Drawings again. Many thanks :)",
    },
    {
      name: "Tegan Clenshaw",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 16, 2024",
      text: "I am beyond happy! This drawing is so special to my husband and me. My husband's pop wasn't able to meet our daughter (his first great-grandbaby) due to being in lockdown with COVID when he passed away. I can't thank you enough for creating this special keepsake for us! 😊",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700 italic">Markdrawing</div>
            <div className="bg-green-500 text-white px-8 py-3 rounded-l-full text-lg font-medium">Reviews</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Video Testimonials Section */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full"
              onClick={() => setCurrentVideoSet(Math.max(0, currentVideoSet - 1))}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full"
              onClick={() => setCurrentVideoSet(Math.min(videoTestimonials.length - 1, currentVideoSet + 1))}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
            {videoTestimonials[currentVideoSet].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                  {/* Channel Info */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black bg-opacity-70 rounded-full px-3 py-1">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-white text-sm">{video.channel}</span>
                    {video.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  {/* Share Button */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded px-2 py-1">
                    <span className="text-white text-sm">Share</span>
                  </div>
                </div>
                <h3 className="text-center mt-4 font-medium text-gray-800">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">{review.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {review.location}
                    </Badge>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-green-500 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 text-xs">✓ Verified</Badge>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
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
