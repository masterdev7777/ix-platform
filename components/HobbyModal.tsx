'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { FaCheck } from "react-icons/fa6"
import { FiPlusCircle } from "react-icons/fi"
import { GoArrowRight } from "react-icons/go"
import { MdSearch } from "react-icons/md"

const HobbyModal = ({ hobbyModal, setHobbyModal }: any) => {
  const hobbyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (hobbyRef.current && !hobbyRef.current.contains(event.target as Node)) {
        setHobbyModal(false);
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  })

  return (
    <div className={`sm:hidden transtion duration-300 ${hobbyModal ? 'visible ' : 'invisible'} bg-[#00000066]  fixed top-0 left-0 w-screen h-screen z-10`}
    >
      <div
        ref={hobbyRef}
        className={`transition-transform duration-300 ${hobbyModal ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full opacity-0 scale-0'} bg-bgColor fixed w-full rounded-xl bottom-0 h-[75%]`}>
        <div className={`border-[#FFFFFF33]  border-t rounded-xl`}>
          <div className="flex items-center justify-start h-12 px-4 text-base">
            <MdSearch className="text-fontColor w-[20px] h-auto" />
            <input type="text" placeholder="Find Team..." className="grow ml-2 px-0.5 py-[1px] bg-transparent text-fontColor placeholder:text-fontColor text-sm outline-none" />
          </div>
          <div className="flex items-center justify-center p-2 text-sm border-t border-b border-borderColor">
            <ul className="flex flex-col w-full gap-2">
              <li className="flex items-center w-full h-10 px-2 rounded-md hover:bg-bgHover">
                <Link href="" className="flex items-center justify-start gap-2 ">
                  <Image
                    src="/avatar.svg"
                    width={22}
                    height={22}
                    className="rounded-full w-[20px] h-[20px]"
                    alt="User avatar"
                  />
                  <span className="text-fontHover">My Account</span>
                </Link>
              </li>
              <li>
                <p className="h-10 text-[13px] text-fontColor px-2 flex items-center">Teams</p>
                <ul>
                  <li className="h-10 px-2 bg-[#ffffff21] rounded-md w-full flex items-center">
                    <Link href="" className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-start gap-2 ">
                        <Image
                          src="/avatar1.svg"
                          width={22}
                          height={22}
                          className="rounded-full w-[20px] h-[20px]"
                          alt="User avatar"
                        />
                        <span className="text-fontHover text-nowrap text-ellipsis overflow-hidden w-[160px]">EDITH's projects</span>
                      </div>
                      <FaCheck className="text-fontColor" />
                    </Link>
                  </li>
                  <li className="flex items-center w-full h-10 px-2 rounded-md hover:bg-bgHover">
                    <Link href="" className="flex items-center justify-start gap-2 ">
                      <FiPlusCircle className="text-[#52a8ff] w-5 h-4" />
                      <span className="text-fontHover">Create Team</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="p-2 text-sm">
            <div className="flex items-center w-full h-10 px-2 rounded-md hover:bg-bgHover">
              <Link href="" className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start gap-2 ">
                  <Image
                    src="/avatar2.svg"
                    width={22}
                    height={22}
                    className="rounded-full w-[20px] h-[20px]"
                    alt="User avatar"
                  />
                  <span className="text-fontHover">Suggested Teams</span>
                </div>
                <GoArrowRight className="text-fontColor" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HobbyModal