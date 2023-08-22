import React from 'react'
import styles from '../../assets/css/UserHeaderNav.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {UserContext} from "../../UserContext.jsx";
import { ReactComponent as MinhasFotos } from "../../assets/img/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/img/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/img/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/img/sair.svg";


function UserHeaderNav() {
  const [mobile, setMobile] = React.useState(null);
  const {userLogout} = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout(){
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
    <NavLink to='/conta' end><MinhasFotos />
      {mobile && 'Minhas Fotos'}
    </NavLink>
    <NavLink to='/conta/estatisticas'><Estatisticas />
      {mobile && 'Estatisticas'}
    </NavLink>
    <NavLink to='/conta/postar'><AdicionarFoto />
      {mobile && 'Adicionar Foto'}
    </NavLink>
    <button onClick={handleLogout}><Sair />
      {mobile && 'Sair'}
    </button>
    </nav>
  )
}

export default UserHeaderNav
