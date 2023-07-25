import React from 'react';
import { Helmet } from "react-helmet-async";
import useClass from "../../../../hooks/useClass";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MyClass = () => {
    const [classes, refetch] = useClass();

    console.log(classes);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-livid-one.vercel.app/classes/${item._id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>FitZone | My Class</title>
            </Helmet>

            <SectionTitle
                subHeading="My Selected Class"
                heading="Classes"
            ></SectionTitle>

            <h2 className="text-center text-2xl font-semibold mb-5">My Selected CLasses: {classes.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            classes.map((item, index) => <tr
                                key={item._id}    
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.imageURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>

                                <td>{item.subCategory}</td>

                                <td>{item.instructor}</td>
                                
                                <td>$ {item.price}</td>
                                <td>
                                    <Link to="/dashboard/payment">
                                        <button className="btn btn-outline btn-success">
                                            Payment
                                        </button>
                                    </Link>
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-outline btn-warning">
                                        <FaTrash className="text-lg"></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;
