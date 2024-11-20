import React from 'react'
import { UserProfile } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

function Profile() {
  return (
    <div className='flex justify-center mt-10'>
        <Link href="/dashboard">
        <Button className='hover:scale-105'>
          <ArrowLeft /> Back
        </Button>
      </Link>
    <UserProfile />
    </div>
  )
}

export default Profile