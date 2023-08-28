import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { object, string } from 'yup';
import axios from 'axios';
import encrypt, { decrypt } from '@/utils/encryptMessage';
import { useRouter } from 'next/router';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const inter = Inter({ subsets: [ 'latin' ] })

export default function Home() {
  const router = useRouter()
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ data, setData ] = useState({ email: "", password: "" })
  const [ error, setError ] = useState({})

  const handleChange = (e) => {
    setData({ ...data, [ e.target.name ]: e.target.value })
  }

  const handleValidate = async () => {
    try {
      let userSchema = object({
        email: string().email().required(),
        password: string().required()
      });

      const user = await userSchema.validate(data, { abortEarly: false })
      await handleLogin()
    } catch (error) {
      console.error(error, "<<-- Error in validating data")
    }
  }

  const handleLogin = async () => {
    try {
      const body = await encrypt(data)
      const res = await axios.post(`https://devadmin.altabooking.com/api/v2/auth/login`, { request_data: body }, {
        headers: {
          "apikey": "indusAltaR2PSM",
          "currency": "U2FsdGVkX1/O0sFe9FnokQdTBRP/rRIlcPZEWbzHL9ncZwZzp/Fu/2Jnt0z8ukCALQNDRknKwa5WdmjDRC2XA2a0gz/ZfvHeYTIq7fBZi9P4kQ7KvQYueLB2Rl4puqOTSQyBsbLGPc8cQ9KDZLMVapCruTsJcGzRnaOo1CZksLPMzmNOPqe+ePZk6UJiAUmoDS6p4JvLCmpe0RATiqDh7g=="
        }
      })
      const output = await decrypt(res.data.response_data)
      localStorage.setItem("token", output.data.profile.token)

      if (output.res_code === 200) {
        router.push("/search")
      }
    } catch (error) {
      console.error(error, "<<-- Error in login api")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex  justify-center rounded shadow max-w-7xl w-[90%]  bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500 m-4">
        <div className="h-full w-full my-7">
          <div className=" flex flex-col justify-center items-center space-y-2">
            <div>
              <h1 className="text-xl font-semibold text-white">Here you can Login</h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-200">Let's join us :)</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-7 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h1 className="text-base text-gray-200">Email</h1>
              <Input type="email" name='email' placeholder='Enter your email id' className="  rounded-md px-5 py-2 focus:outline-none font-semibold md:w-72 lg:w-[340px]" onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <h1 className="text-base text-gray-200">Password</h1>
              <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} type="password" onChange={handleChange} name='password' placeholder="Enter your password" className="  rounded-md px-5 py-2  focus:outline-none font-semibold md:w-72 lg:w-[340px]" />
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium " onClick={handleValidate}>login</button>
          </div>
        </div>
      </div>
    </div>

  )
}
