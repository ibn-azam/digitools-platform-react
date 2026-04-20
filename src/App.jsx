
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Homepage from './Components/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import { ToastContainer } from 'react-toastify'


const loadCardData = async()=>{
    const res =await fetch('/data.json');
    return res.json();
}
function App() {
  const cardPromise = loadCardData();
  const [cartCount,setCartCount]=useState([]);
  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Homepage></Homepage>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.....</p>}>
        <Products cardPromise={cardPromise} setCartCount={setCartCount}></Products>
      </Suspense>
{/* React toastify */}
       <ToastContainer />
    </>
  )
}

export default App
