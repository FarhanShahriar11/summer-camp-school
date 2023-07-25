// import { useEffect, useState } from 'react';
import './PopularInstructor.css'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import ShowInstructor from './ShowInstructor';
import { useEffect, useState } from "react";

const PopularInstructor = () => {

    const [popularInstructor, setPopularInstructor] = useState([]);
    

    useEffect( () => {
        fetch('https://summer-camp-server-livid-one.vercel.app/users/instructor')
        .then(res => res.json())
        .then(data => {
            setPopularInstructor(data);
        })
    }, [])

    const topInstructor = popularInstructor.slice(0, 6);

    return (
        <div className='my-16 w-10/12 mx-auto'>
            <SectionTitle
                subHeading="Popular Instructors Here"
                heading="Popular Instructor"
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    topInstructor.map(singleInstructor => <ShowInstructor
                        key={singleInstructor._id}
                        singleInstructor={singleInstructor}
                    ></ShowInstructor> )
                }
            </div>
        </div>
    );
};

export default PopularInstructor;