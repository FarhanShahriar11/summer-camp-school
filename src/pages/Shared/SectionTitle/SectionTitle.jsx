import { BiTennisBall } from 'react-icons/Bi';
import './SectionTitle.css'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        
        <div className='text-center mb-10 space-y-3 title-font tracking-wider'>
            <p className='flex items-center justify-center'> 
                <BiTennisBall className='mr-1 text-2xl text-rose-900'></BiTennisBall>
                <p className='text-xl text-rose-900 font-semibold uppercase italic'>{ subHeading }</p>
            </p>

            <h2 className='text-5xl font-semibold uppercase text-black italic'>{ heading }</h2>
        </div>
    );
};

export default SectionTitle;

// TbBallTennis