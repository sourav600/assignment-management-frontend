import React, { useState } from 'react'
import "./Auth.css"
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {

    const [isRegister, setIsRegister] = useState(false);
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className='front'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqRQUcxrL6WYZeeluHrWVGHXtIZx0VWCc8w&s" alt="Image not found!"/>
                        <div className='text'>
                            <span className='text-1'>Definition of success is not identical to everyone!</span>
                            <span className='text-2 text-xs'> Let's gets connected</span>
                        </div>
                    </div>
                    <div className='back'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqRQUcxrL6WYZeeluHrWVGHXtIZx0VWCc8w&s" alt="Image Loading!" />
                    </div>
                </div>
                <div className='forms h-full'>
                    <div className='form-content h-full'>
                        <div className='login-form'>
                            <Signin togglePanel={togglePanel}/>
                        </div>
                        <div className='signup-form'>
                            <Signup togglePanel={togglePanel}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth