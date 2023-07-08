import { useNavigate } from 'react-router-dom';

import './index.scss'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

const schema = object ({
    name: string().required("This field is required"),
    email: string().required("This field is required"),
    phone: string().required("This field is required"),
})

function YourInfo() {
    const {
        register,
        handleSubmit: onSubmit,
        watch,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)})

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/select-plan")
    }

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="your-info">
            <div>
                <h3 className='font-tertiary-color'>Personal info</h3>
                <p className='font-primary-color'>Please provide your name, email address, and phone number.</p>
            </div>
            <form className='mt-3' onSubmit={onSubmit(handleSubmit)}>
                <div className='d-flex flex-wrap justify-content-between align-items-center py-2'>
                    <label htmlFor="name" className='font-tertiary-color m-0'>Name</label>
                    <span className='text-danger font-weight-bold error'>{errors?.name?.message}</span>
                    <input className={errors?.name?.message ? 'w-100 p-1 px-2 border border-danger rounded' : 'w-100 border rounded p-1 px-2'}
                        id='name'
                        type='text'
                        placeholder='e.g. Stephen King'
                        {...register('name')}
                    />
                </div>
                <div className='d-flex flex-wrap justify-content-between align-items-center py-2'>
                    <label htmlFor="email" className='font-tertiary-color m-0'>Email Address</label>
                    <span className='text-danger font-weight-bold error'>{errors?.email?.message}</span>
                    <input className={errors?.email?.message ? 'w-100 p-1 px-2 border border-danger rounded' : 'w-100 border rounded p-1 px-2'}
                        id='email'
                        type='email'
                        placeholder='e.g. stephenking@lorem.com'
                        {...register('email')}
                    />
                </div>
                <div className='d-flex flex-wrap justify-content-between align-items-center py-2'>
                    <label htmlFor="phone" className='font-tertiary-color m-0'>Phone Number</label>
                    <span className='text-danger font-weight-bold error'>{errors?.phone?.message}</span>
                    <input className={errors?.phone?.message ? 'w-100 p-1 px-2 border border-danger rounded' : 'w-100 border rounded p-1 px-2'}
                        id='phone'
                        type='text'
                        placeholder='e.g. +1 234 567 890'
                        {...register('phone')}
                    />
                </div>
                <div className="d-flex justify-content-end p-3 px-md-0 position-custom">
                    <button type='submit' className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
                </div>
            </form>
        </section>
    )
}

export default YourInfo