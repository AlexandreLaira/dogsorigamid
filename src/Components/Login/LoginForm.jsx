import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token) getUser(token);
  }, [])

  async function getUser(token){
    const {url, options}  = USER_GET(token)
    const response = await fetch(url, options);
    const json = await response.json();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(username.validate() && password.validate()){
      const {url, options} = TOKEN_POST({
        username: username.value,
        password: password.value,
      })
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token)
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