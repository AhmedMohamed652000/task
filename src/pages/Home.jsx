import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Error from './Error';
import Card from '../components/Home/Card';
import SkeletonHome from '../components/Home/Skeleton';
import Pagination from '../components/Home/Pagination';
import baseUrl from '../api/config';

const fetchProducts = async ({ queryKey }) => {
    const page = queryKey[1];
    const { data } = await baseUrl.get(`products?limit=12&skip=${page * 12}`);
    return data;
};

function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError } = useQuery({ queryKey: ['products', currentPage], queryFn: fetchProducts, keepPreviousData: true });
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ,[currentPage]);



    if (isLoading) return <SkeletonHome />;
    if (isError) return <Error />;
    return (
        <div className="flex flex-col py-5 items-center justify-center min-h-screen bg-white text-gray-800">
            <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
            <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {data?.products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.floor(data.total / 12)} onPageChange={handlePageChange} />

        </div>
    );
}

export default Home