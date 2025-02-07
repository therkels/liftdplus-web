export interface FormData {
  [key: string]: string | string[];
  source: string;
  email: string;
  first_name: string;
  last_name: string;
  potency_preference: string;
  experience: string;
  sensitivity: string[];
  consumption_preference: string[];
  effect_speed: string;
  usage_reason: string[];
  usage_time: string[];
  effect_avoid: string[];
  flavor_preference: string[];
  received_at: string;
  usage_goals: string[];
  cbd_focus: string;
  budget: string;
}

export interface QuestionItem {
  id: string,
  question: string,
  type: string,
  answers: string[]
};

export type Questionnaire = QuestionItem[];

export interface StepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface StepQuestionProps {
  questionItem: QuestionItem;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
