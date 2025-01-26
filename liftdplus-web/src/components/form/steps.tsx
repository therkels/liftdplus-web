import React, { useState, ChangeEvent} from 'react';
import MultiFormItem from './multiFormItem';


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
    id: 'sensativity',
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

interface StepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface StepQuestionProps {
  questionItem: QuestionItem;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormData {
  [key: string]: string | string[],
  email: string,
  first_name:string,
  last_name:string,
  potency_preference:string,
  experience: string,
  sensitivity: string[],
  consumption_preference: string[],
  effect_speed: string,
  usage_reason: string[],
  usage_time: string[],
  effect_avoid: string[],
  flavor_preference: string[]

}
interface QuestionItem {
  id: string,
  question: string,
  type: string,
  answers: string[]
}

// const StepIntro: React.FC<StepProps> = () => {
//   // Example handler for changing a form value
//   return (
//     <div className='w-auto flex justify-left ml-4'>
//       get fucked
//     </div>
//   );
// };

const Step1: React.FC<StepProps> = ({ formData, handleChange }) => {
  // Example handler for changing a form value
  return (
    <div className='w-auto flex justify-left ml-4'>
      <label className='text-xl mb-2 p-3'>
        <div className='flex flex-row'><p className='text-red-600'>*</p><p>Email:</p></div>
        <input
        className='border border-black p-1'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        required
        />
      </label>
    </div>
  );
};

const Step2: React.FC<StepProps> = ({ formData, handleChange }) => {
  return (
    <div className='w-auto flex justify-left ml-4'>
      <div className='flex flex-col'>
          <label className='text-xl mb-2 p-3'>
          <div className='flex flex-row'><p className='text-red-600'>*</p><p>First Name:</p></div>
          <input
          className='border border-black p-1'
          type="name"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          />
          </label>
      </div>
      <div className='flex flex-col'>
          <label className='text-xl mb-2 p-3'>
          <div className='flex flex-row'><p>Last Name</p></div>
          <input
          className='border border-black p-1'
          type="name"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          />
          </label>
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

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
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
    flavor_preference: []
  });
  const [err, setErr] = useState<string>("");

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
      const question = questionare[step - 2];
      console.log(question)
      console.log(formData)
      console.log(formData[question.id])
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

  const handleSubmit = () => {
    const err = validateInput();
    if (!err) {
      console.log('Submitting: ', formData);
    }
    // Add your submission logic here
  };

  const steps = [
    <Step1 key="s1" formData={formData} handleChange={handleChange} />,
    <Step2 key="s2" formData={formData} handleChange={handleChange} />,
  ];
  questionare.map((item,idx) => steps.push(<StepQuestion key={idx} questionItem={item} formData={formData} handleChange={handleOptionChange}/>))

  const nextStep = () =>  {
    const err = validateInput();
    if (!err) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  }
  const prevStep = () => {
    setErr("");
    setStep((prev) => Math.max(prev - 1, 0))
  };

  return (
    <div className='bg-white'>
      {steps[step]}
      {err ? <p className='text-red-500 pl-7'>{err}</p> : <></>}
      <div className='flex justify-center'>
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
    </div>
  );
};

export default MultiStepForm;