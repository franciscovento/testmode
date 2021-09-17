import React, { useState, useEffect} from 'react'
import './homePage.css';
import CountryInfo from '../components/countryInfo/CountryInfo';
import { motion } from 'framer-motion';
import { Transitions, pageTransition } from '../transitions/transitions';
import { Link } from 'react-router-dom';


const HomePage = ({handleSearch, countries, flag}) => {

    const [query, setQuery] = useState();
    const [background, setBackground] = useState('https://proyectoviajero-16811.kxcdn.com/wp-content/uploads/2021/03/mapa-del-mundo-www.proyectoviajero.com_.jpg');

    const handleChangue = (e) => {
        setQuery(e.target.value)
    }
    
  
    useEffect(()=>{

      if (countries.length > 0) {
       setBackground(countries[0].flag);
      }

      if (flag) {
        setBackground('https://proyectoviajero-16811.kxcdn.com/wp-content/uploads/2021/03/mapa-del-mundo-www.proyectoviajero.com_.jpg');
      }

    
    },[countries, flag])

   


  return (
    <motion.div initial="out"  animate="in" exit="out" variants={Transitions} transition={pageTransition} className='homePage' style={{backgroundImage:`url(${background})`}}>
      <div  className='homePage-content'>
      <div  className='homePage-content-form'>
      <h3>Country finder</h3>
      <input type="text" onChange={handleChangue} placeholder='what country are you looking for?'/>
      <button onClick={() => handleSearch(query)}>Search</button>
      </div>
      <CountryInfo countries={countries} flag={flag}/>
      </div>
      <div className='lookAllFlags'>
        <Link to='allflags'>See all countries  →</Link>
      </div>
    </motion.div>
  )
}

export default HomePage
