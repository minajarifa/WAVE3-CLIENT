import { useEffect, useState } from "react";
import axios from "axios";
// import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import SearchBar from "../../Components/SearchBar";
import SortByPrice from "../../Components/SortByPrice";
import FilterBar from "../../Components/FilterBar";
import Loading from "../../Components/Loading";
import ProductCurd from "../Home/Featured/ProductCurd";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState('asc');
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [uniqueBrand, setUniqueBrand] = useState([])
    const [uniquecategory, setUniquecategory] = useState([]);
    // const [page, setPage] = useState([1]);
    // const [totalPage, setTotalPage] = useState([1]);
    console.log(brand, search, sort, category);

    // &page=${page}
    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            await axios.get(`http://localhost:4000/all-products?title=${search}&limit=9&sort=${sort}&brand=${brand}&category=${category}`)
                .then((res) => {
                    console.log("res.data", res.data);
                    setProducts(res.data.products);
                    setUniqueBrand(res.data.brand);
                    setUniquecategory(res.data.category);
                    // setTotalPage(Math.ceil(res.data.totalProodacts / 9));
                    setLoading(false)
                })
        }
        fetch();
    }, [search, sort, brand, category])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = ""
    }
    const handleReset = () => {
        setSearch("")
        setBrand("")
        setCategory("")
        setSort("asc")
        window.location.reload()
    }
    // const handlePageChange = (newPage) => {
    //     if (newPage > 0 && newPage <= totalPage) {
    //         setPage(newPage);   
    //         window.scrollTo({ top: 0, behavior: "smooth" })
    //     }
    // }
    return (
        <div>
            {/* title */}
            <h1 className="my-8 text-2xl font-semibold text-center">All Products </h1>
            {/* search and sort */}
            <div className="items-center justify-between w-full mb-6 lg:flex">
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
            </div>
            {/* content */}
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <FilterBar uniqueBrand={uniqueBrand} uniquecategory={uniquecategory} setBrand={setBrand} setCategory={setCategory} handleReset={handleReset} />
                </div>
                {/*All Products */}
                <div className="col-span-10">
                    {
                        loading ?
                            (
                                <Loading />
                            ) : (
                                <div>
                                    {
                                        products.length === 0 ?
                                            (
                                                <div className="flex items-center justify-center w-full h-full"><h1 className="text-3xl">No products found</h1></div>
                                            ) : (
                                                <div className="grid min-h-screen grid-cols-3 gap-4 ml-10">
                                                    {
                                                        products.map((product) => (
                                                            <ProductCurd key={product._id} product={product} />
                                                        ))
                                                    }
                                                </div>
                                            )
                                    }
                                </div>
                            )
                    }
                    {/* Pagination */}
                    {/* 
                <div className="flex items-center justify-center gap-2 my-8 text-xl">
                    <button className="border border-black rounded-full btn"
                    disabled={page===1}
                    onClick={() => handlePageChange(page - 1)}>
                        <FaRegArrowAltCircleRight />
                    </button>
                    <p className="flex items-start justify-center mx-10">
                        Page {page}of{totalPage}
                    </p>
                    <button className="border border-black rounded-full btn"
                      disabled={page===totalPage}
                    onClick={() => handlePageChange(page + 1)}>
                        <FaRegArrowAltCircleLeft />
                    </button>
                </div> */}
                </div>
            </div>
        </div>
    );
};
export default Products;