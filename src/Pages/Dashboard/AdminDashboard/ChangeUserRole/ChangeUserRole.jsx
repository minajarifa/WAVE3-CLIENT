import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



export default function ChangeUserRole() {
    const userRole = useLoaderData();
    // console.log(userRole);
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const role = data.role;
        
        let status;

        // কন্ডিশনাল চেক
        if (role === "admin") {
            status = "completed";
        } else if (role === "buyer") {
            status = "approved";
        } else {
            status = "pending";
        }
        
        const userData = { role, status }
        // console.log(userData)
        
        try {
            const res = await axios.put(`https://wave3-server.vercel.app/users/${userRole._id}`, userData)
            // console.log("This is res", res.data);
            if (res.data.insertedId) {
                Swal.fire("User updated successfully .");
            }
            // console.log(userData)
            // navigate('/')

        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="min-h-screen hero ">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <select defaultValue={userRole.role} name="" id="" className="w-full max-w-sm select select-bordered"
                                    {...register("role", { required: true })}
                                >
                                    <option value="admin">Admin</option>
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">seller</option>
                                </select>
                                {errors.role && <p className="text-red-600">you must select a role</p>}
                            </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
