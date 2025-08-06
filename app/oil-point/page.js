import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OilPoint = () => {
  return (
    <>
      <section className="relative bg-white h-[80px] lg:h-[100px]">
        <div className="container mx-auto px-5 sm:px-0 h-full">
          <div className="relative h-full">
            <Image
              src="/assets/product-detail/banner.png"
              alt="banner"
              height={100}
              width={200}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
            {/* <img
            alt="banner"
            fetchPriority="high"
            decoding="async"
            data-nimg="fill"
            className="object-cover hidden lg:block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=3840&amp;q=75 3840w"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.a8d6cf57.jpg&amp;w=3840&amp;q=75"
            style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
          /> */}
            <div className="absolute inset-0 flex flex-col justify-center">
              <div className="flex justify-between items-center gap-5 text-[10px] md:text-xs lg:text-3xl">
                <h1 className="italic font-bold text-[#69727b] hidden lg:block">
                  Markdrawing
                </h1>
                <div className="w-full lg:w-1/2 lg:ml-24 ml-0 flex justify-center bg-[#2BB673] lg:bg-transparent h-[80px] lg:h-auto items-center lg:items-start">
                  <p className="text-white text-lg capitalize w-full md:w-auto text-center">
                   Oil Paint
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
    </>
  );
};

export default OilPoint;
