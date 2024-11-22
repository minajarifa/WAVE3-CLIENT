import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";
import ProductCurd from "../../Home/Featured/ProductCurd";
import useUserData from "../../../hooks/useUserData";


export default function CardList() {
    const [loading, setLoading] = useState(false);
    const [wishList, setWishList] = useState([]);
    const [latestData, setLatestData] = useState(true)
    const userData = useUserData();
    const token = localStorage.getItem("access-token")
    console.log("userData",wishList)
    useEffect(() => {
        const fetchCardList = async () => {
            setLoading(true)
            await axios.get(`http://localhost:4000/card/${userData?._id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }).then((res) => {
                setWishList(res?.data);
                setLoading(false)
            })
        }
        if (token && userData?._id) {
            fetchCardList();
        }

    }, [token, userData?._id, latestData])
  return (
    <div>
            <h1 className="mb-6 text-3xl font-bold text-center">My WishList</h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    loading ? <Loading /> : <>
                        {
                            wishList.length > 0 ? <>
                                {
                                    wishList.map((product) => <ProductCurd key={product?._id} product={product} isInCardList latestData={latestData} setLatestData={setLatestData}></ProductCurd>)
                                }
                            </> : <div className="flex items-center justify-center w-full h-full">
                                <h1>No product in your wishlist</h1>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
  )
}
