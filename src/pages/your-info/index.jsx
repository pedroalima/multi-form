import { useNavigate } from 'react-router-dom'
import './index.scss'

function YourInfo() {

    const navigate = useNavigate();

    const goForward = () => {
        navigate("/select-plan")
    }

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="your-info">
            <div>
                <h3 className='font-tertiary-color'>Personal info</h3>
                <p className='font-primary-color'>Please provide your name, email address, and phone number.</p>
            </div>
            <form>
                <label htmlFor="name" className='font-tertiary-color m-0 mt-3'>Name</label>
                <input className='w-100 p-1 px-2' id='name' type="text" placeholder='e.g. Stephen King' />
                <label htmlFor="email" className='font-tertiary-color m-0 mt-3'>Email Address</label>
                <input className='w-100 p-1 px-2' id='email' type="email" placeholder='e.g. stephenking@lorem.com' />
                <label htmlFor="phone" className='font-tertiary-color m-0 mt-3'>Phone Number</label>
                <input className='w-100 p-1 px-2' id='phone' type="number" placeholder='e.g. +1 234 567 890' />
            </form>
            <div className="d-flex justify-content-end p-3 px-md-0 position-custom">
                <button onClick={goForward} type='submit' className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
            </div>
        </section>
    )
}

export default YourInfo