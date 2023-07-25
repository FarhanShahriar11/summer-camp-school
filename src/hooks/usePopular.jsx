import React from 'react';

import { useEffect, useState } from "react";


const usePopular = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/popular')
        .then(res => res.json())
        .then(data => {
            setPopular(data);
            setLoading(false);
        })
    }, [])
    return [popular, loading]
};

export default usePopular;