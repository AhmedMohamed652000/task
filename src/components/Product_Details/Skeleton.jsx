import React from 'react'


function SkeletonProductDetails() {

        return (
            <div className="animate-pulse space-y-4 md:space-y-0 flex justify-evenly items-center  h-screen">
            <div className="bg-gray-300 h-64 w-full md:w-1/2 lg:max-w-lg rounded-lg mb-4 md:mb-0"></div>
            <div className="bg-gray-300 h-96 max-w-md lg:max-w-lg rounded-lg p-6 space-y-6 w-full md:w-1/2">
                <div className="h-8 bg-gray-400 rounded"></div>
                <div className="h-6 bg-gray-400 rounded w-3/4"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-400 rounded w-full"></div>
                    <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                </div>
            </div>
        </div>
        
        );
    }


export default SkeletonProductDetails