import React from 'react'
import { useState, useEffect, useRef } from 'react'

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap }) => {
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);


    const handleMin = (e) => {
        if (maxValue - minValue <= priceCap && maxValue >= max) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {


            }
            else {
                setMinValue(parseInt(e.target.value));
            }

        }
        else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }

    }
    const handleMax = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) < parseInt(minValue)) {

            }
            else {
                setMaxValue(parseInt(e.target.value))
            }

        }
        else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value))
            }
            else {
                setMaxValue(parseInt(e.target.value))
            }


        }

    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + '%';

    }, [minValue, maxValue]);


    return (
        <div className="flex flex-col w-full bg-white shadow-xl rounded-lg px-6 py-4 ">

            <div className='w-full flex justify-center pb-5 items-center my-6'>
                {/* <div className='rounded-md'>
                    <span className='p-2 font-semibold'> Min</span>
                    <input
                        onChange={(e) => setMinValue(e.target.value)}
                        type="number"
                        value={minValue}
                        className="w-24 rounded-md border border-gray-400"
                    />
                </div>
                <div className='ml-2 font-semibold text-lg'> - </div> */}
                <div className='rounded-md'>
                    <span className='p-2 font-semibold text-3xl'> $</span>
                    <input
                        onChange={(e) => setMaxValue(e.target.value)}
                        type="number"
                        value={maxValue}
                        className="w-24 rounded-md border-none text-3xl"
                    />
                </div>
            </div>
            {/* SLIDER */}
            <div className='mb-4'>
                <div className='slider relative h-1 rounded-md bg-gray-300'>
                    <div className='progress absolute h-1 bg-green-300 rounded' ref={progressRef}></div>
                </div>
                <div className='range-input relative'>
                    {/* <input
                        onChange={handleMin}
                        type="range"
                        value={minValue}
                        min={min}
                        step={step}
                        max={max}
                        className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"


                    /> */}
                    <input
                        onChange={handleMax}
                        type="range"
                        value={maxValue}
                        min={min}
                        step={step}
                        max={max}
                        className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"


                    />
                </div>

            </div>
        </div >
    )
}



export default RangeSlider
