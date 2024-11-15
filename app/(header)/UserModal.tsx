'use client'

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsTriangle } from "react-icons/bs"
import { FiPlusCircle } from "react-icons/fi"
import { LuMoonStar} from "react-icons/lu"
import { RiSaveFill, RiSunLine } from "react-icons/ri"
import { SlSettings } from "react-icons/sl"

const UserModal = ({ userModal, setUserModal }: any) => {
  const [theme, setTheme] = useState<number>(0);

  return (
    <div className={`lg:hidden transition-transform duration-300 ${userModal ? 'visible opacity-100 scale-100 translate-y-0' : 'invisible translate-y-full opacity-0 scale-0'} bg-bgColor fixed w-full rounded-xl bottom-0 h-[calc(100%-64px)] text-fontColor z-[52] left-0 px-3`}>
      <div className="flex flex-col gap-4 p-3">
        <button className="w-full h-10 text-sm font-medium text-black transition-colors duration-300 ease-in bg-fontHover hover:bg-fontColor rounded-xl">Upgrade to Pro</button>
        <button className="w-full h-10 text-sm font-medium transition-colors duration-300 ease-in-out border text-fontHover border-borderColor rounded-xl hover:bg-bgHover">Contact</button>
      </div>
      <div className="py-3 border-b border-borderColor">
        <p className="flex items-center justify-between p-3">
          <span className="text-fontHover">EDITH@gmail.com</span>
          <Image
            src="/avatar1.svg"
            width={20}
            height={20}
            className="rounded-full w-[20px] h-[20px]"
            alt="User"
          />
        </p>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Account Settings</span>
          <SlSettings className="w-4 h-4" />
        </Link>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Create Team</span>
          <FiPlusCircle className="w-4 h-4" />
        </Link>
        <Link href="" className="flex items-center justify-between w-full h-10 px-3 rounded-md hover:text-fontHover">
          <span className="">Theme</span>
          <div className="relative flex items-center justify-around w-24 h-8 gap-2 border rounded-full border-borderColor">
            <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute left-0", { 'border-borderColor': theme === 0, 'border-transparent': theme !== 0 })} onClick={() => setTheme(0)}>
              <RiSaveFill className="w-4 h-4" />
            </button>
            <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute ", { 'border-borderColor': theme === 1, 'border-transparent': theme !== 1 })} onClick={() => setTheme(1)}>
              <RiSunLine className="w-4 h-4" />
            </button>
            <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute right-0", { 'border-borderColor': theme === 2, 'border-transparent': theme !== 2 })} onClick={() => setTheme(2)}>
              <LuMoonStar className="w-4 h-4" />
            </button>
          </div>
        </Link>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Log Out</span>
        </Link>
      </div>
      <div className="py-3 border-b border-borderColor">
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Resources</span>
        </Link>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Changelog</span>
        </Link>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Help</span>
        </Link>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Documentation</span>
        </Link>
        <Link href="" className="flex items-center justify-between h-12 px-3 transition-colors duration-300 ease-in-out text-fontColor hover:text-fontHover hover:bg-bgHover rounded-xl">
          <span>Home page</span>
          <BsTriangle className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default UserModal