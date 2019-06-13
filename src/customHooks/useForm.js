import { useState } from 'react';

export default function useForm(defaultInputs) {

  const [inputs, setInputs] = useState(defaultInputs);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setInputs(defaultInputs);
  }

  return {
    inputs,
    handleChange,
    handleSubmit,
  };
}
