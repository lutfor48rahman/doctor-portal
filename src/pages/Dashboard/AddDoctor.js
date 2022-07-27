import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const onSubmit = async data => {
        console.log(data)
    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a vailid email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.email.message}</span>}
                    </label>

                    <label class="label">
                        <span class="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        class="w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />

                    <label class="label">
                        <span class="label-text">Specialist</span>
                    </label>
                    <select {...register("Specialist")} class="input input-bordered select w-full max-w-xs">
                        {
                            services.map(service=><option
                            key={service._id}
                            value={service.name}>{service.name}
                            </option>)
                        }
                    </select>
                </div>

                <input className='btn w-full max-w-xs mt-3' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddDoctor;