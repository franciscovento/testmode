import React from 'react'
import './countryInfo.css'
import { Link } from 'react-router-dom'

const CountryInfo = ({countries, flag}) => {


const list = countries.map((x,i )=> <div className='countryInfo' key={i}>
<h1>{x.name}</h1>
<p>Región: {x.region}</p>
<Link to={`/details/${x.name}`}>Conocer más</Link>
</div>)

  return (
    <div className='countryInfoContainer'>
          {countries.length > 0 && !flag? 
          list
          :''}
          {flag? <div className='noExistePais'>Lo sentimos el pais que buscas no existe.</div> : ""}   
    </div>
  )
}
export default CountryInfo
