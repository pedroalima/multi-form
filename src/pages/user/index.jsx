import './index.scss'

function UserInfo() {
    return (
        <section className="bg-white p-4" id="user-info">
            <h3>Personal info</h3>
            <p>Please provide your name, email address, and phone number</p>
            <form>
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