import { Appbar } from '@/components/Appbar'
import LandingAppbar from '@/components/LandingAppbar'
import { LandingContent } from '@/components/LandingContent'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
        <LandingAppbar />
        <LandingContent />
    </div>
  )
}

export default page
