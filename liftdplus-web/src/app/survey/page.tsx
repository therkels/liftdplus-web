"use client";

import { useState, ChangeEvent } from 'react';

interface FormData {
    [key: string]: string | string[],
    email: string;
    firstName:string,
    lastName:string,
    dosage_preference:string,
    preference: string[],
    speed: string[],
    reasons: string[],
    consumption: string[],
    effects: string[],
    flavor: string[]
  }

    const answerChoices2 = [
      {
      id: 'dosage_preference',
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
    id: 'preference',
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
        id: 'speed',
        question: "Do you want something that works quickly, like a vape, or something that takes longer to work, like a gummy or cookie?",
        type:'checkbox',
        answers: [
            "Fast Acting",
            "Works Slowly but Lasts Longer",
            "No preference"
        ]
    },
    {
        id: 'reasons',
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
        id: 'consumption',
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
        id: 'effects',
        question: "Are there specific things you want to avoid in your cannabis experience? (select all that apply)",
        type:'checkbox',
        answers: [
           "Feeling too high",
           "Lingering effects",
           "Noticeable scent"
        ]
    },
    {
        id: 'flavor',
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

export default function Home() {
    const [formData, setFormData] = useState<FormData>({ 
        email: '', 
        firstName: '',
        lastName: '', 
        dosage_preference: '',
        preference: [],
        speed: [],
        reasons: [],
        consumption: [],
        effects: [],
        flavor: []
    });
    const handleChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        console.log(formData)
    };
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
            console.log(formData)
        }
      };

    return (
        <div className="bg-white text-secondaryText w-3/4 mx-auto">
            <form>
                <label>
                Email:
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
                />
                </label>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <label>First Name:</label>
                        <input
                        type="name"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Last Name:</label>
                        <input
                        type="name"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='space-y-4'>
                    {answerChoices2.map(({ id, question, type, answers }) => (
                        <div key={id}>
                        <h2>{question}</h2>
                        {answers.map((option, index) => (
                            <div key={`${index}`}>
                            <label key={`${id}-${index}`}>
                            <input
                                id={id}
                                type={type}
                                name={id}
                                value={option}
                                checked={type=== "radio"?formData[id] === option: formData[id].includes(option)}
                                onChange={handleOptionChange}
                            />
                            {option}
                            </label>
                            </div>
                        ))}
                        </div>
                    ))}
                </div>

            </form>
        </div>
    )
  }