import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";



export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-12 font-bold">
    <div className="col-span-2 ">
    <Sidebar/>
    </div>
    <div className="col-span-10 p-12">
        <Outlet/>
    </div>
</div>
  )
}
