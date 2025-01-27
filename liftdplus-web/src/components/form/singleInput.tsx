import { ChangeEvent } from 'react';
import { FormData } from './types';

interface singleInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formData: FormData,
  label: string,
  labelId: string,
  field: string,
  type: string
  required: boolean
}

const SingleInput = ({
  handleChange,
  formData,
  label,
  labelId,
  field,
  type,
  required
}: singleInputProps) => {
  return (
    <div className='w-auto flex justify-left ml-4'>
      <label className='text-xl mb-2 p-3'>
        <div className='flex flex-row'>
          {required?<p className='text-red-600'>*</p>:<></>}
          <p>{label}</p>
        </div>
        <input
        className='border border-black p-1'
        type={type}
        id={labelId}
        name={labelId}
        value={formData[field]}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
        required
        />
      </label>
    </div>
  );
};

export default SingleInput;