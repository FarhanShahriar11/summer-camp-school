import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";


const AddClass = () => {

    const { user } = useContext(AuthContext)
    const subCategory = [
        'Wicket Keeping',
        'Fast Bowling',
        'Spin Bowling',
        'Fielding',
        'Batting',
        'Football',
        'Tennis',
        'Badminton',
        'Basketball',
    ];
    const stage = ['Beginner', 'Intermediate', 'Advanced'];
    const imgHost = import.meta.env.VITE_IMAGE_BB_API_KEY;
    const imageBbURL = `https://api.imgbb.com/1/upload?key=${imgHost}`;
    const token = localStorage.getItem('access-token');

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

    data.price = parseFloat(data.price);
    data.seat = parseInt(data.seat);
    data.status = 'pending';

    const formData = new FormData();

    formData.append('image', data.imageURL[0]);

    await axios
      .post(imageBbURL, formData)
      .then(async (res) => {
            data.imageURL = res.data.data.url;
            await axios.post('http://localhost:5000/addClass/instructor', data,  {
            headers: {
                authorization: `bearer ${token}`
            }
        }).then((res) => {
            if (res.data.insertedId && res.data.acknowledged) {
                Swal.fire('Success', 'You add this class Successfully', 'success');
                reset();
            }
        });
      })
      .catch((err) => {
            if (err) {
        
                Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Don't duplicate image or rename image",
                showConfirmButton: false,
                timer: 1500,
            });
        }
      });
  };

    return (
        <div className="w-full my-16">
            <Helmet>
                <title>FitZone | Add Class</title>
            </Helmet>

            <SectionTitle
                subHeading="Class Added Form"
                heading="Add Class"
            ></SectionTitle>

            <section className='allContainer h-[100vh]'>
                <form onSubmit={handleSubmit(onSubmit)} className='my-auto'>
                    <div className='md:w-2/4 mx-auto md:grid grid-cols-2 gap-3'>
                        <div className=''>
                            <label htmlFor='instructor' className='block py-1 uppercase'>
                                Your Name
                            </label>
                            
                            <input id='instructor' className='border-2 disabled-input p-3 w-full rounded' {...register('instructor', { required: true })} value={user?.displayName} />
                        </div>
                        
                        <div className=''>
                            <label htmlFor='instructor_mail' className='block py-1 uppercase'>
                                Email
                            </label>
                            
                            <input id='instructor_mail' className='border-2 disabled-input p-3 w-full rounded' {...register('instructor_mail', { required: true })} value={user?.email} />
                        </div>
                        
                        <div className=''>
                            <label htmlFor='className' className='block py-1 uppercase'>
                                Class Name
                            </label>
                            
                            <input id='className' className='border-2 border-black p-3 w-full rounded' {...register('className', { required: true })} />
                        </div>
          
                        <div>
                            <label htmlFor='imageURL' className='block py-1 uppercase'>
                                Image
                            </label>

                            <input id='imageURL' type='file' className='border-2 border-black w-full rounded file-input-md file-input' {...register('imageURL', { required: true })} />
                        </div>
                        
                        <div className=''>
                            <label htmlFor='price' className='block py-1 uppercase'>
                                Price
                            </label>
                            
                            <input id='price' className='border-2 border-black p-3 w-full rounded' type='number' {...register('price', { required: true })} step='0.01' />
                        </div>
          
                        <div className=''>
                            <label htmlFor='seat' className='block py-1 uppercase'>
                                Seat
                            </label>
                            
                            <input id='seat' className='border-2 border-black p-3 w-full rounded' type='number' {...register('seat', { required: true })} />
                        </div>
          
                        <div>
                            <label htmlFor='category' className='block py-1 uppercase'>
                                Category
                            </label>
                            
                            <select id='category' className='border-2 border-black p-3 w-full rounded' {...register('subCategory')} placeholder='Sub category' required >
                                {subCategory.map((subCategory, i) => (
                                    <option key={'subCate' + i} value={subCategory}>
                                        {subCategory}
                                    </option>
                                ))}
                            </select>
                        </div>
          
                        <div>
                            <label htmlFor='stage' className='block py-1 uppercase'>
                                Stage
                            </label>
                            
                            <select className='border-2 border-black p-3 w-full rounded' {...register('stage')} placeholder='stage' required >
                                {stage.map((stage, i) => (
                                    <option key={'stage' + i} value={stage}>
                                        {stage}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div className='md:w-2/4 mx-auto'>
                        <label htmlFor='classDetails' className='block py-1 uppercase'>
                            Class Details
                        </label>
                        
                        <textarea id='classDetails' className='border-2 border-black p-3 w-full rounded resize-none' rows={2} {...register('classDetails', { required: true })} />
                        
                        <div className='flex justify-between'>
                            <input type='reset' className='btn btn-outline btn-warning btn-sm' />
                            <input type='submit' className='btn btn-outline btn-primary btn-sm' />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddClass;