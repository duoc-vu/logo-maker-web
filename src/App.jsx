import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

function App() {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();

  return (
    <>
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
      <Header DownloadIcon={setDownloadIcon}/>
      <div className='fixed w-screen'>
        <div className='w-64 fixed'>
          <SideNav selectedIndex={(value) => { setSelectedIndex(value) }} />
        </div>
        <div className='ml-64 grid grid-cols-1 md:grid-cols-5 h-screen '>
          <div className='md:col-span-2 shadow-sm p-5 overflow-auto '>
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}


          </div>
          <div className='md:col-span-3 flex justify-center items-center'>
            <LogoPreview downloadIcon={downloadIcon}/>
          </div>
        </div>
      </div>
      </UpdateStorageContext.Provider>
    </>

  )
}

export default App
