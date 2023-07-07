import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './index.scss'

function YourInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate("/select-plan")
    }

    console.log(name)
    console.log(email)
    console.log(phone)

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="your-info">
            <div>
                <h3 className='font-tertiary-color'>Personal info</h3>
                <p className='font-primary-color'>Please provide your name, email address, and phone number.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className='font-tertiary-color m-0 mt-3'>Name</label>
                <input className='w-100 p-1 px-2'
                    id='name'
                    type="text"
                    placeholder='e.g. Stephen King'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email" className='font-tertiary-color m-0 mt-3'>Email Address</label>
                <input className='w-100 p-1 px-2'
                    id='email'
                    type="email"
                    placeholder='e.g. stephenking@lorem.com'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phone" className='font-tertiary-color m-0 mt-3'>Phone Number</label>
                <input className='w-100 p-1 px-2'
                    id='phone'
                    type="number"
                    placeholder='e.g. +1 234 567 890'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className="d-flex justify-content-end p-3 px-md-0 position-custom">
                    <button type='submit' className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
                </div>
            </form>

        </section>
    )
}

export default YourInfo