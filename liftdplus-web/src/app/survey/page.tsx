"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  email: string;
  message: string;
}

interface FormErrors {
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({ email: '', message: '' });

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Field-specific validation
    if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? '' : 'Invalid email address',
      }));
    }

    if (name === 'message') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: value.trim().length > 0 ? '' : 'Message cannot be empty',
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Final validation check before submission
    const finalErrors: FormErrors = {
      email: validateEmail(formData.email) ? '' : 'Invalid email address',
      message: formData.message.trim().length > 0 ? '' : 'Message cannot be empty',
    };

    setErrors(finalErrors);

    const noErrors = Object.values(finalErrors).every((error) => error === '');

    if (noErrors) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully');
      // Proceed with form submission logic (e.g., API call)
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">
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
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
            />
          </label>
          {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;