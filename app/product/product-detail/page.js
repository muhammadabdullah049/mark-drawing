"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, StarIcon, Upload } from "lucide-react";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import ReviewModal from "@/components/productDetail/ReviewModal";
import Link from "next/link";

const canvasOptions = [
    { id: "frame-10", label: 'A4 Canvas (12"x8")', value: "10" },
    { id: "frame-11", label: 'A3 Canvas (16"x12")', value: "11" },
    { id: "frame-12", label: 'A2 Canvas (24"x16")', value: "12" },
    { id: "frame-13", label: 'A1 Canvas (30"x20")', value: "13" },
    { id: "frame-14", label: 'A0 Canvas (36"x24")', value: "14" },
    { id: "frame-15", label: "Digital Copy only", value: "15" },
  ];

  const frameOptions = [
    { id: "frame-30", label: 'A2 Frame (16" x 23")', value: "30" },
    { id: "frame-31", label: 'A3 Frame (11" x 16")', value: "31" },
    { id: "frame-32", label: 'A4 Frame (8" x 11")', value: "32" },
    { id: "frame-33", label: "Email Copy Only", value: "33" },
    { id: "frame-34", label: 'A1 Frame (23" x 33")', value: "34" },
  ];

  const pricingConfig = {
  "9": { // United Kingdom
    countryName: "United Kingdom (UK)",
    basePrice: 15.0,
    perPerson: 4.0,
    canvasOptions: [
      { id: "canvas-uk-a4", label: 'A4 Canvas (12"x8")', value: "a4", price: 8.0 },
      { id: "canvas-uk-a3", label: 'A3 Canvas (16"x12")', value: "a3", price: 12.0 },
      { id: "canvas-uk-a2", label: 'A2 Canvas (24"x16")', value: "a2", price: 16.0 },
      { id: "canvas-uk-a1", label: 'A1 Canvas (30"x20")', value: "a1", price: 22.0 },
      { id: "canvas-uk-a0", label: 'A0 Canvas (36"x24")', value: "a0", price: 30.0 },
      { id: "canvas-uk-digital", label: "Digital Copy only", value: "digital", price: 0.0 },
    ],
    frameOptions: [
      { id: "frame-uk-a4", label: 'A4 Frame (8" x 11")', value: "a4", price: 12.0 },
      { id: "frame-uk-a3", label: 'A3 Frame (11" x 16")', value: "a3", price: 14.0 },
      { id: "frame-uk-a2", label: 'A2 Frame (16" x 23")', value: "a2", price: 18.0 },
      { id: "frame-uk-a1", label: 'A1 Frame (23" x 33")', value: "a1", price: 24.0 },
      { id: "frame-uk-email", label: "Email Copy Only", value: "email", price: 0.0 },
    ],
  },

  "14": { // Ireland
    countryName: "Ireland",
    basePrice: 20.0,
    perPerson: 5.0,
    canvasOptions: [
      { id: "canvas-ie-a4", label: 'A4 Canvas (12"x8")', value: "a4", price: 10.0 },
      { id: "canvas-ie-a3", label: 'A3 Canvas (16"x12")', value: "a3", price: 15.0 },
      { id: "canvas-ie-a2", label: 'A2 Canvas (24"x16")', value: "a2", price: 20.0 },
      { id: "canvas-ie-a1", label: 'A1 Canvas (30"x20")', value: "a1", price: 28.0 },
      { id: "canvas-ie-a0", label: 'A0 Canvas (36"x24")', value: "a0", price: 35.0 },
      { id: "canvas-ie-digital", label: "Digital Copy only", value: "digital", price: 0.0 },
    ],
    frameOptions: [
      { id: "frame-ie-a4", label: 'A4 Frame (8" x 11")', value: "a4", price: 14.0 },
      { id: "frame-ie-a3", label: 'A3 Frame (11" x 16")', value: "a3", price: 17.0 },
      { id: "frame-ie-a2", label: 'A2 Frame (16" x 23")', value: "a2", price: 21.0 },
      { id: "frame-ie-a1", label: 'A1 Frame (23" x 33")', value: "a1", price: 27.0 },
      { id: "frame-ie-email", label: "Email Copy Only", value: "email", price: 0.0 },
    ],
  },

  "15": { // United States
    countryName: "United States (USA)",
    basePrice: 18.0,
    perPerson: 6.0,
    canvasOptions: [
      { id: "canvas-us-a4", label: 'A4 Canvas (12"x8")', value: "a4", price: 11.0 },
      { id: "canvas-us-a3", label: 'A3 Canvas (16"x12")', value: "a3", price: 16.0 },
      { id: "canvas-us-a2", label: 'A2 Canvas (24"x16")', value: "a2", price: 22.0 },
      { id: "canvas-us-a1", label: 'A1 Canvas (30"x20")', value: "a1", price: 30.0 },
      { id: "canvas-us-a0", label: 'A0 Canvas (36"x24")', value: "a0", price: 38.0 },
      { id: "canvas-us-digital", label: "Digital Copy only", value: "digital", price: 0.0 },
    ],
    frameOptions: [
      { id: "frame-us-a4", label: 'A4 Frame (8" x 11")', value: "a4", price: 13.0 },
      { id: "frame-us-a3", label: 'A3 Frame (11" x 16")', value: "a3", price: 16.0 },
      { id: "frame-us-a2", label: 'A2 Frame (16" x 23")', value: "a2", price: 20.0 },
      { id: "frame-us-a1", label: 'A1 Frame (23" x 33")', value: "a1", price: 26.0 },
      { id: "frame-us-email", label: "Email Copy Only", value: "email", price: 0.0 },
    ],
  },

  // You can add more countries like Canada, Australia, etc.
};


