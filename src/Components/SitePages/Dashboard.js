import { useState } from 'react';
import React from 'react'
import InputBox from '../HelperComponents/InputBox';
import ResponseModal from '../HelperComponents/ResponseModal';


const Dashboard = () => {

  const [showModal, setShowModal] = useState(false);

  let response = {
    value : `I always felt like I could do anything. That’s the main
    thing people are controlled by! Thoughts- their perception
    of themselves! They're slowed down by their perception of
    themselves. If you're taught you can’t do anything, you
    won’t do anything. I was taught I could do everything.`
  }

  return (
    <div>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="isolate bg-white -mt-4 py-24 px-6 sm:py-32 lg:px-8">
              Home
            </div>
          </div>
        </main>
    </div>
  )
}

export default Dashboard