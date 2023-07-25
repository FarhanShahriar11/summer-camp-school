import { Link } from 'react-router-dom';
import errorImg from '../../assets/featured/error.jpg'
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>FitZone | 404 Error</title>
            </Helmet>
            <div className='w-10/12 mx-auto'>
                <img src={errorImg} className='h-[60vh] w-full' alt="" />

                <h2 className='text-center text-4xl mt-5 text-red-600 font-bold'>Page Not Found!</h2>

                <div className='text-center mt-6'>
                    <Link to='/'>
                        <button className='bg-lime-600 hover:bg-lime-500 py-2 px-7 text-white text-lg font-semibold'>
                            <h2>Back To Home</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;