import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPicker from 'react-best-gradient-color-picker';
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '../context/UpdateStorageContext';
import IconList from './IconList';


function IconController() {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const [size,setSize] = useState(storageValue?storageValue?.iconSize:280);
    const [rotate,setRotate] = useState(storageValue?storageValue?.iconRotate:0);
    const [color,setColor] = useState(storageValue?storageValue?.iconColor:'#FFF'); 
    const [icon,setIcon] = useState(storageValue?storageValue?.icon:"Smile")
    const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)
    useEffect(() =>{

        const updateValue={
            ...storageValue,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:icon
        }
        setUpdateStorage(updateValue)
        localStorage.setItem('value' ,JSON.stringify(updateValue));
    },[size,rotate,color,icon])

    return (
        <div>
            <div>
                <IconList selectedIcon={(icon) => {setIcon(icon)}}/>
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Size <span>{size}</span></label>
                    <Slider 
                        className='bg-gray-200'
                        defaultValue={[size]} max={512} step={1} 
                        onValueChange={(event)=>setSize(event[0])}
                    />
                </div>
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Rotate  <span>{rotate}°</span></label>
                    <Slider 
                        className='bg-gray-200'
                        defaultValue={[rotate]} max={360} step={1} 
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