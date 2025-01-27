export interface FormData {
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
};

export interface QuestionItem {
  id: string,
  question: string,
  type: string,
  answers: string[]
};

export interface StepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface StepQuestionProps {
  questionItem: QuestionItem;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
