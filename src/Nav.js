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
            <img className='nav__logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6-cXZHF9zeyx0mlcYdXCGm9WJs4dDDZclA&usqp=CAU" alt="NetFlix Logo" />
            <img className='nav__avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nLMoUrHQq1IrsIjeE56t5bstlCQt4QLnjQ&usqp=CAU" alt="user login" />
        </nav>
    )
}

export default Nav
