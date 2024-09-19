"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const LandingAppbar = () => {
    const router = useRouter();
  return (
    <div>
        <div className='py-2 border-b border-purple-600'>
           <div className='flex justify-between'>
              <div className='ml-10 font-bold text-2xl font-mono'>
                  Turkify
              </div>
              <div className='mr-10'>
                  <Button className='' onClick={() => {
                    router.push("/dashboard")
                  }}>
                     Get Started
                  </Button>
              </div>
           </div>
        </div>
    </div>
  )
}

export default LandingAppbar
