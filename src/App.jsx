import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Header from './components/header'
import SideNav from './components/SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='w-64 fixed items-start'>
        <SideNav selectedIndex={(value)=>{console.log(value)}}/>
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
        <div className='md:col-span-2 bg-green-200'>
            Control Panel
        </div>
        <div className='md:col-span-3 bg-red-100'>
            Icon Preview 
        </div>
        <div className='bg-blue-100'>
            Ads Banner 
        </div>
      </div>
    </>
    
  )
}

export default App
