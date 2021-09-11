import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import {useState } from 'react';
import axios from 'axios';
import HomePage from './views/HomePage';
import DetailsPage from './views/DetailsPage';
import NotFoundPage from './views/NotFoundPage';
import { AnimatePresence} from 'framer-motion'



function App() {

  
const location = useLocation();


  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState(false);

    

const handleSearch = (name) => {
  const DataCountries = async ()=>{
    try{
      const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
      const data = await axios.get(url);
      setCountries(data.data);
      setFlag(false)
    }catch(e){
      setFlag(true)
    }
  
  }
  DataCountries();
}




  return (
    <div className="App">
     {/* <Router> */}
       <AnimatePresence exitBeforeEnter >
       <Switch location={location} key={location.pathname} >
          <Route path='/details/:id'>
            <DetailsPage />
          </Route>
          <Route exact path='/'>
            <HomePage handleSearch={handleSearch} countries={countries} flag={flag}/>
          </Route>
          <Route path='*' component={NotFoundPage}/>
       </Switch>
       </AnimatePresence>
     {/* </Router> */}
    </div>
  );
}

export default App;
