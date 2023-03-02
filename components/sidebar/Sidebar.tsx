// import ThemedImage from '@components/utils/image'
import Link from 'next/link'
import React from 'react'
import {
  ChartBarIcon,
  PowerIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'

const Sidebar = () => {
  const router = useRouter()
  const tab = router.query.tab

  return (
    <div>
      <div className="w-20 h-full bg-primary fixed overflow-y-hidden top-0 lg:w-44 duration-300">
        <div className="w-full h-full flex flex-col justify-between p-2 lg:p-4">
          <div className="w-full">
            <Link href="/">
              <div className="flex justify-center items-center font-bold text-white cursor-pointer lg:justify-start">
                Logo
              </div>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5 lg:gap-3">
            <Link href="/campaigns">
              <div
                className={`flex justify-center items-center gap-3 cursor-pointer h-8 lg:justify-start lg:pl-2 ${
                  tab === 'campaigns' ? 'sidebar-active' : 'text-white'
                }`}
              >
                <ChatBubbleLeftRightIcon className="w-6" />
                <span className="font-semibold hidden lg:block">Campaigns</span>
              </div>
            </Link>
            <Link href="/insights">
              <div
                className={`flex justify-center items-center gap-3 cursor-pointer h-8 lg:justify-start lg:pl-2 ${
                  tab === 'insights' ? 'sidebar-active' : 'text-white'
                }`}
              >
                <ChartBarIcon className="w-6" />
                <span className="font-semibold hidden lg:block">Insights</span>
              </div>
            </Link>
          </div>
          <div className="w-full">
            <div
              className="flex justify-center items-center gap-3 cursor-pointer text-white h-8 lg:justify-start lg:pl-2"
              onClick={() => {
                deleteCookie('session_token')
                router.push('/')
              }}
            >
              <PowerIcon className="w-6" />
              <span className="font-semibold text-white hidden lg:block">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
