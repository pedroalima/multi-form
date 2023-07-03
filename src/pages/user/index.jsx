import './index.scss'

function UserInfo() {
    return (
        <section className="bg-white p-5" id="user-info">
            <div className='px-md-5'>
                <h3>Personal info</h3>
                <p>Please provide your name, email address, and phone number</p>
            </div>
            <form className='px-md-5'>
                <label htmlFor="name">Name</label>
                <input className='w-100' id='name' type="text" placeholder='e.g. Stephen King' />
                <label htmlFor="email">Email Address</label>
                <input className='w-100' id='email' type="email" placeholder='e.g. stephenking@lorem.com' />
                <label htmlFor="phone">Phone Number</label>
                <input className='w-100' id='phone' type="number" placeholder='e.g. +1 234 567 890' />
            </form>
        </section>
    )
}

export default UserInfo