import { ChangeEvent } from 'react';
import { FormData } from './types';

interface MultiFormItemProps {
  handleOptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string,
  formData: FormData,
  question: string,
  answers: string[],
  type: string // Include this in props if using dynamic input type
}

const MultiFormItem = ({
  handleOptionChange,
  id,
  formData,
  question,
  answers,
  type,
}: MultiFormItemProps) => {
  return (
    <div key={id}>
      <p className='text-xl mb-2 p-3'>{question}</p>
      {answers.map((option, index) => (
        <div className="py-2 px-3"
        key={`${id}-${index}`}>
          <label className='m-2'>
            <input
              className='mr-2 text'
              id={`${id}`} // Make sure each input has a unique id
              type={type}
              name={id}
              value={option}
              checked={type === "radio" ? formData[id] === option : formData[id]?.includes(option)}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultiFormItem;