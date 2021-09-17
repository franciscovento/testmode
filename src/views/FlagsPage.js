import axios from 'axios'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './flagsPage.css'
import { motion } from 'framer-motion';
import { Transitions, pageTransition } from '../transitions/transitions';

const FlagsPage = () => {
    const [countrie, setCountries] = useState([]);
    const [next, setNext] = useState(0);
    
    useEffect(()=>{
        const FetchData = async () => {
            const data = await axios.get('https://restcountries.eu/rest/v2/all');
            const info = data.data.slice(0 + next, 20 + next);
            setCountries(info);
           
            }
    
        FetchData();
        },[next])



        const handleNext = () => {
            setNext(prev => prev + 20);
           
          }
        
        
          const handlePrev = () => {
            setNext(prev => prev - 20);
           
          }

const listCountries = countrie.map(x => 
<div key={x.numericCode} className='flagsPage-item'>
<div className='flagsPage-imgcontainer'>
    <img src={x.flag} alt="" />
</div>
<Link to={`/details/${x.name}`}>{x.name} </Link>
</div> )



  return (
      <motion.div initial="out"  animate="in" exit="out" variants={Transitions} transition={pageTransition} className='flagsPage-container'>
    <div className='flagsPage-title'>
    <h1>All Countries</h1>
    </div>
    <div className='flagsPage'>
      {countrie? listCountries :'loading...' }
    </div>
    <div className='flagsPage__buttonsContainer'>
    {next === 0 ?  "" : <button onClick={handlePrev}>Prev</button> }
    {next > 220 ? "": <button onClick={handleNext}>Next</button> }
    </div>
    <div className='goBackHome'>
        <Link to='/'> ← Back Home</Link>
      </div>
    </motion.div>
  )
}

export default FlagsPage
