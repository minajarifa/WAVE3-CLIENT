import SearchBar from "../../Components/SearchBar";
import SortByPrice from "../../Components/SortByPrice";


const Products = () => {
    return (
        <div className="">
            {/* title */}
            <h1 className="my-8 text-2xl font-semibold text-center">All Products </h1>
            {/* search and sort */}
            <div className="items-center justify-between w-full mb-6 lg:flex">
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
            </div>
        </div>
    );
};

export default Products;