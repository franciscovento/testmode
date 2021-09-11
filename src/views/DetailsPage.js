import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import './detailsPage.css'
import { Link } from 'react-router-dom';



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





console.log(countrie)
  return (
    <div className='detailsPage'>
      {countrie && 
      <div>
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
     <div className='detailsPAge__info__item'><span>Área Geográfica:</span> <p>{countrie[0].area.toLocaleString('en-US')}</p></div> 
     <div className='detailsPAge__info__item'><span>Idiomas:</span> {countrie[0].languages.map((x,i) => <p key={i}>{x.name}</p> )}</div>
     <div className='detailsPAge__info__item'><span>Capital:</span> <p>{countrie[0].capital}</p></div>
        
      </div>
      <div className='detailsPage__population'>
        <p><span>Población: </span>{countrie[0].population.toLocaleString('en-US')} </p>
      </div>
      <div className='detailesPage__button'>
        <Link to='/'> ← Volver </Link>
      </div>
      
      
      
      
      </div>  
      }
    </div>
  )
}

export default DetailsPage
