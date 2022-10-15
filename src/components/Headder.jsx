import React from 'react'

const Headder = () => {
    return (
        <header className= "flex px-5 py-2 bg-white text-black text-center rounded-full justify-end space-x-4 " >
            <ul className='inline-flex space-x-4 font-bold font-mono'>
                <li>About</li>
                <li>Feedback</li>
                <li className='bg-green-300 px-2 '>start</li>
                <li><button className='bg-blue-100 px-2 rounded-full font-bold font-mono'><img src="" alt="ok"/>Connect to Wallet</button></li>
            </ul>
            
        </header>
    )
}

export default Headder