import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";


export default function useUserData() {
    const { user, loading } = useAuth();
    const [userData, setUserData] = useState();
    console.log(user, loading);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/user/${user.email}`);
                setUserData(res.data)
            } catch (error) {
                console.log(error)
            }

        }
        if (user?.email && !loading) {
            fetchUserData();
        }
    }, [user, loading])
    return userData;
}
