import React, { useState, ChangeEvent} from 'react';
import Link from 'next/link';
import axios from 'axios';
import MultiFormItem from './multiFormItem';
import {StepProps, StepQuestionProps, FormData} from './types';
import SingleInput from './singleInput';
import getFormattedDate from '@/utils/date';
const questionare = [
  {
    id: 'potency_preference',
    type:'radio',
    question: "Do you prefer a specific dosage or potency range?",
    answers: [
      "Low THC (1-10%): Gentle effects, good for beginners (e.g., low-dose gummies, CBD flower)",
      "Moderate THC (11-20%): Balanced effects (e.g., regular flower, moderate edibles)",
      "High THC (21%+): Strong effects for experienced users (e.g., high-potency flower, concentrates)",
      "Not Sure/Open to Recommendations"
    ]
  },
  {
    id: 'experience',
    question: "How Would You Describe Your Experience with Cannabis?",
    type:'radio',
    answers: [
      "Novice User: I have little to no experience with cannabis (tried it once or twice, or never)",
      "Occasional User: I use cannabis occasionally, about 1-4 times per month",
      "Frequent User: I use cannabis regularly, 5 or more times per week"
    ]
  },
  {
    id: 'sensitivity',
    question: "How often do you consume cannabis, and how sensitive are you to its effects?",
    type:'radio',
    answers: [
      "I rarely consume and have no to low tolerance",
      "I consume occasionally and have low to moderate tolerance",
      "I consume frequently and have high tolerance",
      "I am unsure of my tolerance level"
    ]
  },
  {
    id: 'consumption_preference',
    question: "Do you have a preference for how you consume cannabis? (Select all that apply) ",
    type:'checkbox',
    answers: [
      "Flower",
      "Vape/Cartridge",
      "Edible",
      "Topical",
      "Tincture",
      "Not Sure/Open to Recommendations"
    ]
  },
  {
    id: 'effect_speed',
    question: "Do you want something that works quickly, like a vape, or something that takes longer to work, like a gummy or cookie?",
    type:'radio',
    answers: [
      "Fast Acting",
      "Works Slowly but Lasts Longer",
      "No preference"
    ]
  },
  {
    id: 'usage_reason',
    question: "What are your primary reasons for using cannabis? (Select all that apply)",
    type:'checkbox',
    answers: [
      "relaxation",
      "Focus",
      "Pain Relief",
      "Stress Relief",
      "Sleep",
      "Recreation",
      "Socialization"
    ]
  },    
  {
    id: 'usage_time',
    question: "When do you typically consume cannabis? (Select all that apply)",
    type:'checkbox',
    answers: [
      "Morning",
      "Afternoon",
      "Evening",
      "Before Bed"
    ]
  },
  {
    id: 'effect_avoid',
    question: "Are there specific things you want to avoid in your cannabis experience? (select all that apply)",
    type:'checkbox',
    answers: [
      "Feeling too high",
      "Lingering effects",
      "Noticeable scent"
    ]
  },
  {
    id: 'flavor_preference',
    question: "Do you have a preference for certain flavors or aromas? (Select all that apply)",
    type:'checkbox',
    answers: [
      "Fruity (e.g., citrus, berry)",
      "Herbal (e.g., minty, pine)",
      "Earthy (e.g., woody, natural)",
      "Sweet (e.g., candy-like, dessert)"
    ]
  }
];

interface StepIntroPops {
  doesConsent: boolean,
  setDoesConsent: React.Dispatch<React.SetStateAction<boolean>>,
}

