import React from 'react'
import NewChat from './NewChat'


function sideBar() {
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <div>
                <NewChat />
                {/*  */}
                <div>
                    {/* Model Selection */}
                </div>
                {/* Map through there ChatTows */}

            </div>

        </div>
    </div>
  )
}

export default sideBar