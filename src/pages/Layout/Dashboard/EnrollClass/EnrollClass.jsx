import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const EnrollClass = () => {

    const { user } = useContext(AuthContext);
    const [enrollClass, setEnrollClass] = useState([])

    // useEffect( () => {
    //     fetch(`https://top-spin-server.vercel.app/enroll/habib@gmail.com`)
    //     .then(res => res.json())
    //     .then(data => {
    //         return setEnrollClass(data)
    //     })
    // }, [user.email])

    console.log(enrollClass);
    return (
        <div className="my-20 w-full">
            <Helmet>
                <title>FitZone | Enrollment Class</title>
            </Helmet>

            <SectionTitle
                subHeading="Enrollment After Payment"
                heading="Active Class"
            ></SectionTitle>

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
                            enrollClass.map((item, index) => <tr
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
                                    <button className="btn btn-outline btn-warning">
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

export default EnrollClass;