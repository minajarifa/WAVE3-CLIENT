/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Login/SocialLogin";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from 'sweetalert2'
const Register = () => {
    const { user, setUser, createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;
        const role = data.role;
        const status = role === "buyer" ? "approved" : "pending";
        const withList = [];
        const userData = { email, role, status, withList }
        console.log(userData)
        console.log(data)
        try {
            const result = await createUser(data.email, data.password)
            await updateUserProfile(data.name, data.photo);
            setUser({
                ...result?.user,
                displayName: data.name,
                photoURL: data.photo,
            })
            const res = await axios.post('http://localhost:4000/users', userData)
            console.log("This is res", res.data);
            if (res.data.insertedId) {
                Swal.fire("User created successfully ,and please login now.");
            }
            console.log(userData)
            // logOut();
            navigate('/')

        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            {/* pass start */}
                           
                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be at least 8 characters long',
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,  // Combined regex
                                            message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
                                        },
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            </div>
                            {/* pass end */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("confirmPassword", {
                                    required: true, validate: (value) => {
                                        if (watch("password") !== value) {
                                            return "Your password do not match"
                                        }
                                    }
                                })} type="password" placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirmPassword && <span className="text-red-600">Password are not match</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <select name="" id="" className="w-full max-w-sm select select-bordered"
                                    {...register("role", { required: true })}
                                >
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">seller</option>
                                </select>
                                {errors.role && <p className="text-red-600">you must select a role</p>}
                            </div>
                            <div className="mt-6 form-control">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="mb-8 ml-8">
                            <SocialLogin />
                            <p>Already have an account? Please <Link to="/Login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
