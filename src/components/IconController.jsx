import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPicker from 'react-best-gradient-color-picker';
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '../context/UpdateStorageContext';


function IconController() {
    const [size,setSize] = useState(280);
    const [rotate,setRotate] = useState(0);
    const [color,setColor] = useState('#FFF'); 
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)
    useEffect(() =>{

        const updateValue={
            ...storageValue,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:'Smile'
        }
        setUpdateStorage(updateValue)
        localStorage.setItem('value' ,JSON.stringify(updateValue));
    },[size,rotate,color])

    return (
        <div>
            <div>
                <label>Icon</label>
                <div className='p-3 my-2 cursor-pointer bg- 
                    rounded-md w-[50px] h-[50px] flex items-center justify-center'> 
                    <Smile />
                </div>
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Size <span>{size}</span></label>
                    <Slider 
                        className='bg-gray-200'
                        defaultValue={[280]} max={512} step={1} 
                        onValueChange={(event)=>setSize(event[0])}
                    />
                </div>
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Rotate  <span>{rotate}°</span></label>
                    <Slider 
                        className='bg-gray-200'
                        defaultValue={[0]} max={360} step={1} 
                        onValueChange={(event)=>setRotate(event[0])}
                    />
                </div>
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Icon Color</label>
                    <ColorPickerController hideController={true}
                    selectedColor={(color) =>setColor(color)}
                    />
                </div>
            </div>
        </div>
    )
}

export default IconController