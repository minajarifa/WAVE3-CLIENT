/* eslint-disable react/prop-types */
import { GrPowerReset } from "react-icons/gr";
import { FaFilter } from "react-icons/fa6";
import PropTypes from "prop-types";


export default function FilterBar({ setBrand, setCategory, handleReset, uniqueBrand, uniquecategory }) {
    return (
        <div className="h-full min-h-screen p-4 bg-gray-200 rounded-t-md">
            <div className="flex items-center gap-1 text-gray-950">
                <FaFilter size={20} />
                <h2 className="font-serif text-xl ">filter</h2>
            </div>
            <div className="flex flex-col items-center gap-2 mt-8">
                <div className="w-full">
                    <select className="w-full max-w-xs select" onChange={(e) => setBrand(e.target.value)}>

                        <option >Brands</option>
                        {
                            uniqueBrand.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="w-full">
                    <select className="w-full max-w-xs select" onClick={(e) => setCategory(e.target.value)}>

                        <option >Category</option>
                        {
                            uniquecategory.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))
                        }
                    </select>
                </div>
                <button className="w-full mt-4 btn" onClick={handleReset}>Reset <GrPowerReset /></button>
            </div>
        </div>
    )
}
FilterBar.propTypes = {
    setBrand: PropTypes.func.isRequired, // Define the type of setBrand
  };