export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [peopleCount, setPeopleCount] = useState("Choose One");
  const [location, setLocation] = useState("United Kingdom (UK)");
  // const [canvasOptions, setCanvasOptions] = useState([]);
  // const [frameOptions, setFrameOptions] = useState([]);
  const [notes, setNotes] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedCanvas, setSelectedCanvas] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  
  const [selectedCountry, setSelectedCountry] = useState("9");
const [selectedPeople, setSelectedPeople] = useState(1);
const [totalPrice, setTotalPrice] = useState(0);


  const productImages = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ];

  const reviews = [
    {
      name: "Belinda Gore",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 22, 2024",
      text: "So happy with my purchase! So this was amongst the makes, 1 out of 5 friends remain earth bound. So here is my Brother's mate amongst his guardian angels. The devil amongst his Angel friends. Mark Drawings have captured this perfectly and it's amazing. Can't thank you enough!",
    },
    {
      name: "Bernice Feeser",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 19, 2024",
      text: "I ordered a portrait of my late father unexpectedly at the age of 38. I then realized I didn't have a decent photo of us together. Mark Drawings provided the perfect answer and a beautiful drawing of us together was the result. The whole process was made easy, and I had no qualms with the end result. The only thing I would have liked was a bit more detail around the eyes and mouth. This is the first time I've used Mark Drawings, and I wasn't 100% sure how the process works. I received a confirmation email after purchase and that was it until I received the final product. Better communication would have been nice, I wouldn't hesitate to use Mark Drawings again. Many thanks :)",
    },
    {
      name: "Tegan Clenshaw",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 18, 2024",
      text: "I ordered a portrait drawing which was special to my husband and me. My husband's dog wasn't able to meet our daughter (his first grand-daughter) due to being a lockdown with COVID when he was born. Mark Drawings did an amazing job creating this special keepsake for us! :)",
    },
    {
      name: "Miss Susan Tilston",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 12, 2024",
      text: "I didn't have a recent picture of myself and my dad who passed away in November. I sent 2 photos off, and the result was amazing, so natural.",
    },
    {
      name: "CINDY BROMLEY",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 12, 2024",
      text: "So drew the pictures I sent him so amazingly. I was shocked I 100% recommend Mark Drawings A+!! Thank you so much",
    },
    {
      name: "Bernadette",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 12, 2024",
      text: "I received an email detailing the drawing, and the likeness for all of us was amazing. It wasn't my original choice, but I understand that certain details were obscured. So, the artist chose a different approach. The completed drawing as it hasn't arrived yet, I'd like to have some indication of when that will be, that's my only request otherwise excellent.",
    },
    {
      name: "Lynnda Gilford",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 8, 2024",
      text: "I placed an order of my dog with two daughters but ordered wrongly firstly. I didn't want one or the other, so I chose my dog. When I contacted them and explained I was delighted, then realized that I had still ordered wrongly, so I emailed them back. I explained that I had made a mistake and sent a print of my dog I had before, and Mark drawings was fab. They were so understanding and helpful. I can't thank them enough. THANK YOU.",
    },
    {
      name: "Lauren",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 5, 2024",
      text: "This is a family member for their 60th birthday and they absolutely loved it. I loved it! Thank you so much.",
    },
    {
      name: "Patricia White",
      location: "IE",
      rating: 5,
      verified: true,
      date: "March 3, 2024",
      text: "Customer service is great. Very accommodating. The portrait is just perfect. Thank you.",
    },
    {
      name: "Elizabeth Inglis",
      location: "IE",
      rating: 5,
      verified: true,
      date: "February 28, 2024",
      text: "Great service, the drawings are amazing, very happy with the finished product. I really enjoy how welcoming the team is, always provides support if you have any questions, and I recommend them to everyone who is looking for a creative investment in their loved ones.",
    },
  ];

  const handleCanvasOption = (option, price) => {
    setCanvasOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleFrameOption = (option, price) => {
    setFrameOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleCountryChange = (e) => {
  setSelectedCountry(e.target.value);
  setSelectedCanvas([]);
  setSelectedFrame([]);
};

const handlePeopleChange = (e) => {
  setSelectedPeople(parseInt(e.target.value));
};

  const handleCanvasChange = (value) => {
  setSelectedCanvas([value]);
  setSelectedFrame([]);
};

  const handleFrameChange = (value) => {
  if (selectedFrame.includes(value)) {
    // Unselect if already selected
    setSelectedFrame([]);
    setSelectedSection(null);
  } else {
    // Select new value only
    setSelectedFrame([value]);
    setSelectedSection("frame");
    // setSelectedCanvas([]);
  }
};

useEffect(() => {
  if (!selectedCountry) return;

  const config = pricingConfig[selectedCountry];
  
  // Base price is always 14.99 GBP regardless of country
  let price = 14.99 + (selectedPeople - 1) * 4.0; // 4 GBP per additional person

  // Add canvas price if selected
  const canvas = config.canvasOptions.find(c => selectedCanvas.includes(c.value));
  if (canvas) price += canvas.price;

  // Add frame price if selected
  const frame = config.frameOptions.find(f => selectedFrame.includes(f.value));
  if (frame) price += frame.price;

  setTotalPrice(price);
}, [selectedCountry, selectedPeople, selectedCanvas, selectedFrame]);

const selectedFramePrice =
  selectedCountry &&
  pricingConfig[selectedCountry] &&
  selectedFrame
    ? pricingConfig[selectedCountry].frameOptions.find(
        (opt) => opt.value === selectedFrame
      )?.price || 0
    : 0;




  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative h-[80px] lg:h-[100px]">
        <div className="container mx-auto px-5 sm:px-0 h-full">
          <div className="relative h-full">
            <Image
              src="/assets/product-detail/banner.png"
              alt="banner"
              height={100}
              width={200} aaddd aa  ww   sww44
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
                    Hand Drawing Family Pencil Portraits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 lg:px-10">
          <nav className="mt-[48px] pb-4">
            <ul className="flex text-[#5B6063] text-xl font-semibold py-[5px] px-[2px]">
              <li>
                <a href="/">Black &amp; White Hand Drawing Portrait Detailed</a>
              </li>
            </ul>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 relative z-10 overflow-hidden">
            <div>
              <div className="relative">
                <div className="relative">
                  <Image
                    alt="Zoomable image"
                    fetchPriority="high"
                    loading="eager"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full bg-gray-100 cursor-crosshair object-cover"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (min-width: 769px) 50vw"
                    //   srcset="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=384&amp;q=40 384w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=640&amp;q=40 640w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=750&amp;q=40 750w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=828&amp;q=40 828w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=1080&amp;q=40 1080w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=1200&amp;q=40 1200w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=1920&amp;q=40 1920w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=2048&amp;q=40 2048w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=3840&amp;q=40 3840w"
                    src="/assets/product-detail/product-detail-img-1.png"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-5 rounded mt-5">
                  <div>
                    <Image
                      alt="Thumbnail image"
                      loading="lazy"
                      width="100"
                      height="75"
                      decoding="async"
                      data-nimg="1"
                      className="w-20 h-20 p-2 cursor-pointer border border-gray-300"
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, 500px"
                      // srcset="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188431.webp&amp;w=3840&amp;q=50 3840w"
                      src="/assets/product-detail/product-detail-img-2.png"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div>
                    <Image
                      alt="Thumbnail image"
                      loading="lazy"
                      width="100"
                      height="75"
                      decoding="async"
                      data-nimg="1"
                      className="w-20 h-20 p-2 cursor-pointer border border-gray-300"
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, 500px"
                      // srcset="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188432.webp&amp;w=3840&amp;q=50 3840w"
                      src="/assets/product-detail/product-detail-img-3.png"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div>
                    <Image
                      alt="Thumbnail image"
                      loading="lazy"
                      width="100"
                      height="75"
                      decoding="async"
                      data-nimg="1"
                      className="w-20 h-20 p-2 cursor-pointer border border-gray-300"
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, 500px"
                      // srcset="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188433.webp&amp;w=3840&amp;q=50 3840w"
                      src="/assets/product-detail/product-detail-img-4.png"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div>
                    <Image
                      alt="Thumbnail image"
                      loading="lazy"
                      width="100"
                      height="75"
                      decoding="async"
                      data-nimg="1"
                      className="w-20 h-20 p-2 cursor-pointer border border-gray-300"
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, 500px"
                      // srcset="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17197188434.webp&amp;w=3840&amp;q=50 3840w"
                      src="/assets/product-detail/product-detail-img-1.png"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2 className="font-medium text-xl md:text-3xl ">
                  Black &amp; White Hand Drawing Portrait Detailed
                </h2>
                <a href="/reviews">
                  <span className="text-blue-600 text-[15px]">
                    Review (169)
                  </span>
                </a>
              </div>
              <div className="pt-10">
                <h3 className="text-[#2BB673] font-bold text-[1.75rem]">
                  {totalPrice.toFixed(2)} <span className="font-bold">(GBP)</span>
                </h3>
                <p className="text-[#69727B] mb-4">
                  <span className="underline">Shipping</span> calculated at
                  checkout.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="font-bold mb-2">Order in 3 easy steps</h2>
                <ul className="list-decimal pl-10 text-[#69727B] flex flex-col gap-4">
                  <li>
                    <p>Choose the number of people you would like to draw?</p>
                  </li>
                  <li>
                    <p>Upload below the photos of the people for drawing.</p>
                  </li>
                  <li>
                    <p>Select your delivery method.</p>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 mb-5">
                <label htmlFor="country-select" className="block text-lg">
                  Where are you based? (MUST BE SELECTED):
                </label>
                <select
                onChange={handleCountryChange}
                  id="country-select"
                  className="form-control block w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-0 bg-transparent"
                  name="apports"
                  defaultValue={"9"}
                >
                  <option value="choisir" disabled="">
                    Choose a country
                  </option>
                  <option value="9">United Kingdom (UK)</option>
                  <option value="14">Ireland</option>
                  <option value="15">United States (USA)</option>
                  <option value="16">Canada</option>
                  <option value="17">Australia</option>
                </select>
              </div>
              <div className="space-y-4 mb-5">
                <div>
                  <label
                    htmlFor="another-country-select"
                    className="block text-[15px]"
                  >
                    How many people / pets?: +{" "}
                    <span className="font-bold">0.00</span> <span>(GBP)</span>
                  </label>
                  <select
                  onChange={handlePeopleChange}
                    id="another-country-select"
                    className="form-control block w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-0 bg-transparent"
                    name="apports"
                    required=""
                  >
                    <option defaultValue="0" disabled="">
                      Choose One
                    </option>
                    <option value="1">1 People</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9">9 People</option>
                    <option value="10">10 People</option>
                    <option value="11">11 People</option>
                    <option value="12">12 People</option>
                    <option value="13">13 People</option>
                    <option value="14">14 People</option>
                    <option value="15">15 People</option>
                    <option value="16">16 People</option>
                    <option value="17">17 People</option>
                    <option value="18">18 People</option>
                    <option value="19">19 People</option>
                    <option value="20">20 People</option>
                    <option value="21">21 People</option>
                    <option value="22">22 People</option>
                    <option value="23">23 People</option>
                    <option value="24">24 People</option>
                    <option value="25">25 People</option>
                    <option value="26">26 People</option>
                    <option value="27">27 People</option>
                    <option value="28">28 People</option>
                    <option value="29">29 People</option>
                    <option value="30">30 People</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4 mb-5">
  <label>
    Canvas Options? (pick one): + <strong>0.00</strong>
    <span>&nbsp;&nbsp;(GBP)</span>
  </label>
  <div className="grid grid-cols-3 gap-5 mt-5 text-[15px]">
    {selectedCountry && pricingConfig[selectedCountry].canvasOptions.map(({ id, label, value, price }) => (
      <div key={id} className="flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          checked={selectedCanvas.includes(value)}
          onChange={() => handleCanvasChange(value)}
        />
        <label htmlFor={id}>
          {label} (+{price.toFixed(2)} GBP)
        </label>
      </div>
    ))}
  </div>
</div>


      {/* Frame Options */}
      
      <div className="space-y-4 mb-5">
  <label>
    Add a print with frame?: + <strong>{selectedFramePrice.toFixed(2)}</strong>
    <span>&nbsp;&nbsp;(GBP)</span>
  </label>
  <div className="grid grid-cols-3 gap-5 mt-5 text-[15px]">
    {selectedCountry && pricingConfig[selectedCountry].frameOptions.map(({ id, label, value, price }) => (
      <div key={id} className="flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          checked={selectedFrame.includes(value)}
          onChange={() => handleFrameChange(value)}
        />
        <label htmlFor={id}>
          {label} (+{price.toFixed(2)} GBP)
        </label>
      </div>
    ))}
  </div>
</div>

              <div className="">
                <label htmlFor="cmnt" className="mb-2 block">
                  Add any notes?
                </label>
                <textarea
                  id="cmnt"
                  cols="30"
                  rows="4"
                  name="notes"
                  className="border border-gray-300 rounded-md w-full p-2"
                ></textarea>
              </div>
              <div className="mt-5">
                <label htmlFor="upload" className="block mb-1">
                  Upload Images?
                </label>
                <div className="border border-[#ced4da] text-[#495057] mt-1 p-1 flex justify-between items-center">
                  <div className="w-1/2">
                    <input
                      id="upload-1"
                      className="w-full"
                      accept="image/jpeg, image/JPEG, image/png, image/PNG, image/jpg, image/JPG, image/gif, image/svg+xml"
                      aria-label="Upload Image 1"
                      type="file"
                      name="upload"
                    />
                  </div>
                  <div className="ml-2">
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600 transition-colors"
                      aria-label="Remove Image 1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-end w-full mt-2">
                  <button
                    className="bg-[#28a745] px-4 py-[6px] text-white rounded shadow transition-transform duration-300 ease-in-out hover:bg-[#239e58] hover:shadow-lg mb-1 text-xs"
                    aria-label="Attach More Images"
                    type="button"
                  >
                    Attach More Images
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <Link href={"/carts"}>
                <Button
                  aria-label="Add to Cart"
                  className="bg-[#2BB673] px-[10px] py-[5px] text-white font-bold text-lg rounded shadow transition-transform duration-300 ease-in-out hover:bg-[#239e58] hover:shadow-lg cursor-pointer"
                  id="Cart"
                  type="button"
                >
                  Add to Cart
                </Button>
                
                </Link>
              </div>
              <div className="mt-2 font-bold">
                <p className="text-[#28a745]">Secure Checkout With</p>
              </div>
              <div>
                <Image
                  alt="payment"
                  loading="lazy"
                  width="480"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="w-[162px]"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayment.296bd76c.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayment.296bd76c.png&amp;w=1080&amp;q=75 2x"
                  src="/assets/product-detail/payment-1.png"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="my-6">
      {/* Tabs */}
      <ul className="flex border-b border-gray-200">
        <li className="mr-4">
          <Button
            onClick={() => setActiveTab("description")}
            aria-label="Description"
            className={`inline-block py-2 px-4 font-medium border-b-2 rounded-none hover:bg-[#F9FAFB] hover:text-[#2BB673] cursor-pointer text-lg ${
              activeTab === "description"
                ? "text-[#2BB673] border-[#2BB673]"
                : "text-gray-600 border-transparent hover:text-[#2BB673]"
            }`}
            variant="ghost"
          >
            Description
          </Button>
        </li>
        <li className="mr-4">
          <Button
            onClick={() => setActiveTab("reviews")}
            aria-label="Reviews"
            className={`inline-block py-2 px-4 font-medium border-b-2 rounded-none hover:bg-[#F9FAFB] hover:text-[#2BB673] cursor-pointer text-lg ${
              activeTab === "reviews"
                ? "text-[#2BB673] border-[#2BB673]"
                : "text-gray-600 border-transparent hover:text-[#2BB673]"
            }`}
            variant="ghost"
          >
            Reviews
          </Button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div className="p-4 flex flex-col gap-5 rounded text-[15px] font-poppins leading-6 text-gray-800">
            <p>
              Create Mark Drawing moment with this Black & white portrait detailed style. This style is drawn with the aid of a digital drawing device which creates a beautiful effect for family portraits.
            </p>
            <p>
              Ordering a Markdrawing will be one of the most emotional gifts/purchases you will ever make.
            </p>
            <p className="font-semibold">How long will it take?</p>
            <span className="list-disc">
              <p>We have managed to make getting your drawing an even quicker process!</p>
              <p>You should expect your preview back within 3 to 5 days from ordering.You will get an email within 12 to 24 hours after ordering telling you your drawing is underway.If there are any issues with your photos or order you will be notified at that point.Then you will get a second email with your preview in 5 to 7 days.</p>
              {/* <li>You will get an email within 12 to 24 hours after ordering telling you your drawing is underway.</li>
              <li>If there are any issues with your photos or order you will be notified at that point.</li>
              <li>Then you will get a second email with your preview in 5 to 7 days.</li> */}
            </span>
          </div>
        )}

        {activeTab === "reviews" && (
  <div className="mt-4">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <p className="text-sm text-gray-600">Reviews (10)</p>
      <ReviewModal />
    </div>

    {/* Review Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Belinda Gore",
          country: "IE",
          date: "March 22, 2024",
          verified: true,
          content:
            "My Brother would have been 50 this year amongst his mates. 1 out of 5 friends remain earth-bound. So here is my Brother’s mate amongst his guardian angels. The devil amongst his Angel thorns. Mark Drawings have once again captured something amazing. Can’t thank you enough!",
        },
        {
          name: "Bernice Feaver",
          country: "IE",
          date: "March 19, 2024",
          verified: true,
          content:
            "My best friend died suddenly... This is the first time I’ve used Mark Drawings, and I wasn’t 100% sure how the process works... I wouldn’t hesitate to use Mark Drawings again. Many thanks :)",
        },
        {
          name: "Tegan Clenshaw",
          country: "IE",
          date: "March 16, 2024",
          verified: true,
          content:
            "I am beyond happy! This drawing is so special to my husband and me... Can’t thank you enough for creating this special keepsake for us!",
        },
      ].map((review, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-lg p-5 border border-gray-100 hover:shadow-lg transition duration-300"
        >
          {/* Top Info Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg text-gray-800">{review.name}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="flex items-center gap-1 font-bold text-lg"><TfiLocationPin /> {review.country}</span>
              </div>
            </div>
            
          </div>

          {/* Star + Verified Row */}
          <div className="flex items-center gap-6 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#2BB673] fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.153c.969 0 1.371 1.24.588 1.81l-3.36 2.443a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.175 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.07 9.377c-.783-.57-.38-1.81.588-1.81h4.153a1 1 0 00.95-.69l1.286-3.95z" />
                </svg>
              ))}
            </div>
            {review.verified && (
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 font-medium ml-1"><FaCheckCircle /> Verified</span>
                <span className="text-gray-400">{review.date}</span>
              </div>
            )}
          </div>

          {/* Review Text */}
          <p className="text-sm text-gray-700 leading-relaxed">{review.content}</p>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb */}
    </div>
  );
}
