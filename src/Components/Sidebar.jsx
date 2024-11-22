import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdHome } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { SiBookmyshow } from "react-icons/si";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { GiLoveMystery } from "react-icons/gi";
import useUserData from "../hooks/useUserData";
import useAuth from "../hooks/useAuth";
const sellerRoutes = [
    {
        id: 1,
        route: "/dashboard/my-products",
        title: "My Products",
        icon: <MdOutlineInventory2 />
    },
    {
        id: 2,
        route: "/dashboard/add-products",
        title: "Add Products",
        icon: <IoMdAdd />
    },
    {
     
      id: 3,
      route: "/dashboard/action-products",
      title: "Action Products",
      icon: <IoMdAdd /> 
    }
]
export default function Sidebar() {
    const userData = useUserData();
    console.log("userDada", userData)
    const { logout } = useAuth();
    return (
        <div>
            {/*  main sideber*/}
            <div className="min-h-screen px-8 py-16 text-gray-900 bg-gray-200 border-r-2 border-black">
                <h1 className="mb-8 text-3xl font-bold">Gadget  Shop</h1>
                <ul className="flex flex-col gap-2">
                    <li className="border border-black rounded-md b-2">
                        <Link to="/Dashboard/Overview">
                            <div className="flex">
                                <GrOverview className="m-2" />
                                Overview
                            </div>
                        </Link>
                    </li>
                    {
                        userData?.role === "seller" &&
                        //  <>
                        //     <li className="border border-black rounded-md b-2">
                        //         <Link to="/dashboard/add-products/">
                        //             <div className="flex">
                        //                 <IoMdAdd className="m-2"/>
                        //                 Add Products
                        //             </div>
                        //         </Link>
                        //     </li>
                        //     <li className="border border-black rounded-md b-2">
                        //         <Link to="/dashboard/my-products">
                        //             <div className="flex">
                        //                 <MdOutlineInventory2 className="m-2" />
                        //                 My Products
                        //             </div>
                        //         </Link>
                        //     </li>
                        // </>
                        sellerRoutes.map((routes) => (
                            <li key={routes.id} className="border border-black rounded-md b-2">
                                <Link to={routes?.route}>
                                    <div className="flex">
                                        <p className="m-2" >
                                            {routes.icon}
                                        </p>
                                        <p>{routes.title}</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                    {
                        userData?.role === "buyer" && <li className="border border-black rounded-md b-2">
                            <Link to="/dashboard/MyWishList">
                                <div className="flex">
                                    <GiLoveMystery className="m-2" />
                                    My WishList
                                </div>
                            </Link>
                        </li>
                    }

                    <li className="border border-black rounded-md b-2">
                        <Link to="/">
                            <div className="flex">
                                <MdHome className="m-2" />
                                Home
                            </div>
                        </Link>
                    </li>
                    
                        <button onClick={()=>logout()} className="border border-black rounded-md b-2">
                            <div className="flex">
                                <TbLogout2 className="m-2" />
                                Logout
                            </div>
                        </button>
                   
                </ul>
            </div>

        </div>
    )
}

