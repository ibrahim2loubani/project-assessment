import type { NextPage } from 'next'
import Navbar from '../components/navbar/Navbar'
import { useState } from 'react'
import Authentication from '../components/authentication/Authentication'

const Home: NextPage = () => {
  const [loginForm, setLoginForm] = useState(false)

  const toggleAuth = () => {
    setLoginForm(!loginForm)
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <Navbar />

      <div className="fade-in-img absolute bottom-0 right-0 w-full h-2/3 bg-hero-mobile bg-right-bottom bg-contain bg-no-repeat z-0 md:h-3/4 xl:h-4/5"></div>

      <div className="fade-in-section w-full h-2/3 flex justify-start max-w-[1152px] px-5">
        <div className="w-full md:max-w-[37.5%] flex flex-col justify-start items-center md:items-start gap-5">
          <h1 className="text-primary font-bold text-2xl">CREATIVE TEAM</h1>
          <p className="text-primary font-medium text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            repudiandae dignissimos esse tempore, quisquam officiis et iusto
            perferendis maiores non quia eligendi animi consequuntur tempora id
            eveniet neque error a aliquid aut odit doloremque?
          </p>
          <button
            className="bg-secondary text-white font-medium rounded-full px-5 py-2 cursor-pointer hover:bg-opacity-70"
            onClick={toggleAuth}
          >
            Get Started
          </button>
        </div>
      </div>
      {loginForm && <Authentication toggleForm={toggleAuth} />}
    </section>
  )
}

export default Home
