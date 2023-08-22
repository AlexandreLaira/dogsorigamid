import React from 'react'
import styles from '../../assets/css/UserHeader.module.css'
import UserHeaderNav from "./UserHeaderNav.jsx";
import {useLocation} from "react-router-dom";

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(()=>{
  switch (location.pathname) {
    case '/conta/estatisticas':
      setTitle('Estatisticas');
      break
    case '/conta/postar':
      setTitle('Postar');
      break;
    default:
      setTitle('Minha Conta');
      break;
  }

  }, [location])


  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
