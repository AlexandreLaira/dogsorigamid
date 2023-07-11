import { func } from 'prop-types';
import React from 'react'


const validation = {
  regex: /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  ,
  message: 'Preencha um email válido',
}

function useForm(type) {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function validate(value){
    if(type === false) return true;
    if(value.length === 0){
      setError('Preencha um valor');
      return false;
    }else if(validation[type] && validation[type].regex.test(value)){
      setError(validation[type].message);
      return false;
    }else{
      setError(null);
      return true;
    }
  }

  function onChange({target}){
    if(error) validate(target.value)
    setValue(target.value)
  }


  return (
    {
      value,
      setValue,
      onChange,
      error,
      validate: ()=> validate(value),
      onBlur: () => validate(value),
    }
  )
}

export default useForm