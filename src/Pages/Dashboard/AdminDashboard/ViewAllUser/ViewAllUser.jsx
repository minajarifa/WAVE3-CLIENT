import axios from "axios";
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import { MdSecurityUpdate } from "react-icons/md";

export default function ViewAllUser() {
    const [users, setUsers] = useState();
    useEffect(() => {
        const usersData = () => {
            try {
                axios.get("http://localhost:4000/users")
                    .then((res) => {
                        console.log(res.data)
                        setUsers(res.data)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        usersData()
    }, [])
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
                    <td><button title="delete the data"><MdDelete className="text-2xl text-red-700"/></button></td>
                    <th>
                        <button title="Update the data" className="btn btn-ghost btn-xs"><MdSecurityUpdate className="text-2xl "/></button>
                    </th>
                </tr>
            ))}


        </tbody>

    </table>
</div>
  )
}
