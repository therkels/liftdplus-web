import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="bg-primary w-full pb-3">
        <div className="text-secondaryText mx-auto text-center space-y-4 w-full max-w-lg pt-4">
          <p className="font-bold text-4xl">
            ANSWER. DISCOVER. SAVE.
          </p>
          <p className="font-normal text-xl">
            Help us improve product discovery for cannabis products. Plus, score
            exclusive discounts!
          </p>
          <div className="pt-5">
            <p className="font-bold text-8xl">UP TO 40% OFF<sup>*</sup></p>
          </div>
        </div>
        <p className="text-secondaryText ml-2 mt-4">*pending survey results and recommendations</p>
      </div>
      <div className="bg-white text-secondaryText w-full py-20">
        <div>
        <div className="ml-5">
            <p className="text-6xl pb-4 font-bold">Cannabis simplified.</p>
          </div>
          <p className="text-2xl mx-5">Get started by taking our quick preference survey. 
            Your responses are confidential and used solely to craft personalized product 
            recommendations tailored to your needs. Experience a smarter, more intuitive 
            way to discover cannabis
          </p>
          <div className="flex justify-center my-5">
            <button className="text-white bg-brown p-2 rounded">
              <Link href="/survey">
              GET STARTED
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-lightBrown text-secondaryText w-full py-20">
        <div>
        
            <p className="text-6xl pb-4 font-bold text-center">Our Mission</p>
          <div className="mx-8">
            <p className="text-2xl">
              <b>simplify processes</b> in the cannabis industry 
              for <b>consumers and dispensary owners alike</b> by addressing the challenges of a <b>disjointed, 
              fragmented system</b> with <b>innovative solutions</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
