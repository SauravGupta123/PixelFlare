import React from 'react'
const authLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <main className="auth">
        {children}
  </main>
  )
}

export default authLayout
