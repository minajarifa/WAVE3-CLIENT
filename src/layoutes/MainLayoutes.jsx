import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const MainLayoutes = () => {
  return (
    <div >
      <div className="mx-auto">
        <Navbar/>
      </div>
      <div className="m-10 min-h-screen">
        <Outlet />
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  )
}

export default MainLayoutes
