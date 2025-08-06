"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pb-20 bg-gray-50">
      {/* Header */}
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
                    Contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-12">
        {/* Contact Information - Full Width */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">
            Need to get in touch?
          </h1>

          <div className="space-y-4 mb-8">
            <div>
              <span className="text-lg">Live Chat:</span> The best way to get in
              touch is to launch the chat service on the website - ACTIVE ONLINE
              MOST OF THE DAY
            </div>

            <div>
              <span>Address:</span> 27 Old Gloucester Street, London, United
              Kingdom, WC1N 3AX
            </div>

            <div>
              <span>EMAIL</span> - We now have one centralised email to contact
              us on
            </div>

            <div>contact@markdrawing.com</div>
          </div>
        </div>

        {/* Form and Map Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 w-full py-5 border-[#9CA3AF] rounded-none"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email*
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full py-5 border-[#9CA3AF] rounded-none"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 w-full py-5 border-[#9CA3AF] rounded-none"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 w-full border-gray-300 h-32 rounded-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="rounded-none bg-[#3EB571] hover:bg-[#3EB571] text-white px-12 py-6 text-lg font-medium cursor-pointer"
            >
              SEND
            </Button>
          </form>

          {/* Map */}
          <div class="map">
            <iframe
              width="100%"
              height="488"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.916564828944!2d-0.10472392542143824!3d51.519429472064346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b36a3aa5ded%3A0x90a050fd9a50b27b!2s27%20Old%20Gloucester%20St%2C%20Holborn%2C%20London%20WC1N%203AF%2C%20UK!5e0!3m2!1sen!2sbd!4v1616924334112!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full bg-green-500 hover:bg-green-600 w-14 h-14 shadow-lg"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}
