'use client'

import clsx from "clsx"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaChevronDown, FaGithub, FaXTwitter } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { LuMoonStar } from "react-icons/lu"
import { RiSaveFill, RiSunLine } from "react-icons/ri"

const Footer = () => {
  const [legal, setLegal] = useState<boolean>(false);
  const legalRef = useRef<any>(null);
  const [theme, setTheme] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (legalRef.current && !legalRef.current.contains(event.target as Node)) {
        setLegal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <footer className="px-6 py-6 text-sm border-t  pt-7 bg-bgColor border-borderColor text-fontColor">
      <div className="flex items-center justify-center">
        <div className="max-w-[1080px] w-full">
          <nav className="h-[34px] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button className="flex items-center p-2 ml-2 text-blue-700 transition-colors duration-300 ease-linear rounded-md cursor-pointer hover:bg-bgHover">
                <GoDotFill />
                <span>All systems normal</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="items-center hidden p-2 px-4 transition-colors duration-300 ease-linear rounded-md xl:flex hover:bg-bgHover">
                <span className="pr-2">Command Menu</span>
                <span className="px-1 py-1 w-[26px] border border-borderColor ml-1 rounded-md text-xs flex items-center justify-center">⌘</span>
                <span className="px-1 py-1 w-[26px] border border-borderColor ml-1 rounded-md text-xs flex items-center justify-center" >K</span>
              </button>
              <div className="relative flex items-center justify-around w-24 h-8 gap-2 border rounded-full border-borderColor">
                <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute left-0", {'border-borderColor': theme === 0, 'border-transparent': theme !==0 })} onClick={() => setTheme(0)}>
                  <RiSaveFill className="w-4 h-4" />
                </button>
                <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute ", {'border-borderColor': theme === 1, 'border-transparent': theme !==1 })} onClick={() => setTheme(1)}>
                  <RiSunLine className="w-4 h-4" />
                </button>
                <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute right-0", {'border-borderColor': theme === 2, 'border-transparent': theme !==2 })} onClick={() => setTheme(2)}>
                  <LuMoonStar className="w-4 h-4" />
                </button>
              </div>
            </div>
          </nav>
          <ul className="grid items-center justify-between grid-cols-3 gap-4 mt-6 min-[850px]:flex pb-10">
            <li className="pl-1.5 flex items-center ">
              <Link href=""><FaGithub className="w-4 h-4 mr-5" /></Link>
              <Link href=""><FaXTwitter className="w-4 h-4 mr-5" /></Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Home</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Documentation</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Guides</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Help</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Contact Sales</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Blog</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Changelog</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Pricing</Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover">
              <Link href="">Enterprise</Link>
            </li>
            <li className="relative" ref={legalRef}>
              <button
                className="flex items-center gap-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-fontHover"
                onClick={() => {
                  setLegal((prev) => !prev);
                }}>
                <span>Legal</span>
                <FaChevronDown className="w-4 h-4" />
              </button>
              <div
                className={clsx('absolute -top-4 -translate-y-full border border-borderColor rounded-md w-[230px] right-0 bg-bgColor p-2 flex flex-col items-center transition-opacity duration-300 ease-in-out', {
                  'invisible opacity-0': legal === false,
                  'visible opacity-1': legal === true,
                })}
              >
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Privacy Policy</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Cookie Policy</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Terms of Service</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Trademark Policy</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Inactivity Policy</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">DMCA Policy</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Support Terms</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">DPA</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">DRA</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">SLA</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Sub-processors</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Event Terms and Conditions</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Event Code of Conduct</Link>
                <Link href="" className="flex items-center justify-start w-full h-10 px-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-bgHover">Job Applicant Privacy Notice</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer