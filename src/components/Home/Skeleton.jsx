import React from 'react'


function SkeletonHome() {

    return (
        <div className=" flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
            <h1 className="text-2xl font-bold my-6">Product Catalog</h1>
            <div className="w-full px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow-xl">
                        <div className="p-8 rounded-t-lg bg-gray-300 h-[200px]"></div>
                        <div className="px-5 py-5">
                            <div className="h-6 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                                <div className="h-8 bg-blue-300 rounded w-1/4"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default SkeletonHome