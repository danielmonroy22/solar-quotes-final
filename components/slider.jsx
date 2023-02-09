import React from 'react'

const slider = () => {
    return (
        <div className="relative">
            <input
                type="range"
                min="1"
                max="100"
                className="w-full appearance-none bg-gray-400 outline-none focus:outline-none focus:shadow-outline"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 text-xs text-center pb-2">
                <span className="text-gray-700">Value</span>
            </div> */}
        </div>
    )
}

export default slider