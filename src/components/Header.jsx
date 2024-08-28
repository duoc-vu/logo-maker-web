import React from 'react'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
function Header() {
  return (
    <div className='*:m-0 p-0 m-0 shadow-sm border flex justify-between items-center'>
        <img src='/logo.svg' className='w-20'/>
        <Button className='flex gap-2 items-center border bg-white border-orange-500 text-orange-500 rounded px-4 py-2 hover:bg-orange-500 hover:text-white' ><Download className='h-4 v-4' /> Download</Button>
    </div>
  )
}

export default Header