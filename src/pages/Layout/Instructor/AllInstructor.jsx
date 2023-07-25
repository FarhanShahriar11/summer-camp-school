import React from 'react';

const AllInstructor = ({item}) => {
    const { image, name, email } = item;
    return (
        <div>
            <div className="border shadow-xl bg-gray-100">
                <img className="h-96 w-full" src={image} alt="" />

                <div className="p-10 text-center space-y-2">
                    <p className="text-lime-600 text-xl font-semibold title-font">Name: {name}</p>

                    <p className="title-info">Email: <span className="text-blue-600 cursor-pointer hover:underline">{email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default AllInstructor;