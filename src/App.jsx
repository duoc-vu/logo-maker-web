import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Header from './components/header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'

function App() {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState();
  return (
    <>
      <Header/>
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>{setSelectedIndex(value)}}/>
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6 h-screen fixed'>
        <div className='md:col-span-2 shadow-sm p-5 overflow-auto'>
          {selectedIndex==0 ? <BackgroundController/> : <IconController/>}
            
            
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
