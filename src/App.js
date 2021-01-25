import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharecterGrid from './components/charecters/CharecterGrid';
import Search from './components/ui/Search';

const App =() => {
   const [items ,setItems] = useState([]);
   const [isLoading , setIsLoading] =useState(true)
   const [query ,setQery] = useState('')

   useEffect(() =>{
     const fetchItems = async () =>{
       const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
       //console.log(result.data);

       setItems(result.data)
       setIsLoading(false)
     }
     fetchItems();
   },[query])







  return (
    <div className='app'>
       {/* <h1>I am fucking my mind it's blow up </h1> */}
      <Header />
      <Search getQuery={(q)=>setQery(q)} />
      <CharecterGrid isLoading ={isLoading} items ={items} />
      
    </div>
  )
}

export default App
