import React, {useEffect} from 'react'
import styles from '../../assets/css/UserHeaderNav.module.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {UserContext} from "../../UserContext.jsx";
import { ReactComponent as MinhasFotos } from "../../assets/img/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/img/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/img/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/img/sair.svg";
import button from "../Forms/Button.jsx";
import useMedia from "../../Hooks/useMedia.jsx";


function UserHeaderNav() {

  const {userLogout} = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation();
  function handleLogout(){
    userLogout();
    navigate('/login');
  }

  React.useEffect(() => {

    setMobileMenu(false);
  }, [pathname])

  return (
    <>
    {mobile && (
      <button
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        aria-label='Menu'
        onClick={() => setMobileMenu(!mobileMenu)}></button>
    )}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  )
}

export default UserHeaderNav
