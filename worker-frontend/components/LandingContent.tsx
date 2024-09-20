import React from 'react'
import { Button } from './ui/button'

export const LandingContent:React.FC  = () => {
  return (
    <div> 
        <div className='flex justify-center py-10 '>
            <div className='bg-gradient-to-br text-transparent bg-clip-text from-purple-700 to-amber-500 lg:text-6xl text-2xl font-extrabold'>
                 Vote the thumbnails and get paid in Solana
            </div> 
        </div>
         <div className='flex justify-center py-8 lg:text-4xl text-2xl font-extrabold'>
              Start Earning Now
         </div>
         <div className='flex justify-center'>
            <Button className='w-52 rounded-full bg-gradient-to-bl from-emerald-400 to-lime-400 font-bold text-lg hover:bg-gradient-to-br hover:from-zinc-500 hover:to-pink-400' variant="outline">
                Join Now
            </Button>
         </div>
         
    </div>
  )
}

