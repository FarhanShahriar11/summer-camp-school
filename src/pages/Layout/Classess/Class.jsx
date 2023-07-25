import React from 'react';

import { useEffect, useState } from 'react';
// import usePopular from "../../../hooks/usePopular";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AllClasses from "./AllClasses";


const Class = () => {

  
    const [popularClass, setPopularClass] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/classes/approveClass')
        .then(res => res.json())
        .then(data => setPopularClass(data))
    }, [])

    return (
        <div className="my-16 w-10/12 mx-auto">
            <Helmet>
                <title>FitZone | Class</title>
            </Helmet>

            <SectionTitle
                subHeading="All Classes Here"
                heading="Classes"
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    popularClass.map(classItem => <AllClasses
                        key={classItem._id}
                        classItem={classItem}
                    ></AllClasses>)
                }
            </div>
            
        </div>
    );
};

export default Class;