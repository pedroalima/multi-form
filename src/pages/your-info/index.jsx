import './index.scss'

function YourInfo() {
    return (
        <section className="bg-white p-4 p-md-5" id="your-info">
            <div className='px-md-5'>
                <h3 className='font-tertiary-color'>Personal info</h3>
                <p className='font-primary-color'>Please provide your name, email address, and phone number.</p>
            </div>
            <form className='px-md-5'>
                <label htmlFor="name" className='font-tertiary-color m-0 mt-3'>Name</label>
                <input className='w-100 p-1 px-2' id='name' type="text" placeholder='e.g. Stephen King' />
                <label htmlFor="email" className='font-tertiary-color m-0 mt-3'>Email Address</label>
                <input className='w-100 p-1 px-2' id='email' type="email" placeholder='e.g. stephenking@lorem.com' />
                <label htmlFor="phone" className='font-tertiary-color m-0 mt-3'>Phone Number</label>
                <input className='w-100 p-1 px-2' id='phone' type="number" placeholder='e.g. +1 234 567 890' />
            </form>
        </section>
    )
}

export default YourInfo