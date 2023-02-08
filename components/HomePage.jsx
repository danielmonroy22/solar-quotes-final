import React from 'react'

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';










// const MyDiv = styled.div`
//     background-image: url(${bg.src});





// `;

const HomePage = () => {
    const [error, setError] = useState("please enter Zip Code")

    const handleInputChange = (event) => {
        event.persist();
        const zipCode = document.getElementById("zipcode").value;

        if (!zipCode) {
            setError("please enter Zip Code")
            // if (!lastName) {
            //     setError2(null)

            // }




        }


        else {
            setError(null);


        }



    };
    return (
        <>




            <div className='min-h-screen shadow-xl mainDiv bg-cover bg-center bg-no-repeat md:bg-cover ' style={{ backgroundImage: "url('../assets/HomePage1.jpg')" }} >

                {/* <Image
                className='z-[-1]'
                src={bg}
                alt="Pexels"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            /> */}
                <Link href='/'>
                    <div className='text-white  font-bold text-3xl w-full flex justify-center py-10'>
                        <Image src="/assets/Logo.png" width="400" height="300" alt='logo' className='px-10 md:px-0' />
                    </div>
                </Link>
                <div className='min-h-screen w-full gap-10 md:gap-0  flex flex-col md:flex-row '   >


                    <div className='md:flex-1  items-start pt-20 justify-end flex px-10'>
                        <div className=' h-[60%] md:w-[80%] w-full'>
                            <h1 className='text-white font-bold md:text-6xl text-4xl'>Free Solar Quotes, Lowest price in the market</h1>

                            <p className='text-white pt-5 font-medium'>Enter Your Zip Code - Get Qualified Instantly. Compare Quotes. No Cost & No Obligation.</p>
                        </div>
                    </div>
                    <div className='md:flex-1   w-100 h-100 flex justify-start md:pt-20 md:px-10 px-5'>

                        <div className=' bg-white md:h-[60%] h-full md:w-[70%] w-full rounded-3xl p-10'>
                            <p className='md:px-10 font-medium'>See if you qualify for incentives in your area and get solar with zero upfront costs!</p>
                            <div className='w-full flex  justify-start md:px-10 pt-5 md:pt-0 '>
                                <div className='flex-row md:pt-5  w-full'>
                                    <div className='pb-2'>
                                        <label >Zip Code</label>
                                    </div>

                                    <input id='zipcode' type="number" class="bg-gray-50 border border-gray-300 w-full rounded p-2" onChange={handleInputChange} placeholder="ZIP CODE" required />
                                    {error ? <label className=' text-red-500 '>{error}</label> : ""}

                                </div>


                            </div>
                            <div className={error ? `flex justify-end pt-10 px-10 opacity-50 ` : `flex justify-end pt-10 px-10 opacity-100`}>
                                {error ? <Link href="/" className=' w-full py-5 text-center text-white font-semibold bg-red-500 rounded'>
                                    <button type='button' >FREE QUOTE</button>
                                </Link> : <Link href="/dataEntry" className=' w-full py-5 text-center text-white font-semibold bg-red-500 rounded'>
                                    <button type='button' >FREE QUOTE</button>
                                </Link>}

                            </div>

                        </div>


                    </div>



                </div>


            </div >
        </>






    )
}

export default HomePage