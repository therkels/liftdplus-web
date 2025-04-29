"use client";

import { funnelSans } from "@/ui/fonts";

export default function Home() {
    return (
      <div>
        <div className={`${funnelSans.className}  text-black bg-primaryBlue p-5`}>
          <p className="text-6xl pt-48">Product Vision</p>
          <p className="text-3xl py-10 md:pr-40">
            We are developing a <b>streamlined, efficient, and user-friendly</b> platform that enhances 
            product discovery through <b>AI-driven recommendations</b>
          </p>
        </div>
        <div className={`${funnelSans.className} text-black bg-secondaryBlue p-5 md:flex md:flex-row`}>
          {/* First column */}
          <div className="w-full md:w-1/3">
            <p className="text-6xl pt-10">Our Values</p>
          </div>
          {/* Second column with two more columns (2 rows) */}
          <div className="w-full md:w-1/3 p-5 space-y-10">
              <div>
              <p className="text-2xl font-semibold pb-4">Innovation</p>
              <p>Set the trends and shape the cannabis industry by offering cutting-edge technical solutions that modernize current practices</p>
              </div>
              <div>
              <p className="text-2xl font-semibold pb-4">Educational Empowerment</p>
              <p>
                Raise awareness of cannabis benefits beyond the “high” and provide accessible, 
                clear product knowledge to reshape how people view cannabis in an effort to destigmatize usage.
              </p>
              </div>
          </div>
            <div className="w-full md:w-1/3 p-5 md:mt-12 space-y-10">
              <div>
              <p className="text-2xl font-semibold pb-4">Equity</p>
              <p> Level the playing field by empowering businesses to market their unique value propositions. 
                By cutting through the overwhelming choices that favor larger companies, we help consumers make informed decisions based on product quality, 
                not just advertising reach.
              </p>
              </div>
              <div>
              <p className="text-2xl font-semibold pb-4">Community</p>
              <p>Partner with customers to drive business while fostering positive social engagement</p>
              </div>
          </div>
        </div>
     </div>
    )
  }