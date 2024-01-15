import React, { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios';

function App() {
 const [jokes, setJokes]=  useState([ ])

//  ek call back hota hai or ek dependency array hota hai use effect ke andar 
// cors main ham origin decide kar sakte hen ...  kisko allow karna hai kisko nahi 
// #cors provide safety to your application allow authenticate author 

 useEffect(() => {
  // get request main url btana padta hai 
  // comment out this coz httplocalhost address is applicable when we run on local host when 
  // in production amazon.com netlify.com starting ka change ho jayega (proxy server use in vite.config.js)
  // axios.get('http://localhost:3000/api/jokes')
  axios.get('/api/jokes')
  // response se data aayega axios handle karta hai no need to convrt it to json or other format 
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
 })

//  #proxy is must with axios to send data. to add proxy in react create app in this we use vite then other method is used  
// server ko lagega same origin se request aayi hai 
// "proxy" : "http://localhost:4000"  package.json main starting main hi 

// #cors  error ka solution is proxy    other solution is also 

// #vite we add proxy in vite.config.js file   
// export default define.config ({
  // server:{
  //   proxy:{
  //   '/api':'http://localhost:3000',
  //   },
  //     },
// })

  return (
    <>
     <h1>Jokes from Backend (json format api)</h1>
     {/* jokes.length to get the length of jokes from array  */}
     <p>JOKES: {jokes.length}</p>
     {/* jokes ko loop karvate hen  */}

     {
      jokes.map((jokes, index)=>(
   <div key={jokes.id}>
    <h3>{jokes.title}</h3>
    <p>{jokes.content}</p>
   </div>
      ))
     }
    </>
  )
}

export default App
