import {React,useState} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from '../screen/home';
import ProfiloUtenti from "./utenti";
import ErrorPage from "../screen/errorPage";
import Profilo from "../screen/profilo";
import MioProfilo from '../screen/mioProfilo';
import GenericoProfilo from '../screen/genericoProfilo';
import {FaBars} from 'react-icons/fa';


const Index = () => {
    const [show,setShow]=useState(false);
  return (
    <Router>
        <nav className='nav d-flex flex-row justify-content-center mx-auto gap-2 mb-2'>
            <header className='nav-header'>
                <div className='nav-brand'>
                    <img className='rounded shadow nav-logo' id='logo' src='./Macre7.png' alt='logo' />
                    <h4>MAcre</h4>
                </div>
                    <button className='btn nav-toggler'><FaBars className='nav-icon' onClick={()=>setShow(!show)}/></button>
            </header>
                <div className={`${show?'links-container show':'links-container'}`}>
                    <ul className='nav-links'>

                <Link className='nav-link ' to='/'>
                    Home
                </Link>
                <Link className='nav-link' to='/profilo'>
                    Profilo
                </Link>
                    </ul>

                </div>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<ErrorPage/>} />
            <Route path='/profilo' element={<Profilo/>}>
                <Route path='/profilo/:id' element={<GenericoProfilo/>}/>
                <Route path='/profilo/mio' element={<MioProfilo/>}/>
                <Route path='/profilo/Utenti' element={<ProfiloUtenti/>}/>
            </Route>
        </Routes>
      
    </Router>
  );
}

export default Index;
