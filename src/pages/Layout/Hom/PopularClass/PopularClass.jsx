import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import './PopularClass.css'
import ShowClass from './ShowClass';
// import usePopular from '../../../../hooks/usePopular';

const PopularClass = () => {

    const [popularClass, setPopularClass] = useState([]);

    useEffect( () => {
        fetch('https://summer-camp-server-livid-one.vercel.app/classes/approveClass')
        .then(res => res.json())
        .then(data => setPopularClass(data))
    }, [])

    // const sortClass = popularClass.sort((a, b) => b.students - a.students);
    // const topClass = sortClass.slice(0, 6);

    // const [popular] = usePopular();
    // const popularClass = popular.filter(item => item.category === 'class')

    const sortClass = popularClass.sort((a, b) => b.seat - a.seat);
    const topClass = sortClass.slice(0, 6);

    return (
        <div className='my-16 w-10/12 mx-auto'>
            <SectionTitle
                subHeading="Popular Classes Here"
                heading="Popular Class"
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    topClass.map(singleClass => <ShowClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></ShowClass> )
                }
            </div>
        </div>
    );
};

export default PopularClass;