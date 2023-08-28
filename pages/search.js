import encrypt, { decrypt } from '@/utils/encryptMessage'
import { Input } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'

function Search() {
    // const getAirports = async () => {
    //     const body = await encrypt({ search_key: "" })
    //     const data = await axios.post(`https://devadmin.altabooking.com/api/v2/flight/search-flight-airport`, { request_data: body }, {
    //         headers: {
    //             "apikey": "indusAltaR2PSM",
    //             "currency": "U2FsdGVkX1/O0sFe9FnokQdTBRP/rRIlcPZEWbzHL9ncZwZzp/Fu/2Jnt0z8ukCALQNDRknKwa5WdmjDRC2XA2a0gz/ZfvHeYTIq7fBZi9P4kQ7KvQYueLB2Rl4puqOTSQyBsbLGPc8cQ9KDZLMVapCruTsJcGzRnaOo1CZksLPMzmNOPqe+ePZk6UJiAUmoDS6p4JvLCmpe0RATiqDh7g=="
    //         }
    //     })

    //     const output = await decrypt(res.data.response_data)
    //     console.log("🚀 ~ file: search.js:17 ~ getAirports ~ output:", output)
    // }

    // useEffect(() => {
    //     getAirports()
    // }, [])

    const handleChange = (e) => {

    }
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="flex  justify-center rounded shadow max-w-7xl w-[90%] bg-gray-950 m-4">
                <div className="h-full w-full my-7">
                    <div className="top">
                        {/* Flying from */}
                        <Input type="" name='email' placeholder='Flying from' className="  rounded-md px-5 py-2 focus:outline-none font-semibold md:w-72 lg:w-[340px]" onChange={handleChange} suffix={
                            <></>
                        } />

                        {/* Flying to */}

                        {/* Depurture Date */}
                    </div>

                    <div className="bottom">
                        {/* Traveller(s) */}

                        {/* Prefered class */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search