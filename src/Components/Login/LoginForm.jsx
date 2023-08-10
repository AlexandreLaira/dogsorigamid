import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/css/LoginForm.module.css'
import stylesBtn from '../../assets/css/Button.module.css'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { UserContext } from '../../UserContext';


function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(username.validate() && password.validate()){
      userLogin(username.value, password.value);
    }
  } // HANDLE SUBMIT


  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='User' type='text' name='username' {...username}/>
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? (
        <Button disabled >Carregando...</Button>) : 
        (<Button>Entrar</Button>)}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to='/login/lost'>Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta?Cadastre-se no site</p>
        <Link className={stylesBtn.button} to='/login/create'>Cadastrar</Link>

      </div>
    </section>
  )
} //LOGIN FORM

export default LoginForm