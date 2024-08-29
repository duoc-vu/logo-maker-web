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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();

  return (
    <>
      <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
        <div className=''>
          <Header DownloadIcon={setDownloadIcon} />
          <div className='flex'>
            <div className='w-60'>
              <SideNav selectedIndex={(value) => { setSelectedIndex(value) }} />
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-5 h-screen w-screen'>
              <div className='md:col-span-2 shadow-sm p-5 overflow-auto '>
                {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
              </div>
              <div className='md:col-span-3 flex justify-center items-center w-full'>
                <LogoPreview downloadIcon={downloadIcon} />
              </div>
            </div>
          </div>
          <div className='bg-gray-200 border-2 text-border text-md flex justify-center h-[50px] w-full items-center'>BY DUOC VU</div>
        </div>
      </UpdateStorageContext.Provider>
    </>

  )
}

export default App
