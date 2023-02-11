import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
    const { isLoaded } = useLoadScript({

        googleMapsApiKey: "AIzaSyD9pYt4LAs06beTGW7zXS-DXGeVxje5P0A",
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Soading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 33.6405, lng: -117.8389 }), []);
    const [selected, setSelected] = useState(null);


    return (
        <>
            <div className='min-h-screen shadow-xl mainDiv bg-cover bg-center bg-no-repeat md:bg-cover ' style={{ backgroundImage: "url('../assets/HomePage1.jpg')" }} >

                <Link href='/'>
                    <div className='text-white  font-bold text-3xl w-full flex justify-center py-10'>
                        <Image src="/assets/Logo.png" width="400" height="300" alt='logo' className='px-10 md:px-0' priority />
                    </div>
                </Link>

                <div className='min-h-screen w-full gap-10 md:gap-0  flex flex-col md:flex-row '   >


                    <div className='md:flex-1  items-start pt-20 justify-end flex px-10'>
                        <div className=' h-[60%] md:w-[80%] w-full'>
                            <h1 className='text-white font-bold md:text-6xl text-4xl'>Free Solar Quotes, Lowest price in the market</h1>

                            <p className='text-white pt-5 font-medium'>Enter Your Zip Code - Get Qualified Instantly. Compare Quotes. No Cost & No Obligation.</p>
                        </div>
                    </div>
                    <div className='md:flex-1 md:py-44   w-100 h-100 flex justify-start md:pt-20 md:px-10 px-5'>

                        <div className=' bg-white h-full md:w-[70%] w-full rounded-3xl p-10'>
                            <p className='md:px-10 font-medium'>See if you qualify for incentives in your area and get solar with zero upfront costs!</p>
                            <div className='w-full flex  justify-start md:px-10 pt-5 md:pt-0 '>
                                <div className='flex-row md:pt-5 h-full  w-full'>


                                    {/* <input id='zipcode' type="number" class="bg-gray-50 border border-gray-300 w-full rounded p-2" onChange={handleInputChange} placeholder="ZIP CODE" required /> */}
                                    <div className="divPrimary w-full">
                                        <div className='pb-2'>
                                            <label >Address</label>
                                        </div>


                                        <div className="bg-gray-50 border border-gray-300 w-full rounded " >
                                            <PlacesAutocomplete setSelected={setSelected} />
                                        </div>

                                        <div className={selected ? `flex flex-col min-h-[50vh] w-full` : `hidden`}>
                                            <h1 className='py-5 text-3xl font-semibold'> Is this Your Roof?</h1>


                                            <GoogleMap
                                                zoom={150}
                                                center={selected}
                                                mapContainerClassName="map-container"
                                                position={selected}
                                                mapTypeId="satellite"




                                            >
                                                {selected && <Marker position={selected} />}
                                                {/* {selected && <div className='flex absolute bottom-0 w-full bg-blue-500 items-center justify-center py-5 text-white'> yes this is my roof</div>} */}
                                            </GoogleMap>
                                        </div>
                                        <div className="flex justify-end pt-10  opacity-100">
                                            <Link href="/dataEntry" className="w-full py-5 text-center text-white font-semibold bg-red-500 rounded">


                                                <button type='button' >{selected ? "Yes this is my roof" : "FREE QUOTE"} </button>
                                            </Link>


                                        </div>




                                    </div>


                                </div>


                            </div>



                        </div>


                    </div>



                </div>


            </div >
            {/* <GoogleMap bootstrapURLKeys={{ key: "AIzaSyCqe6iGhufrKU25NUftIIm5yuuV_qi_tqs" }} defaultCenter={this.props.center} defaultZoom={this.props.zoom} options={function (maps) { return { mapTypeId: "satellite" } }} > </GoogleMap> */}
        </>
    );
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    };

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="combobox-input"
                placeholder="Search an address"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};


