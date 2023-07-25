import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../../../provider/AuthProvider';



const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { googleSign } = useContext(AuthContext)

    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser)

            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)

                })
                .then(res => res.json())
                .then( () => {
                        // reset();
                        // Swal.fire({
                        //     position: 'top-end',
                        //     icon: 'success',
                        //     title: 'Registration Successful',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })
                      navigate(from, { replace: true });
                })

            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error)
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
    }
    return (
        <div className="">
        <div className="flex flex-col md:flex-row items-center">
            <div
                className="flex items-center justify-center space-x-2 border hover:text-white hover:bg-blue-600 cursor-pointer w-3/5 md:w-2/5 mx-auto h-10 text-xl"
                onClick={handleGoogleSign}>
                <FaGoogle></FaGoogle>
                <p className="font-semibold">Google</p>
            </div>
        </div>
    </div>
    );
};

export default SocialLogin;