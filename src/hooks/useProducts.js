import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
        
        const dataProduct = fetch('https://damp-fortress-84268.herokuapp.com/products')
            .then(res=> res.json())
            .then(data => {
                setData(data)
        });
        
        return () => dataProduct;

    }, [data])
    return {
        data
    };
};

export default useProducts;