import { UserButton } from '@clerk/nextjs'
import React from 'react'

const creditsPage = () => {
  return (
    <div>
      This is credits
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default creditsPage
