import React from 'react'
import './countryInfo.css'
import { Link } from 'react-router-dom'

const CountryInfo = ({countries, flag}) => {


const list = countries.map((x,i )=> <div className='countryInfo' key={i}>
<h1>{x.name}</h1>
<p>Region: {x.region}</p>
<Link to={`/details/${x.name}`}>Know more</Link>
</div>)

  return (
    <div className='countryInfoContainer'>
          {countries.length > 0 && !flag? 
          list
          :''}
          {flag? <div className='noExistePais'>Sorry, that country does not exist.</div> : ""}   
    </div>
  )
}
export default CountryInfo
