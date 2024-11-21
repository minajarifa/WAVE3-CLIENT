import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate =useNavigate()
  const  handleLogout=()=>{
    logOut()
    .then(()=>{
        navigate('/login');
    })
    }
    const nvaBer = <>
        <li>
            <NavLink to="/" className="m-2">Home</NavLink>
        </li>
        <li>
            <NavLink to='Products' className="m-2">Product</NavLink>
        </li>
        <li>
            <NavLink to='About' className="m-2">About</NavLink>
        </li>
        <li>
            <NavLink to='Contact-us' className="m-2">Contact us</NavLink>
        </li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nvaBer}
                        </ul>
                    </div>
                    <a className="text-xl btn btn-ghost">Gadget Shop</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {nvaBer}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={`${user?.photoURL}`} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Dashboard
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <button onClick={handleLogout} className="btn btn-outline btn-success btn-sm">Logout</button>
                        </ul>
                    </div> : <div className="">
                        <NavLink to='/Login' className="m-2 btn btn-outline btn-success">Login</NavLink>
                        <NavLink to='/Register' className="m-2 btn btn-outline btn-success">Register</NavLink>
                    </div>

                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;