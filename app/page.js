import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Facebook, Twitter, MessageCircle } from "lucide-react";
import heroSection from "../public/assets/home-page-img/hero-section.png";
import portraitImage from "../public/assets/home-page-img/portrait.png";
import wallArtImage from "../public/assets/home-page-img/wal-art.png";
import logo from "../public/assets/logo.png";
// import Navbar from "@/components/Navbar";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-[#FFFFFF]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Image
              src={heroSection}
              alt="Make a portrait from your photos"
              height={1200}
              width={1400}
              className="rounded-lg relative"
            />
          </div>
        </div>
      </section>

      {/* Secondary Images */}
      <section className="py-28 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link href="/portraits">
            <div className="text-center cursor-pointer">
              <Image
                src={portraitImage}
                alt="Portrait"
                width={350}
                height={350}
                className="border border-black mb-2"
              />
              <Button
                variant="outline"
                size="lg"
                className="text-[#217C39] border border-[#217C39] rounded-[4px] mt-3 hover:text-white hover:bg-[#217C39]"
              >
                Upload Your Photo
              </Button>
            </div>
            </Link>
            <Link href="/wallart">
            <div className="text-center cursor-pointer">
              <Image
                src={wallArtImage}
                alt="Art in Room"
                width={350}
                height={350}
                className="border border-black mb-2"
              />
              <Button
                variant="outline"
                size="lg"
                className="text-[#217C39] border border-[#217C39] rounded-[4px] mt-3 hover:text-white hover:bg-[#217C39]"
              >
                Start Art
              </Button>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/assets/home-page-img/featured-collections.png",
                title: "Black & White Hand Drawing Portrait Detailed",
                price: "14.99 (GBP)",
              },
              {
                image: "/assets/home-page-img/featured-collections.png",
                title: "Hand Drawing Family Pencil Portraits",
                price: "15.75 (GBP)",
              },
              {
                image: "/assets/home-page-img/featured-collections.png",
                title: "Colour Pencil Hand Drawing Portrait",
                price: "16.99 (GBP)",
              },
              {
                image: "/assets/home-page-img/featured-collections.png",
                title: "The most Popular Oil paint Portrait",
                price: "29.57 (GBP)",
              },
            ].map((item, index) => (
              <Link href={"/product/product-detail"} key={index}>
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

      {/* Gallery Grid */}
      <section className="pb-6 bg-[#F2F2F2] hover:shadow-lg transition-shadow">
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
              <Link href={"/wallart"} key={index}>
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

      {/* Portraits from Photos Section */}
      <section className="py-[120px] px-10 lg:pl-[120px] bg-[#F9F9F9]">
        <div className="flex flex-wrap">
          <div className="lg:max-w-[66.66%] ">
            <div className="border border-[#ccc] px-8 py-5 relative">
              <div className="absolute -left-5 -top-5 border border-[#ccc] w-full h-[104%]"></div>
              <h3 className="text-4xl font-bold">
                <span className="text-[#2bb573]">Portraits</span>{" "}
                <span>from your photos</span>
              </h3>
              <div className="text-[#69727B] my-5 flex flex-col gap-5">
                <p>
                  The Only Place to get your family portraits or any hand
                  drawing portraits drawings from your photos. You will provide
                  your favorite photos of your favorite persons or your favorite
                  pet and our team will turn them into fantastic portraits.
                </p>
                <p>
                  You'll be able to take a photo off your phone or camera and
                  transfer it at that point arrange on our site, yes it’s truly
                  that easy. Not only our portraits amazing stunning they are
                  very cost-effective with prices from just £12.99.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[33.33%]">
            <Image
              src="/assets/home-page-img/orginalone.png"
              alt="Make a portrait from your photos"
              height={1200}
              width={1400}
              className="rounded-lg relative"
            />
            {/* <img
              alt="Portraits"
              loading="lazy"
              width="2000"
              height="1500"
              decoding="async"
              data-nimg="1"
              srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forginalone.459f04f9.webp&amp;w=2048&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forginalone.459f04f9.webp&amp;w=3840&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forginalone.459f04f9.webp&amp;w=3840&amp;q=75"
              style="color: transparent;"
            /> */}
          </div>
        </div>
      </section>

      {/* About Wal Art Section */}
      <section className="pb-[120px] px-6 md:px-10 lg:pl-[120px] bg-[#F9F9F9]">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10">
          <div className="w-full lg:w-2/3 flex items-center">
            <div className="border border-[#ccc] px-5 md:px-8 py-5 relative">
              <div className="absolute -left-5 -top-5 border border-[#ccc] w-full h-[104%]"></div>
              <h3 className="text-2xl md:text-4xl font-bold">
                <span>About</span> <span className="text-[#2bb573]">Wal Art</span>
              </h3>
              <div className="text-[#69727B] my-5 flex flex-col gap-5">
                <p>
                  At Mark Drawing, we specialize in hand-painted artwork that
                  brings unique, handcrafted beauty into your space. Our wall
                  art collection features meticulously crafted pieces that
                  combine artistic tradition with modern elegance, perfect for
                  adding character and style to any room.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <div className="w-[250px] md:w-[350px] h-auto mt-5 md:mt-0 mx-auto">
              {" "}
              <Image
              src="/assets/home-page-img/about-wal-art.png"
              alt="Make a portrait from your photos"
              height={1200}
              width={1400}
            />
              {/* <img
                alt="Wall Art"
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
                data-nimg="1"
                className="object-cover"
                sizes="100vw"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=3840&amp;q=75 3840w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.6f7ff89a.jpeg&amp;w=3840&amp;q=75"
                style="color: transparent; width: 100%; height: auto;"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="icon"
          className="rounded-full bg-green-500 hover:bg-green-600 w-12 h-12"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