const StepIntro: React.FC<StepIntroPops> = ({doesConsent, setDoesConsent}) => {
  return (
    <div className="w-auto m-3 pt-4">
      <div className="md:text-lg font-semibold mb-4">
        <p>Curated Cannabis Recommendations Await</p>
      </div>
      <div>
        <p className="pb-2">Welcome!</p>
        <p className="pb-5">
        Thank you for taking the time to participate in our survey! Our team is dedicated 
        to making cannabis product discovery simple and personalized. 
        By answering just a few quick questions, we&apos;ll suggest products 
        that fit your preferences and needs. Whether you&apos;re a first-time user or experienced, 
        we&apos;re here to help you find the right products for your lifestyle.
        </p>
        <p className="mb-5">
          <strong>Important Note:</strong><br />
          We are in the early stages of developing our product recommendation process. 
          This survey helps us learn and improve how we suggest products based on your preferences. 
          Your information is private, secure, and will be used solely to enhance our recommendation system. 
          We will never share or sell your data to anyone, including dispensaries or partners. 
          For more details, please review our <Link className="underline" href="/privacy">Privacy Policy</Link>.
          <br/><b>As a reminder, we are not selling any products or services. This is a free, experimental tool.</b>
        </p>
        <p className="pb-4">
          Confirmation Notice: By clicking the button below, you confirm that:
        </p>
        <ul className="list-disc mb-4 pl-5">
          <li>You are 21 years of age or older, or 18+ with a valid medical card.</li>
          <li>You are participating in a state/region where cannabis sales and consumption is legal.</li>
          <li>You agree to receive emails from LIFTD+ related to your participation, including product recommendations, 
            reminders, post-experience surveys, and future opportunities to try out new services. 
            <b>You can unsubscribe at any time.</b></li>
        </ul>
        <div className="">
          <input
            type="checkbox"
            id="consentCheckbox"
            checked={doesConsent}
            onChange={() => setDoesConsent(!doesConsent)}
          />
          <label htmlFor="consentCheckbox" className="ml-2">
            I consent to the terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
};

const Step1: React.FC<StepProps> = ({ formData, handleChange }) => {
  // Example handler for changing a form value
  return (
    <div>
      <p className='font-bold text-xl p-3 ml-4'>Please enter your email:</p>
      <SingleInput 
      handleChange={handleChange} 
      formData={formData} 
      label='Email' 
      labelId='email'
      field='email'
      type ='email'
      required={true}/>
    </div>
  );
};

const Step2: React.FC<StepProps> = ({ formData, handleChange }) => {
  return (
    <div>
      <p className='font-bold text-xl ml-10'>Please enter your first name (last name optional):</p>
      <div className='
        w-auto flex flex-col items-center p-4
        md:flex-row md:justify-left md:space-x-3
      '>
        <div className='flex flex-col'>
          <SingleInput 
            handleChange={handleChange} 
            formData={formData} 
            label='First Name' 
            labelId='first_name'
            field='first_name'
            type='text'
            required={true}/>
        </div>
        <div className='flex flex-col'>
        <SingleInput 
            handleChange={handleChange} 
            formData={formData} 
            label='Last Name' 
            labelId='last_name'
            field='last_name'
            type='text'
            required={false}/>
        </div>
      </div>
    </div>
  );
};

const StepQuestion: React.FC<StepQuestionProps> = ({ questionItem, formData, handleChange }) => {
  return (
    <MultiFormItem 
    handleOptionChange={handleChange}
    id={questionItem.id}
    formData={formData}
    question={questionItem.question}
    answers={questionItem.answers}
    type={questionItem.type}
    />
  );
};

const StepOutro = ({hasError}: {hasError: boolean }) => {
  // Example handler for changing a form value
  return (
    <>
    {hasError ? 
    <div className='w-auto m-3 pt-4'>
      <p>
        Thank you for sharing your preferences! 
        We’re using your answers to recommend products tailored just for you. 
        You’ll receive your personalized recommendations from info@liftdplus.com shortly.<br/>

        Please be sure to check your spam or junk folders if you don’t see the email in your inbox within the next 48-72 hours.
      </p>
    </div>
    : 
    <div className='w-auto m-3 pt-4'>
      <p>We apologize for the inconvenience, but it appears something went wrong with your submission :(
      <br/>Please try again shortly.
      If the issue persists, please reach out to info@liftdplus.com.
      </p>  
    </div>}
    </>
  );
};

const MultiStepForm: React.FC<{sc:string;}> = ({sc}) => {
  const [step, setStep] = useState<number>(0);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    source: sc,
    email: '',
    first_name: '',
    last_name: '',
    potency_preference: '',
    experience: '',
    sensitivity: [],
    consumption_preference: [],
    effect_speed: '',
    usage_reason: [],
    usage_time: [],
    effect_avoid: [],
    flavor_preference: [],
    recieved_at: '',
  });
  const [err, setErr] = useState<string>("");
  const [doesConsent, setDoesConsent] = useState<boolean>(false);

  const handleChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };

  const validateInput = (): boolean => {
    let currErr: string = "";
    //check email
    if (step == 0 && !doesConsent){
      currErr = 'Consent required for this survey';
    }
    if (step === 1) {
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[cC][oO][mM]$/;
      if(!regex.test(formData.email)) {
        currErr = 'Please use a valid email ending in ".com"';
      }
    }
    if (step === 2) {
      if (formData.first_name.length == 0) {
        currErr = "Please enter a first name"
      }
    }
    if (step >= 3) {
      const question = questionare[step - 3];
      if (question.type === 'radio' && !formData[question.id]) {
        currErr =`Please select an option`;
      }
      if (question.type === 'checkbox' && (formData[question.id] as string[]).length === 0) {
        currErr = `Please select at least one option`;
      }
    }
    setErr(currErr);
    return currErr!=="";
  }
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "checkbox") {
       setFormData((prevData) =>{
        const oldArr = prevData[event.target.id];
        if (Array.isArray(oldArr)) {
            let newArr: string[] = oldArr;
            if (event.target.checked) {
                newArr = [...newArr,event.target.value];
            }
            else {
                newArr = newArr.filter(val => val !== event.target.value);
            }
            return {
                ...prevData,
                [event.target.id]: newArr
            }
        }
        return {
            ...prevData,
        }
       })
    }
    else{
        setFormData((prevData) => ({
            ...prevData,
            [event.target.id]: event.target.value
        }));
    }
  };

  const handleSubmit = async() => {
    const err = validateInput();
    if (!err) {
      try{
        //post
        setFormData(prevData => ({
          ...prevData,
          recieved_at: getFormattedDate()
        }))
        await axios.post('https://therkels.pythonanywhere.com/survey/submit', formData, {
          headers: {
            'Content-Type': 'application/json'
          },
        });
        console.log(formData)
        setDidSubmit(true);
        nextStep();
      }
      catch (e){
        console.error('Error:', e)
      }
      nextStep();
    }
  };

  const steps = [
    <StepIntro key="s0" doesConsent={doesConsent} setDoesConsent={setDoesConsent}/>,
    <Step1 key="s1" formData={formData} handleChange={handleChange} />,
    <Step2 key="s2" formData={formData} handleChange={handleChange} />,
  ];
  questionare.map((item,idx) => steps.push(<StepQuestion key={idx} questionItem={item} formData={formData} handleChange={handleOptionChange}/>))

  const nextStep = () =>  {
    const err = validateInput();
    if (!err) {
      setStep((prev) => Math.min(prev + 1, steps.length));
    }
  }
  const prevStep = () => {
    setErr("");
    setStep((prev) => Math.max(prev - 1, 0))
  };

  return (
    <div className='bg-white'>
      {steps.length !== step?
      <>
        <div className='text-right p-3'>
        <p>Step {step} of {steps.length-1}</p>
      </div>
      {steps[step]}
      {err ? <p className='text-red-500 pl-7'>{err}</p> : <></>}
      <div className='flex justify-center pb-10'>
        {step > 0 && (
          <button
            className="text-white text-lg px-4 py-2 m-3 min-w-32 bg-rose-500 button-size"
            onClick={prevStep}
          >
            Previous
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            className="text-white text-lg px-4 py-2 m-3 min-w-32 bg-rose-500 button-size"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <button
            className="text-white text-lg px-4 py-2 m-3 bg-rose-500 button-size"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      </>:
      <>
      <StepOutro hasError={didSubmit}/>
      <div className='flex justify-center'>
        <Link 
        href="/" 
        className="inline-block px-4 py-2 m-3 min-w-32 font-bold text-white bg-rose-500"
        >
          Return Home
        </Link>
      </div>
      </>
      }
    </div>
  );
};

export default MultiStepForm;