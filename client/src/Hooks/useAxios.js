import React, { useState } from 'react';
import axios from 'axios';


const useAxios = (url) => {

    const [data, setData] = useState();
    const [prevUrl, setPrevUrl] = useState();

if (prevUrl !== url) {
    axios.get(url)
    .then((res) => {
        setData(res.data);
        setPrevUrl(url);
    })
    .catch((err) => {
        console.log(err)
    });
}
return [data];
}

export default useAxios