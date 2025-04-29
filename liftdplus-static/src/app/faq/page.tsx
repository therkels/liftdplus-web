"use client";

import Accordion from '@/components/accordion';

const contents = [
  {
    "title":"What is this platform about?",
    "content":"Our goal is to help you discover products that fit your needs without the guesswork. By answering a few quick questions, you’ll get product recommendations tailored to your preferences. We’re here to make buying cannabis easier and more personal.",
  },
  {
    "title":"How does it work?",
    "content":"After completing the short survey, we’ll recommend products you may enjoy using a combination of technology and expert insights. You’ll then receive an email with your personalized recommendations and details on where to redeem special offers.",
  },
  {
    "title":"How is my information used?",
    "content":"Your information is collected to help us improve our product recommendation process. We use your responses to personalize product suggestions based on your preferences and to enhance the overall user experience. All information is kept private, secure, and will only be used to support our research and development efforts. We will never share or sell your data to third parties, including dispensaries or partners.For more details about how we collect, use, and protect your information, please refer to our Privacy Policy (link at bottom of page).",
  },
  {
    "title":"Is my information secure?",
    "content":"Yes, we take data security seriously. We use secure, encrypted platforms to store your information and implement safeguards to protect against unauthorized access. Additionally, we limit data access to only those team members who need it to improve your experience.",
  },
  {
    "title":"Can I request to delete my data?",
    "content":"Absolutely. You have full control over your information. If you’d like us to delete your data at any time, simply email us at info@liftdplus.com with your request, and we’ll promptly process it.",
  },
  {
    "title":"Why are dispensaries offering discounts?",
    "content":"We’re partnering with trusted local dispensaries in Ann Arbor to test our concept. These dispensaries support our idea because it helps them connect with new customers—it’s a win-win-win for everyone involved.",
  },
  {
    "title":"Are the recommendations automatically placed as an order?",
    "content":"No. The recommendations we provide are for you to explore. They are not orders. If you’re interested in trying a recommended product, you’ll need to visit the participating dispensary to make a purchase.",
  },
  {
    "title":"How do I redeem an offer?",
    "content":"To redeem an offer: 1) Show your confirmation email to a staff member at the participating dispensary. 2) They’ll apply the discount to your purchase at checkout. 3) Your confirmation email will include the dispensary’s name, location, and instructions on how to redeem your offer.",
  },
  {
    "title":"Where are the dispensaries located?",
    "content":"Currently, our participating dispensaries are located in Ann Arbor, Michigan. We plan to expand to other areas soon—stay connected with us for updates!",
  },
  {
    "title":"Are there any restrictions on who can participate?",
    "content":"Yes. You must be 21 years or older or 18 years or older for medical cannabis (with a valid medical card). You’ll need to show a valid ID (or medical card, if applicable) when redeeming your offer.",
  },
  {
    "title":"How can I stay updated on your progress?",
    "content":"After completing the survey, you’ll automatically receive updates unless you choose to unsubscribe. We’ll share news, special offers, and opportunities to participate as we grow.",
  },
  {
    "title":"Is participation really free?",
    "content":"Yes! Participation is completely free. You’ll only pay for any products you choose to purchase at the dispensary.",
  },
  {
    "title":"What if I don’t like the recommended products?",
    "content":"We strive to provide recommendations that match your preferences, but we understand they might not always be perfect. You’ll have the opportunity to provide direct feedback through our post-experience survey. If you want to share your thoughts prior to receipt of the post-experience survey, email us at info@liftdplus.com with your thoughts. Your feedback helps us improve—so feel free to share the good, the bad, and the ugly. We want it all!",
  },
  {
    "title":"Can I share my recommendations or offers with a friend?",
    "content":"Your recommendations are personalized and associated with your email address. However, we encourage you to let others know who might be interested in participating. Please share our site so they too can get personalized recommendations.",
  },
  {
    "title":"How often can I participate?",
    "content":"You can retake the survey anytime your preferences change or if you want fresh recommendations. However, special offers may have limits on how often they can be redeemed.",
  },
  {
    "title":"Does participating affect my personal record or legal status?",
    "content":"No. Participating in our survey and using the recommendations has no impact on your personal record or legal status. It’s simply a way to receive tailored product suggestions and connect with trusted dispensaries.",
  },
  {
    "title":"What makes LIFTD+ recommendations different?",
    "content":"We combine your survey responses with expert insights and technology to create personalized product suggestions—like having a digital budtender that learns your preferences over time. Our goal is to reduce the guesswork and help you confidently explore cannabis products that truly fit your lifestyle.",
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