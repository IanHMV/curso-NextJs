import React from 'react'
import { Sidebar } from '../../components'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 w-full h-screen overflow-hidden antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex h-full">
        <Sidebar />


        <div className='w-full h-full overflow-y-auto text-slate-900'>
          {children}
        </div>
      </div>
    </div>

  )
}

export default DashboardLayout