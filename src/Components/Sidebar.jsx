import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdHome } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { SiBookmyshow } from "react-icons/si";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import useUserData from "../hooks/useUserData";
import useAuth from "../hooks/useAuth";
import { TbJewishStarFilled } from "react-icons/tb";
import { FaIdCard } from "react-icons/fa";

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
const buyerRoutes = [
  {
      id: 1,
      route: "/dashboard/WishList",
      title: "Wish List",
      icon: <TbJewishStarFilled />
  },
  {
      id: 2,
      route: "/dashboard/CardList",
      title: "Card List",
      icon: <FaIdCard />
  }
]
export default function Sidebar() {
    const userData = useUserData();
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
                        userData?.role === "buyer" &&
                        buyerRoutes.map((routes) => (
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

