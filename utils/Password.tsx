import React, { RefObject, useState } from 'react'
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

interface PasswordProps extends React.HTMLAttributes<HTMLInputElement> {
  // name: string
  // password: RefObject<HTMLInputElement>
  // styling?: string
  // submit?: (event: any) => void
  // value?: string
  // onChange?: (event: any) => void
  // onBlur?: (event: any) => void
}

function Password({ ...props }: PasswordProps) {
  const [visible, setVisibility] = useState(false)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // props.submit && props.submit(e)
    }
  }

  const Icon = visible ? (
    <EyeIcon
      className="cursor-pointer absolute right-3 top-[2.2rem] text-primary inline-block h-5 w-5"
      onClick={() => setVisibility((visibility) => !visibility)}
    />
  ) : (
    <EyeSlashIcon
      className="cursor-pointer absolute right-3 top-[2.2rem] text-primary inline-block h-5 w-5"
      onClick={() => setVisibility((visibility) => !visibility)}
    />
  )

  const InputType = visible ? 'text' : 'password'

  return (
    <div className="relative w-full pt-5">
      <input
        // value={props.value}
        // onChange={props.onChange}
        // id="password"
        // name="password"
        className="px-10 w-full text-primary border border-primary rounded-md outline-none p-3 box-border focus:border-secondary"
        type={`${InputType}`}
        // ref={props.password}
        // placeholder='Password'
        // onKeyDown={(e) => handleKeyPress(e)}
        {...props}
      />
      {Icon}
      <LockClosedIcon className="absolute top-[2.1rem] left-3 inline-block h-5 w-5 text-secondary" />
    </div>
  )
}

export default Password
