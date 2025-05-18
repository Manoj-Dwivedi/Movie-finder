import React, { useEffect } from "react"
import Movie from "./Componentes/Movie"


export default function App() {

// useEffect(() => {
//   fetch('http://localhost:7000/api/students')
//   .then(response => response.json())
//   .then(data => {
//     //console.log(data); // ✅ Data received from API
//     localStorage.setItem('api', JSON.stringify(data));
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// }, [])

// let getdata=JSON.parse(localStorage.getItem('api'));
// console.log(getdata);


  return (
    <div>
      <Movie/>
    </div>
  )
}
