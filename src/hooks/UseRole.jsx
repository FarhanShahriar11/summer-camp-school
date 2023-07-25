
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    

    const token = localStorage.getItem('access-token');
    

    const { refetch, data: roleUser } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-livid-one.vercel.app/users/role/${user?.email}`,
             {
                headers: {
                    authorization: `bearer ${token}`
                }
            })

            return res.json();
        },
    })
    const role = roleUser?.role;
    // console.log(role);
    return [ role, refetch ]
};

export default useRole;