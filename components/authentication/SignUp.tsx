import { UserIcon } from '@heroicons/react/24/outline'
import { AtSymbolIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Countries from '../../utils/Countries'
import Gender from '../../utils/Gender'
import Password from '../../utils/Password'

interface SignUpProps {
  switcher: () => void
}

const SignUp = ({ switcher }: SignUpProps) => {
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const getPassword = (pass: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(pass.target.value)
  }

  const getConfirmedPassword = (pass: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(pass.target.value)
  }

  function getCountry(country: React.ChangeEvent<HTMLSelectElement>) {
    setCountry(country.target.value)
  }

  return (
    <div className="fade-in-section w-full px-10 pb-3">
      <h1 className="text-primary text-3xl font-interBold pb-1">Sign Up</h1>
      <p className="text-primary">Become a part of our community!</p>
      <div className="relative w-full pt-5">
        <input
          // onChange={handleChange}
          className="px-10 w-full text-primary border border-primary rounded-md outline-none p-3 box-border focus:border-secondary"
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Full Name"
        />
        <UserIcon className="absolute top-[2.1rem] left-3 inline-block h-5 w-5 text-modal-text text-secondary" />
      </div>
      <div className="relative w-full pt-5">
        <input
          // value={values.mobile}
          // onChange={handleChange}
          className="px-10 w-full text-primary border border-primary rounded-md outline-none p-3 box-border focus:border-secondary"
          id="email"
          name="email"
          type="email"
          // ref={mobile}
          placeholder="Email Address"
          // onBlur={handleBlur}
        />
        <AtSymbolIcon className="absolute top-[2.1rem] left-3 inline-block h-5 w-5 text-modal-text text-secondary" />
      </div>
      <Password
        id="Password"
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => getPassword(e)}
        // password={password}
        // value={values.password}
        // onChange={handleChange}
      />
      <Password
        id="confirm-password"
        placeholder="Confirm Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          getConfirmedPassword(e)
        }
      />
      <Gender />
      <Countries value={country} onChange={getCountry} />
      <button
        className="text-white bg-primary rounded-md w-full h-12 hover:bg-primaryDark font-semibold mt-4 mb-2"
        type="submit"
      >
        <div className="load open"></div>
        <span>Sign Up</span>
      </button>
      <div className="w-full flex justify-around items-center border-t border-gray-400 mt-3 pt-4">
        <span className="text-sm text-primary">Already have an account?</span>
        <button
          className="bg-white text-primary text-sm border border-gray-400 rounded-md px-4 py-1"
          onClick={switcher}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default SignUp
