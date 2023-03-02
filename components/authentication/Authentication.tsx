import { XCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils/helpers'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next'

interface AuthenticationProps {
  toggleForm: () => void
}

const Authentication = ({ toggleForm }: AuthenticationProps) => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  })
  const [register, setRegister] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const switchForm = () => {
    setRegister((prev) => !prev)
  }
  const router = useRouter()

  const handleSignIn = (type: string, value: string) => {
    if (type === 'email') {
      setSignIn((signIn) => ({
        ...signIn,
        email: value,
      }))
    } else {
      setSignIn((signIn) => ({
        ...signIn,
        password: value,
      }))
    }
  }

  const handleSignUp = () => {}

  const getIsFormValid = () => {
    return signIn.password.length >= 8 && validateEmail(signIn.email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (register) {
      // register functionality
    } else {
      setSubmitting(true)
      const login = getIsFormValid()
      if (login) {
        // timeout to simulate the time waiting for a response about credentials status
        setTimeout(() => {
          setCookie('session_token', 'INSERT_TOKEN_HERE')
          router.push('/campaigns')
          // login here
        }, 1000)
      } else {
        // Detect the error and notify the user
        toast.error('Something went wrong!')
        setSubmitting(false)
      }
    }
  }

  return (
    <form
      className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-[100]"
      onSubmit={handleSubmit}
      autoComplete="on"
    >
      <div
        className="w-full h-full bg-black opacity-50"
        onClick={toggleForm}
      ></div>
      <div className="hide-scroll absolute w-[400px] max-w-[90%] max-h-[90%] bg-[#D9D9D9] flex flex-col justify-start items-start rounded-md overflow-auto">
        <div className="relative w-full h-10 flex justify-end items-center pt-2 pr-1.5">
          <XCircleIcon
            className="w-7 text-secondary cursor-pointer"
            onClick={toggleForm}
          />
        </div>
        {register ? (
          <SignUp switcher={switchForm} />
        ) : (
          <SignIn
            switcher={switchForm}
            login={handleSignIn}
            status={submitting}
          />
        )}
      </div>
    </form>
  )
}

export default Authentication
