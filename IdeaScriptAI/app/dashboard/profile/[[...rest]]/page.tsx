import React from 'react'
import { UserProfile } from '@clerk/nextjs'

function Profile() {
  return (
    <div className='flex justify-center mt-10'>
    <UserProfile />
    </div>
  )
}

export default Profile