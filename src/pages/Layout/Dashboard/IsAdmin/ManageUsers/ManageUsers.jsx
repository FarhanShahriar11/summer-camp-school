import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure]=useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });

    const handleAdmin = user => {
        fetch(`https://summer-camp-server-livid-one.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleInstructor = user => {
        fetch(`https://summer-camp-server-livid-one.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>FitZone | Manage Users</title>
            </Helmet>

            <SectionTitle
                subHeading="Manage All Users"
                heading="All Users"
            ></SectionTitle>

            <h2 className="text-3xl font-semibold text-center mb-5">
                Manage All Users: {users.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className="space-x-3 text-center">
                                        <button onClick={() => handleAdmin(user)} className="btn btn-outline btn-primary btn-sm">Make Admin</button>

                                        <button onClick={() => handleInstructor(user)} className="btn btn-outline btn-success btn-sm">Make Instructor</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
