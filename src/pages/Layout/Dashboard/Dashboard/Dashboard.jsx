import React, { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaShoppingCart, FaUserTie, FaWallet } from "react-icons/fa";
import useClass from '../../../../hooks/useClass';
import useRole from '../../../../hooks/UseRole';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [classes] = useClass();

    const [ role ] = useRole();
    //console.log(role);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" ></label>
                    <ul className="menu p-4 w-72 h-full bg-slate-900 text-white">
                        {/* <img className="w-36 mb-3" src={logo} alt="" /> */}

                        <div className="flex justify-center">
                            <img src={user?.photoURL} className="w-20 h-20 border-2 p-1 rounded-full" alt="user" />
                        </div>

                        <div className="mb-6 flex mt-2 flex-col items-center">
                            <h5 className="text-2xl font-semibold">{user?.displayName}</h5>
                            <p className="">{user?.email}</p>
                        </div>
                        {/* Sidebar content here */}

                        {/* for admin */}
                        {
                            role == "Admin" && 
                            <>
                                
                                <li>
                                    <NavLink to='/dashboard/manageClass' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaShoppingCart></FaShoppingCart>
                                        Managed Class 
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/manageUser' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaBook></FaBook>
                                        Manage User
                                    </NavLink>
                                </li>
                            </>
                        }

                        {
                        
                            role == "Instructor" && 
                            <>
                                <li>
                                    <NavLink to='/dashboard/addClass' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaShoppingCart></FaShoppingCart>
                                        Add Class 
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/insClass' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaBook></FaBook>
                                        My Class
                                    </NavLink>
                                </li>
                            </>

                        }

                        {/* for student */}
                        {
                            role == "student" &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/myClass' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Selected Class 
                                        
                                        <span className="badge">
                                            +{classes?.length || 0}
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/enrollClass' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaBook></FaBook>
                                        My Enrolled Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink  to='/dashboard/payment' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaWallet></FaWallet>
                                        Payment
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink  to='/dashboard/paymentHistory' className={({isActive }) => isActive ? ' text-black font-semibold py-2 hover:text-white' : 'hover:text-white' }>
                                        <FaWallet></FaWallet>
                                        Payment History
                                    </NavLink>
                                </li>
                            </>
                        }

                        <div className="divider border-b border-gray-600"></div>

                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/instructor"><FaUserTie></FaUserTie> Instructor</NavLink></li>
                        <li><NavLink to="/classes"><FaBook></FaBook> Classes</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;