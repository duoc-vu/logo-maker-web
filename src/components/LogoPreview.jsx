import React, { useContext, useEffect, useState } from 'react'
import { UpdateStorageContext } from '../context/UpdateStorageContext';

function LogoPreview() {
    const [storageValue ,setStorageValue] = useState();
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext);
    useEffect(() =>{
        const storageData = JSON.parse(localStorage.getItem('value'));
        console.log(storageData)
        setStorageValue(storageData)
    },[updateStorage])
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <div className='h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300'>
            <div className='h-full w-full'
            style={{
                borderRadius:storageValue?.bgRounded,
                background:storageValue?.bgColor
                }}>

            </div>
        </div>
    </div>
  )
}

export default LogoPreview