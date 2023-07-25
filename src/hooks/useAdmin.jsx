import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);

    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();

    // console.log(token);

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-livid-one.vercel.app/users/role/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    const roleAdmin = isAdmin?.role;
    // console.log(classes);
    return [ roleAdmin, isAdminLoading ]
};

export default useAdmin;