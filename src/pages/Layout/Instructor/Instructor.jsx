import React from 'react';

// import usePopular from "../../../hooks/usePopular";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from 'react-helmet-async';
import AllInstructor from './AllInstructor'
import { useEffect, useState } from "react";


const Instructor = () => {
    

    const [instructor, setInstructor] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/users/instructor')
        .then(res => res.json())
        .then(data => setInstructor(data))
    }, [])


    return (

        <div className="">
            <div className="my-16 w-10/12 mx-auto">
                <Helmet>
                    <title>FitZone | Instructor</title>
                </Helmet>

                <SectionTitle
                    subHeading="All Instructors Here"
                    heading="Instructors"
                ></SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        instructor.map(item => <AllInstructor
                            key={item._id}
                            item={item}
                        ></AllInstructor>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Instructor;