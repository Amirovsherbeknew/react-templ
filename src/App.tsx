import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm, FormProvider } from 'react-hook-form';

function App() {
  const methods = useForm();

  const onSubmit = async (data:any) => {
    try {
      // Formdan malumotlarni yuborish
      console.log(data);
    } catch (error) {
      // Xatolikni yuqori darajada yoritish
      alert('Xatolik: ');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
            <input
              type="email"
              id="email"
              className={`input ${methods.formState.errors.email ? 'red-border' : ''}`}
              {...methods.register('email', {
                required: {
                  value: true,
                  message: 'Email manzilni kiriting',
                },
              })}
            />
            <select  value={undefined} className={`input ${methods.formState.errors.gender ? 'red-border' : ''}`}
              {...methods.register('gender', {
                required: {
                  value: true,
                  message: 'gender  kiriting',
                },
              })}>
                <option value="">Tanlang...</option>
              <option value="value1">label1</option>
              <option value="value2">label2</option>
              <option value="valu3">label3</option>
            </select>
            <input
              type="number"
              id="age"
              className={`input ${methods.formState.errors.age ? 'red-border' : ''}`}
              {...methods.register('age', {
                required: {
                  value: true,
                  message: 'Yoshni kiriting',
                },
              })}
            />
            <input
              type="text"
              id="name"
              className={`input ${methods.formState.errors.name ? 'red-border' : ''}`}
              {...methods.register('name', {
                required: {
                  value: true,
                  message: 'Ismni kiriting',
                },
              })}
            />
            <button type="submit">Submit</button>
          </form>
    </FormProvider>
  );
}

export default App;
