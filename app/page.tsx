import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col text-white items-center justify-center h-screen px-2'>
        <h1 className='text-5xl font-bold mb-20'>Chat GPT Messenger</h1>

        <div className='flex space-x-2 text-center'>
            <div>
                <div className='flex flex-col items-center mb-5'>
                    <SunIcon className="h-6 w-6" />
                    <h2>Examples</h2>
                </div>

                <div className='space-y-2'>
                    <p className='infoText'>"Explain something to me"</p>
                    <p className='infoText'>"What is the difference between a dog and a cat?"</p>
                    <p className='infoText'>"What is the color of thesun?"</p>
            
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center mb-5'>
                    <BoltIcon className="h-6 w-6" />
                    <h2>Capabilites</h2>
                </div>

                <div className='space-y-2'>
                    <p className='infoText'>"Change the GPT model to use"</p>
                    <p className='infoText'>"Message are stored in firebase firestore"</p>
                    <p className='infoText'>"Hot Toast notification when ChatGPT is thinking"</p>
            
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center mb-5'>
                    <ExclamationTriangleIcon className="h-6 w-6" />
                    <h2>Limititations</h2>
                </div>

                <div className='space-y-2'>
                    <p className='infoText'>"May ocassionally generate incorrect information"</p>
                    <p className='infoText'>"May occasionally produce harmful instructions or biased content"</p>
                    <p className='infoText'>"Limited knowledge of world and events after 2021"</p>
            
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage