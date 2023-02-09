import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import yesImage from '../public/assets/yes.png';
import noImage from '../public/assets/close.png';
import { useState } from 'react';
import { resolve } from 'styled-jsx/css';
import Link from 'next/link';
import Slider from '/components/slider';
import RangeSlider from '/components/RangeSlider';


const dataEntry = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [monthlyBill, setmonthlyBill] = useState("");
    const [HomeOwner, setHomeOwner] = useState("");
    const [CreditScoreAbove, setCreditScoreAbove] = useState("");
    const [firstname, setfirstname] = useState("");
    const [LastName, setLastName] = useState("");
    const [Phone, setPhone] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    // const [maxValue, setMaxValue] = maxValueState;



    // const apikey = process.env.GMAP_API_KEY;

    // const mapApiJs = 'https://maps.googleapis.com/maps/api/js';



    // load google map api js
    const nextButtonClicked = () => {
        if (step == 0) {
            // setmonthlyBill(maxValue);
        }


        // else if (step == 3) {
        //     setfirstname(document.getElementById("FirstName").value);
        //     setLastName(document.getElementById("LastName").value);
        //     setPhone(document.getElementById("PhoneNumber").value);
        //     setaddress(document.getElementById("Address").value);
        // }
        setStep(step + 1)

    }
    const SaveButton = () => {
        setfirstname(document.getElementById("FirstName").value);
        setLastName(document.getElementById("LastName").value);
        setPhone(document.getElementById("PhoneNumber").value);
        setaddress(document.getElementById("Address").value);
        alert(CreditScoreAbove);
    }


    /** Input field component */

    const Input = ({ label, required, type, placeholder }) => (
        <div>
            <legend>{label}</legend>
            <input
                {...register(label, { required })}
                className={errors[label] && "flex flex-col gap-1 mb-8 w-full bg-gray-100 border border-gray-300 p-2 rounded focus:border-blue-500 focus:bg-white placeholder-gray-400"}
                type={type} placeholder={placeholder}
            />
            {errors[label] && <span>mandatory</span>}
        </div>
    )

    /** Group the person input fields in a component */
    const PersonFields = () => (
        <div className='flex flex-col items-center '>
            <div className='md:py-10 font-semibold w-full h-auto text-center md:text-3xl text-2xl'>
                Current Monthly Power Bill
            </div>





            <div className="rounded-lg p-4 shadow-lg md:w-[70%] w-full " >
                <RangeSlider
                    intialMin={250}
                    initialMax={750}
                    min={0}
                    max={1000}
                    step={1}
                    priceCap={100}


                />
                {/* <div className="price-range p-4 ">
                    <div className='relative'>

                        {sliderValue !== null ? <span class="text-xl">{sliderValue}</span> : <span class="text-lg">$300</span>}


                    </div> */}
                {/* <input type="range" min="0" max="1000" id="range" defaultValue={sliderValue} className="w-full accent-blue-500" /> */}


                {/* <input
                        type="range"
                        min="0"
                        max="1000"
                        onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        className="w-full appearance-none bg-gray-400 outline-none focus:outline-none focus:shadow-outline"
                    />



                    <div class="-mt-2 flex w-full justify-between">
                        <span class="text-sm text-gray-600">0</span>
                        <span class="text-sm text-gray-600">500</span>
                        <span class="text-sm text-gray-600">1000</span>
                    </div> */}
                {/* <Slider /> */}
                {/* </div> */}
            </div>

        </div>
    )

    /** Group the contact input fields in a component */
    const ContactFields = () => (
        <div className='flex flex-col items-center w-full h-auto '>
            <div className=' font-semibold md:w-[70%] w-full h-auto text-center md:text-3xl text-2xl'>
                Do You Own A Home?
            </div>





            <div class="rounded-lg shadow-lg h-[100%] flex gap-10 w-full items-center justify-center p-10" >
                <div
                    className={`h-auto w-36 rounded hover:border-green-300 border cursor-pointer ${isActive ? 'border-green-300' : ''}`}
                    onClick={() => {

                        setIsActive(!isActive)
                        setIsActive2(false)
                        setStep(step + 1);

                        setHomeOwner("yes")
                    }}
                >
                    <div className=' h-auto p-5 cursor-pointer '>
                        <Image src={yesImage} />

                    </div>
                    <div
                        className="text-center text-2xl rounded  cursor-pointer "
                    >
                        yes

                    </div>

                </div>
                <div
                    className={`h-auto w-36 rounded hover:border-red-500 border cursor-pointer ${isActive2 && !isActive ? 'border-red-500' : ''}`}
                    onClick={() => {
                        setIsActive2(!isActive2)
                        setIsActive(false)
                        setStep(step + 1);

                        setHomeOwner("No")
                    }}
                >
                    <div className=' h-auto md:p-10 p-6'>
                        <Image src={noImage} />

                    </div>
                    <div className="text-center text-2xl rounded">

                        No

                    </div>


                </div>

            </div>

        </div >
    )
    const CreditScore = () => (
        <div className='flex flex-col items-center w-full h-auto '>
            <div className=' font-semibold md:w-[70%] w-full  h-auto text-center md:text-3xl text-2xl'>
                Is your Credit Score Above 650?
            </div>





            <div class="rounded-lg shadow-lg h-[100%] flex gap-10 w-full items-center justify-center p-10" >
                <div
                    className={`h-auto w-36 rounded hover:border-green-300 border cursor-pointer ${isActive3 ? 'border-green-300' : ''}`}
                    onClick={() => {
                        setIsActive3(!isActive3)
                        setIsActive4(false)
                        setCreditScoreAbove("yes")
                        setStep(step + 1);
                    }}
                >
                    <div className=' h-auto p-5 cursor-pointer '>
                        <Image src={yesImage} />

                    </div>
                    <div
                        className="text-center text-2xl rounded  cursor-pointer "
                    >
                        yes

                    </div>

                </div>
                <div
                    className={`h-auto w-36 rounded hover:border-red-500 border cursor-pointer ${isActive4 ? 'border-red-500' : ''}`}
                    onClick={() => {
                        setIsActive4(!isActive4)
                        setIsActive3(false)
                        setCreditScoreAbove("no")
                        setStep(step + 1);
                    }}
                >
                    <div className=' h-auto md:p-10 p-6'>
                        <Image src={noImage} />

                    </div>
                    <div className="text-center text-2xl rounded">

                        No

                    </div>


                </div>

            </div>

        </div >
    )

    /** Group the address input fields in a component */
    const AddressFields = () => (
        <div class="w-full  ">
            <div className=' font-semibold  w-full  pb-10  h-auto text-center md:text-3xl text-2xl'>
                Personal Information
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="FirstName" type="text" placeholder="Jane" />
                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="LastName" type="text" placeholder="Doe" />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Phone Number
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="PhoneNumber" type="tel" placeholder="222-222-222" />
                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Address
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Address" type="text" placeholder="123 street , irvine, CA, 92645" />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="name123@gmail.com" />
                    {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                </div>
            </div>
        </div>
    )

    /** Nnavigation between steps */
    const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
    const leftArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"

    const Navigation = () => (
        <div className="w-full  justify-around   flex flex-row-reverse ">
            {
                step === fieldGroups.length - 1 &&
                <button type="submit" className="py-3 px-5 text-blue-600 rounded text-sm font-bold" onClick={SaveButton} >
                    SAVE
                </button>
            }
            {
                step < fieldGroups.length - 1 &&
                <button type="button" className="  rounded py-10 px-10 text-blue-600 flex-row-reverse" onClick={nextButtonClicked}>
                    <img src={rightArrow} />
                    NEXT
                </button>
            }
            {
                step > 0 &&
                <button type="button" className=" text-blue-600 rounded  py-2 px-3" onClick={() => { setStep(step - 1) }}>
                    <img src={leftArrow} />
                    BACK
                </button>
            }
        </div>
    )

    /** Mark the input group already filled as blue or gray if not */


    const [step, setStep] = useState(0)

    const fieldGroups = [
        <PersonFields />,
        <ContactFields />,
        <CreditScore />,
        <AddressFields />
    ]

    return (
        <>



            <div className="min-h-screen h-screen font-roboto flex  flex-col  items-center bg-cover md:bg-center bg-repeat-x md:bg-no-repeat md:bg-cover  " style={{ backgroundImage: "url('../assets/dataEntry.jpg')" }}>
                <div className='min-h-screen h-screen flex flex-col items-center w-full bg-gradient-to-b from-gray-400 to-transparent'>
                    <Link href='/'>
                        <div className='text-white  font-bold text-3xl w-full flex justify-center py-10'>
                            <Image src="/assets/Logo.png" width="400" height="300" alt='logo' className='px-10 md:px-0' />
                        </div>
                    </Link>
                    <div className=' min-h-[40%] md:w-[50%] w-full px-10 py-10 flex  flex-col bg-white rounded'>



                        {fieldGroups[step]}
                        <Navigation />


                    </div>
                </div>


            </div>

        </>









    )
}

export default dataEntry