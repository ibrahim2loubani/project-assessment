import { AtSymbolIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Password from '../../utils/Password'

interface SignInProps {
  switcher: () => void
  login: (type: string, value: string) => void
  status: boolean
}

const SignIn = ({ switcher, login, status }: SignInProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const getEmail = (pass: React.ChangeEvent<HTMLInputElement>) => {
    login('email', pass.target.value)
  }

  const getPassword = (pass: React.ChangeEvent<HTMLInputElement>) => {
    login('password', pass.target.value)
  }

  useEffect(() => {
    if (status) {
      setIsLoading((prev) => !prev)
    } else if (isLoading) {
      setIsLoading((prev) => !prev)
    }
  }, [status])

  return (
    <div className="fade-in-section w-full px-10 pb-3">
      <h1 className="text-primary text-3xl font-interBold pb-1">Login</h1>
      <p className="text-primary">Login to manage your account!</p>
      <div className="relative w-full pt-5">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => getEmail(e)}
          className="px-10 w-full text-primary border border-primary rounded-md outline-none p-3 box-border focus:border-secondary"
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <AtSymbolIcon className="absolute top-[2.1rem] left-3 inline-block h-5 w-5 text-modal-text text-secondary" />
      </div>
      <Password
        id="Password"
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => getPassword(e)}
      />
      <div className="check-button">
        <input type="checkbox" id="remember-btn" />
        <label htmlFor="remember-btn">remember me</label>
      </div>
      <button
        className={`text-white bg-primary rounded-md w-full h-12 hover:bg-opacity-90 font-semibold mt-4 ${
          isLoading && 'is-loading'
        }`}
        type="submit"
      >
        <div className="load open"></div>
        <span>Login</span>
      </button>
      <div className="w-full flex justify-center items-center my-3">
        <h6 className="text-primary text-xs">
          Forgot password?
          <a className="cursor-pointer hover:text-secondary ml-1">Get help</a>
        </h6>
      </div>
      <div className="w-full flex justify-around items-center border-t border-gray-400 mt-3 pt-4">
        <span className="text-sm text-primary">Not a member?</span>
        <button
          className="bg-white text-primary text-sm border border-gray-400 rounded-md px-4 py-1"
          onClick={switcher}
        >
          Signup
        </button>
      </div>
    </div>
  )
}

export default SignIn
