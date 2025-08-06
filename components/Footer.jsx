import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-[#69727b]">
            <div className="w-full h-1 bg-[#166534]"></div>
            <div className="bg-[#F7F6F9] px-[5%] py-[100px]">
              <div className="container mx-auto py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <div>
                      <p className="relative text-2xl font-bold pb-2 text-[#69727b]">LATEST NEWS</p>
                      <span className="inline-block w-12 h-1 bg-[#166534]"></span>
                    </div>
                    <p className="pt-3 text-[#69727b]">Wall Art Painting: Transform Your Space with Stunning Artwork</p>
                    <Image
                  src="/assets/footer/footer-wall-art-painting.png"
                  alt="Make a portrait from your photos"
                  height={1200}
                  width={1400}
                />
                    {/* <img
                      alt="Wall Art Painting: Transform Your Space with Stunning Artwork"
                      fetchpriority="high"
                      width="200"
                      height="200"
                      decoding="async"
                      data-nimg="1"
                      className="w-40 md:w-auto h-auto"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=3840&amp;q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fadmin.markdrawing.com%2Fimages%2F17424742641.jpeg&amp;w=3840&amp;q=75"
                      style={{ color: "transparent" }}
                    /> */}
                    <p className="italic pt-3"><strong></strong></p>
                  </div>
                  <div>
                    <p className="relative text-2xl font-bold pb-2 text-[#69727b]">QUICK LINKS</p>
                    <span className="inline-block w-12 h-1 bg-[#166534]"></span>
                    <div className="pt-3">
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/track-your-order">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>TRACK YOUR ORDER</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/contact">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>CONTACT</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/faq">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>FAQ</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/terms">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>TERMS & CONDITIONS</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/family-portrait/black-white-portrait-pencil?q=1">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>FAMILY PORTRAIT</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/news">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>NEWS</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/privacy">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>PRIVACY & REFUND POLICY</span>
                          </p>
                        </a>
                      </div>
                      <div className="flex pb-5 font-semibold text-sm">
                        <a href="/delivery-return-policy">
                          <p className="flex items-center font-semibold hover:text-[#2bb673]">
                            <i className="fas fa-chevron-right mr-2 text-[#2bb673]"></i>
                            <span>DELIVERY & RETURNS POLICY</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="relative text-2xl font-bold pb-2 text-[#69727b]">NEWSLETTER</p>
                    <span className="inline-block w-12 h-1 bg-[#166534]"></span>
                    <p className="pt-3">Sign up for the latest news, offers and styles</p>
                    <form className="pt-3">
                      <input type="hidden" value="e2bXX6OQO6WqkOw3G9W6tyNrOOHwF85IPDrMCBHk" name="_token" />
                      <input
                        className="form-control w-full mb-3 p-3 border text-[#495057] bg-white border-[#ddd] rounded-[.3rem] text-lg"
                        placeholder="Email address"
                        required
                        type="email"
                        name="email"
                      />
                      <input
                        className="w-full py-[10px] px-6 bg-[#166534] text-white rounded-[.25rem] shadow-none"
                        type="submit"
                        value="SUBSCRIBE"
                      />
                    </form>
                  </div>
                  <div>
                    <p className="relative text-2xl font-bold pb-2 text-[#69727b]">
                      PAYMENT METHODS
                      <span className="inline-block w-12 h-1 bg-[#166534]"></span>
                    </p>
                    <Image
                  src="/assets/footer/payment.png"
                  alt="Make a portrait from your photos"
                  height={1200}
                  width={1400}
                />
                  </div>
                </div>
                <hr className="my-5 border border-[#ddd]" />
                <div className="text-center">
                  <p className="py-1 font-bold">© 2024, Markdrawing. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </footer>
  )
}

export default Footer