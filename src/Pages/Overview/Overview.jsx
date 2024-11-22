import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData"



export default function Overview() {
   const  userData =useUserData();
   const {user}=useAuth()
    
  return (
    <div className="flex items-center justify-center w-full h-full">
       <div>
       <h1>{user.displayName}</h1>
        <h1>

        {userData?.email}
        </h1>
        <h1>

    {userData?.role}
        </h1>
        <h1>{userData?.status}</h1>
       </div>
    </div>
  )
}
