"use client";

import Accordion from '@/components/accordion';

const contents = [
  {
    "title":"What is this platform about?",
    "content":"This platform is designed to make buying cannabis easier and more personal. By answering a few quick questions, you’ll get product recommendations tailored to your preferences. Our goal is to help you discover products that suit you best and simplify your decision-making process.",
  },
  {
    "title":"How does this work?",
    "content":"You’ll complete a short survey about your preferences—similar to questions a budtender might ask at a dispensary. Based on your answers, we’ll recommend products you may enjoy. You’ll then receive an email with your recommendations and details on where to redeem special offers.",
  },
  {
    "title":"How are you using my information?",
    "content":"Your information is private and will only be used to test and improve our platform. We do not sell or share your data with anyone, including dispensaries or partners. Information is stored securely using trusted platforms like Zoho (for surveys) and Squarespace (for our website). For more details, check their privacy policies.",
  },
  {
    "title":"Is this a scam? Why are dispensaries offering discounts?",
    "content":"This is not a scam! We’re working with trusted local dispensaries in Ann Arbor to test our concept. Our partners support our idea and want to connect with new customers—it’s a win-win for everyone.",
  },
  {
    "title":"Are the recommendations I receive automatically placed as an order?",
    "content":"No. The recommendations we provide are for you to explore, but they are not orders. If you want to try a recommended product, you’ll need to visit a dispensary to make a purchase.",
  },
  {
    "title":"How do I redeem my offer?",
    "content":"To redeem an offer, simply show the confirmation email to a staff member at the participating dispensary. They will apply the discount to your purchase at checkout.",
  },
  {
    "title":"How will I know which dispensary to go to?",
    "content":"Your confirmation email will include all the details, like the dispensary name, location, and how to redeem the offer.",
  },
  {
    "title":"Where are the dispensaries located?",
    "content":"For now, our participating dispensaries are all located in Ann Arbor, Michigan. We hope to expand to other areas soon. Stay connected with us for updates!",
  },
  {
    "title":"Are there any restrictions on who can participate?",
    "content":"Yes. You must be: 21 years or older for recreational cannabis or 18 years or older for medical cannabis (with a valid medical card). You’ll need to show a valid ID (and medical card, if applicable) when you redeem your offer.",
  },
  {
    "title":"How can I stay updated on your progress?",
    "content":"After completing the survey, you’ll receive an email asking if you’d like to opt in for updates. If you choose to join, we’ll share news, special offers, and opportunities to participate as we grow. It’s completely optional!",
  },
  {
    "title":"Why are you asking me to complete a post-experience survey?",
    "content":"The post-experience survey is optional but very helpful for us. Your feedback allows us to improve the platform and make it better for future users.",
  },
  {
    "title":"Is my participation really free?",
    "content":"Yes! Participating is completely free. You’ll only pay for any products you choose to buy at the dispensary.",
  },
];

export default function Home() {
    return (
      <>
      <div key={0} className='bg-primaryBlue space-y-5 pt-48 px-10 md:px-20'>
      <hr className="border-t-2 border-black my-4" />
        {
          contents.map((content,idx) => {
            return(
              <div key={idx}>
              <Accordion key={idx} title={content.title} content={content.content}/>
              <hr className="border-t-2 border-black my-4" />
              </div>
            )
          })
        }
      </div>
     </>
    )
  }