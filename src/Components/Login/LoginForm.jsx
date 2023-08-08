import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';


function LoginForm() {
  const username = useForm();
  const password = useForm();
  const {userLogin} = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(username.validate() && password.validate()){
      userLogin(username.value, password.value);
    }
  } // HANDLE SUBMIT


  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label='User' type='text' name='username' {...username}/>
        <Input label='Password' type='password' name='password' {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/create'>Cadastrar</Link>
    </section>
  )
} //LOGIN FORM

export default LoginForm