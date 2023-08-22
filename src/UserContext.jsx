import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { Navigate, useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  
  const userLogout = React.useCallback(
    async function userLogout(){
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
    },
  [navigate])

  React.useEffect(() => {
    async function autoLogin(){
      const token = window.localStorage.getItem('token')
      if(token){
        try {
          setError(null);
          setLoading(true);
          const {url, options} = TOKEN_VALIDATE_POST(token);
          const validateRes = await fetch(url, options);
          await getUser(token);
          navigate('/conta')
          if (!validateRes.ok) throw new Error('Token inválido');
        } catch(err){
          userLogout();
        }finally {
          setLoading(false);
        }
      }else{
          setLogin(false)
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token){
    const {url, options} = USER_GET(token);
    const userRes = await fetch(url, options);
    const userJson = await userRes.json();
    setData(userJson);
    setLogin(true);
  }


  async function userLogin(username, password){
    try {
      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST({username, password});
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`)
      const {token} = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta')
    }catch(err){
      setError(err.message);
      setLogin(false);
    }finally{
      setLoading(false);
    }
  }


  return(
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      loading,
      login,
      error

    }}>
      {children}
    </UserContext.Provider>
  )
}