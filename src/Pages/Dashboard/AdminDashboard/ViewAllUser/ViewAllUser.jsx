import axios from "axios";
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import { MdSecurityUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewAllUser() {
    const [users, setUsers] = useState();
    useEffect(() => {

        usersData()
    }, [])
    const usersData = () => {
        try {
            axios.get("https://wave3-server.vercel.app/users")
                .then((res) => {
                    // console.log(res.data)
                    setUsers(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }
    const userDelete = async (id) => {
        // console.log(id);
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const { data } = await axios.delete(`https://wave3-server.vercel.app/deletes/${id}`);
                        // console.log(data);
                        usersData()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } catch (error) {
                        console.error("Error deleting user:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the file.",
                            icon: "error"
                        });
                    }
                }
            });
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Users role</th>
                        <th>Users Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {users?.map((usersRole) => (
                        <tr key={usersRole?._id}>

                            <td>
                                <div className="flex items-center gap-3">

                                    <div>
                                        <div className="font-bold">{usersRole?.role}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {usersRole?.email}
                            </td>
                            <td><button onClick={() => userDelete(usersRole?._id)} title="delete the data"><MdDelete className="text-2xl text-red-700" /></button></td>
                            <th>
                                <Link to={`/dashboard/ChangeUserRole/${usersRole._id}`} title="Update the data" className="btn btn-ghost btn-xs"><MdSecurityUpdate className="text-2xl " /></Link>
                            </th>
                        </tr>
                    ))}


                </tbody>

            </table>
        </div>
    )
}
