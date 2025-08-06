import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does your Portraits take to complete",
      answer:
        "The Portraits itself takes approximately 3 to 5 days. Then if you choose to get it printed or on canvas, a further 3 to 5 business days to arrive.",
    },
    {
      question: "Can you draw from separate pictures?",
      answer:
        "Yes I can draw from separate pictures, in fact if you have two clear pictures it's even better for me as I can see the details in the face.",
    },
    {
      question: "Do you have a maximum number of people that you can draw in an Artwork?",
      answer:
        "The more the merrier! There's no limit to the number of people in a single artwork. You can have it done with as much people as you want.",
    },
    {
      question: "Can you draw pets?",
      answer: "I love to draw pets, they are priced the same as humans.",
    },
    {
      question: "Do you do bigger sizes?",
      answer:
        "Yes we do bigger size. Our biggest size for frame starts from A2 and for Canvas print the biggest size starts from A0.",
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept payments through card and PayPal.",
    },
    {
      question: "Can I pay cash when my drawing is delivered?",
      answer:
        "At the moment we do not offer Cash payment upon delivery of your drawing but you can chose from any of our electronic payment options. Payment is required before we commence with the drawing.",
    },
    {
      question: "How are these drawn?",
      answer:
        "These are all hand drawn on paper and then scanned and printed either on photo grade paper or on canvas, to any size you want depending on your preference.",
    },
    {
      question: "Can you edit the picture if I don't like it?",
      answer: "Yes until you are satisfied.",
    },
    {
      question: "How do you deliver at the post?",
      answer:
        "Canvases and Prints are sent using various services including Royal Mail, USPS, UPS, FedEx. This depends on your location.",
    },
    {
      question: "Where do you deliver?",
      answer: "We deliver in Ireland, UK, USA, Canada, and Australia.",
    },
     {
      question: "Do you have any fast or express delivery options?",
      answer: "Yes, we do have a 2 business days delivery express option for UK and Ireland only. You need to request it.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
                         FAQ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-12">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <div className="font-semibold text-gray-800 text-lg">
                <span>Q.</span> {faq.question}
              </div>
              {faq.answer && (
                <div className="text-gray-600 font-medium text-lg">
                  <span>A.</span> {faq.answer}
                </div>
              )}
            </div>
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
