import './App.css';
import useForm from './Hooks/useForm';
import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import PhoneInput from 'react-phone-input-2'
import Slider from 'react-rangeslider'
import 'react-phone-input-2/lib/style.css'
import 'react-rangeslider/lib/index.css'
const animatedComponents = makeAnimated();
function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'Mango', label: 'Mango' },
    { value: 'Orange', label: 'Orange' }
  ]
  //Final submit function
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }
  const [volume, setErrors] = useState(0);
  const [phone, setPhone] = useState(0);

  const {handleChange, values,errors,handleSubmit} = useForm(formLogin);
  function handleOnChange(value){
    setErrors(value)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
      {
        errors.email && <h3>{errors.email}</h3>
      }
      <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
      {
        errors.password && <h3>{errors.password}</h3>

      }
      <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
      {
        errors.username && <h3>{errors.username}</h3>

      }
      <PhoneInput
          country={'us'}
          value={phone}
        />
      <Slider
      max={100}
      value={volume}
      onChange={handleOnChange}
      orientation="horizontal"
      />
       <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[0], options[1]]}
      isMulti
      options={options}
    />
      <input type="submit" value="Submit" className="submit"  />
      
      
      </form>

    </div>
  );
}

export default App;