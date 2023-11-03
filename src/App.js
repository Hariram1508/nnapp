import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [name,setName]=useState('');
  const [location,setLocation]=useState('');
  const [fatherName,setfatherName]=useState('');
  const [Detail,setDetail]=useState([]);
  

   const onsubmit =(e) =>{
    e.preventDefault();
    const newDetail ={
      name,location,fatherName 
   } 
    setDetail([...Detail, newDetail]) 
    setName("");
    setLocation("");
    setfatherName("");
  }
  return (
    <div className=''>
   <form className=''>
    <input type="text"   onChange={(e) => setName(e.target.value)}placeholder='Enter your name '></input>
    <input type="text"   onChange={(e) => setLocation(e.target.value)}placeholder='Enter your name '></input>
    <input type="text"   onChange={(e) => setfatherName(e.target.value)}placeholder='Enter your name '></input>
    <input type="submit" onClick={onsubmit}  value={'submit'} />
   </form>
     {Detail.map((info, index) =>(
      <div key={index}>
        <h1>Detail</h1> 
         <p>Name: {info.name}</p>
         <p>Location: {info.location}</p>
         <p>father Name: {info.name}</p>
      </div> 
     ))}    
   </div>

  );
}

export default App;
