import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Error from './Error';
import Carousel from '../components/Product_Details/Carousel';
import SkeletonProductDetails from '../components/Product_Details/Skeleton';
import baseUrl from '../api/config';

const fetchProduct = async ({ queryKey }) => {
    const id = queryKey[1];
    const { data } = await baseUrl.get(`products/${id}`);
    return data;
};



function Product_Details() {
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery({ queryKey: ['product_details', id], queryFn: fetchProduct });

    if (isLoading) return <SkeletonProductDetails />;
    if (isError) return <Error />;

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-center p-4">
            <Carousel images={data.images} className="w-full lg:w-1/2 lg:max-w-lg shadow-lg mx-6" />
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md lg:max-w-lg mx-6 my-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
                <p className="text-gray-700 text-base mb-4">{data.description}</p>
                <div className="space-y-2">
                    <p><strong>Price:</strong> <span className="text-lg text-indigo-600">${data.price}</span> <span className="text-gray-500 line-through">${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}</span></p>
                    <p><strong>Rating:</strong> <span className="text-yellow-500">{data.rating.toFixed(2)} &#9733;</span></p>
                    <p><strong>Stock:</strong> <span className="text-green-500">{data.stock}</span> units available</p>
                    <p><strong>Brand:</strong> {data.brand}</p>
                    <p><strong>Category:</strong> {data.category}</p>
                </div>
            </div>
        </div>
    );
}

export default Product_Details;
