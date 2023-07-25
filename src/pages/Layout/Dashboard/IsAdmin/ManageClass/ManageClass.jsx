import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";


const ManageClass = () => {

    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-livid-one.vercel.app/manageClass')
            .then((res) => res.json())
            .then((data) => setMyClasses(data));
    }, [user]);

    const handleApprove = async (id) => {
        await axios.patch(`https://summer-camp-server-livid-one.vercel.app/actionBtn/${id}`, {
            action: "approve"
        })
        .then(res => {
            if(res.data.modifiedCount) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'This Class is APPROVED',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        });
    }

    const handleDeny = () => {

    }

    return (
        <div className="w-full my-16">
            <Helmet>
                <title>FitZone | Manage Class</title>
            </Helmet>

            <SectionTitle
                subHeading="Manages Class Table"
                heading="Manage Class"
            ></SectionTitle>

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}

                    {
                        myClasses.map((myClass, index) => <tr
                        key={myClass._id}>
                            <td>{index+1}</td>
                            <td><img className="w-12 h-12 rounded-lg" src={myClass.imageURL} alt="" /></td>
                            <td>{myClass.instructor}</td>
                            <td>{myClass.instructor_mail}</td>
                            <td>$ {myClass.price}</td>
                            <td className="space-x-2">
                                {
                                    myClass.status !== 'approve' ?
                                    <button onClick={() => handleApprove(myClass._id)} className="btn btn-outline btn-success btn-sm">Approve</button> :

                                    <button disabled className="btn btn-outline btn-success btn-sm">Approve</button>
                                }

                                <button onClick={() => handleDeny(myClass._id)} className="btn btn-outline btn-error btn-sm">Deny</button>
                            </td>
                            
                            <td>Available Seats: {myClass.seat}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;