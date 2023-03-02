import React from 'react'
import { useRouter } from 'next/router'
import { BellAlertIcon } from '@heroicons/react/24/outline'

const TabNavbar = () => {
  const router = useRouter()

  return (
    <div className="w-full flex justify-between items-center mb-5">
      <span className="capitalize text-primary font-bold text-2xl">
        {router.query.tab}
      </span>
      <span>
        <BellAlertIcon className="w-6 text-gray-700 cursor-pointer hover:text-secondary" />
      </span>
    </div>
  )
}

export default TabNavbar
