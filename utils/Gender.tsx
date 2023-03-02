import { UserIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const Gender = () => {
  const [isChanged, setIsChanged] = useState(false)

  return (
    <div className="w-full flex justify-between items-center gap-5 mt-5">
      <div
        className={`w-full bg-white border border-black rounded-md cursor-pointer flex justify-between items-center p-3 ${
          !isChanged && 'border-secondary p-1'
        }`}
        onClick={() => setIsChanged(false)}
      >
        <div
          className={`w-5 h-5 rounded-full bg-[#D9D9D9] ${
            !isChanged && 'border-2 border-secondary p-[0.1rem]'
          }`}
        >
          <div
            className={`w-full h-full rounded-full bg-[#D9D9D9] ${
              !isChanged && 'bg-secondary'
            }`}
          ></div>
        </div>
        <div className="text-primary font-medium text-base">Male</div>
        <UserIcon className={`w-5 h-5 ${!isChanged && 'text-secondary'}`} />
      </div>

      <div
        className={`w-full bg-white border border-black rounded-md cursor-pointer flex justify-between items-center p-3 ${
          isChanged && 'border-secondary p-1'
        }`}
        onClick={() => setIsChanged(true)}
      >
        <div
          className={`w-5 h-5 rounded-full bg-[#D9D9D9] ${
            isChanged && 'border-2 border-secondary p-[0.1rem]'
          }`}
        >
          <div
            className={`w-full h-full rounded-full bg-[#D9D9D9] ${
              isChanged && 'bg-secondary'
            }`}
          ></div>
        </div>
        <div className="text-primary font-medium text-base">Female</div>
        <UserIcon className={`w-5 h-5 ${isChanged && 'text-secondary'}`} />
      </div>
    </div>
  )
}

export default Gender
