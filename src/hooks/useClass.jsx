
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
   

    const { refetch, data:classes = [] } = useQuery({
        queryKey: ['classesAll', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await axiosSecure(`/classes?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/student/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    console.log(classes);
    return [ classes, refetch ]
}

export default useClass;