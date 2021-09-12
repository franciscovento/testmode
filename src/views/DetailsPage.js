import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import './detailsPage.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Transitions, pageTransition} from '../transitions/transitions';



const DetailsPage = () => {
  const [countrie, setCountrie] = useState();

  const {id} = useParams();
useEffect(()=>{
  const DataCountries = async ()=>{
    try{
      const url = `https://restcountries.eu/rest/v2/name/${id}?fullText=true`
      const data = await axios.get(url);
      setCountrie(data.data);
    }catch(e){
      console.log(e);
    }
  }
  DataCountries();
},[id])




  return (
    <motion.div initial="out"  animate="in" exit="out" variants={Transitions} transition={pageTransition} className='detailsPage'>
      {countrie && 
      <div style={{width:'95%'}}>
      <div className='detailsPage__titulo'>
      <h1>{countrie[0].name}</h1>
      </div>
      <div className='detailsPage__region'>
        <h2>{countrie[0].region}</h2>
      </div>
      <div className='detailsPage__imgContainer'> 
        <img src={countrie[0].flag} alt="" />
      </div>
      <div className='detailsPAge__info'>
      <div className='detailsPAge__info__item'><span>Fronteras:</span> {countrie[0].borders.map((x,i) => <p key={i}>{x}</p> )}</div>
     <div className='detailsPAge__info__item'><span>Área Geográfica:</span> <p>{countrie[0].area && countrie[0].area.toLocaleString('en-US')}</p></div> 
     <div className='detailsPAge__info__item'><span>Idiomas:</span> {countrie[0].languages.map((x,i) => <p key={i}>{x.name}</p> )}</div>
     <div className='detailsPAge__info__item'><span>Capital:</span> <p>{countrie[0].capital}</p></div>
        
      </div>
      <div className='detailsPage__population'>
        <p><span>Población: </span>{countrie[0].population && countrie[0].population.toLocaleString('en-US')} </p>
      </div>
      <div className='detailesPage__button'>
        <Link to='/'> ← Volver </Link>
      </div>
      
      
      
      
      </div>  
      }
    </motion.div>
  )
}

export default DetailsPage
