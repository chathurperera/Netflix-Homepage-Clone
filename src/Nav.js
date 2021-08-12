import React , {useState,useEffect} from 'react';
import './Nav.css';

const Nav = () => {

    const [show,handleShow] = useState(false);

    useEffect(() => {
       window.addEventListener('scroll',() => {
           if(window.scrollY > 100){
               handleShow(true)
           }else{
               handleShow(false)
           }
       }) ;
       return () => {
           window.removeEventListener('scroll');
       };
    },[])

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NetFlix Logo" />
            <img className='nav__avatar' src="https://www.pngitem.com/pimgs/m/256-2560255_user-icon-user-white-icon-transparent-hd-png.png" alt="user login" />
        </nav>
    )
}

export default Nav
