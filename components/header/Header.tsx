'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuInbox, LuLogOut, LuMoonStar, LuTriangle } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { RiSaveFill, RiSunLine } from "react-icons/ri";
import NotificationModal from "./NotificationModal";
import UserModal from "./UserModal";
import HeaderMainMenu from "./HeaderMainMenu";

const Header = () => {

  const [notification, setNotification] = useState<boolean>(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [notificationModal, setNotificationModal] = useState<boolean>(false);

  const [setting, setSetting] = useState<boolean>(false);
  const settingRef = useRef<HTMLDivElement>(null);
  const [userModal, setUserModal] = useState<boolean>(false);

  const [theme, setTheme] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotification(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingRef.current && !settingRef.current.contains(event.target as Node)) {
        setSetting(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="flex items-center h-16 px-4 sm:px-6 bg-bgColor">
      <nav className="flex items-center justify-between grow">
        <HeaderMainMenu />
        <div className="flex items-center gap-8">
          <ul className="items-center hidden gap-4 text-sm leading-5 text-fontColor lg:flex">
            <li className="flex items-center h-8 px-3 border rounded-md cursor-auto hover:text-fontHover hover:bg-bgHover border-borderColor">Feedback</li>
            <li className="cursor-pointer hover:text-fontHover">Changelog</li>
            <li className="cursor-pointer hover:text-fontHover">Help</li>
            <li className="cursor-pointer hover:text-fontHover">Docs</li>
          </ul>
          <div className="flex items-center gap-2">
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => {
                  if (window.innerWidth > 600) {
                    setNotification((prev) => !prev);
                  } else {
                    setNotificationModal(true);
                  }
                }}
                className={clsx('border hover:bg-bgHover border-borderColor rounded-full w-8 h-8 flex items-center justify-center text-fontColor hover:text-fontHover',
                  {
                    'bg-bgHover': notification
                  }
                )}
              >
                <IoNotificationsOutline className="w-5 h-auto" />
              </button>
              <div
                className={clsx('max-sm:hidden absolute right-0 top-10 z-[51] translate-y-2 bg-[#000000] text-fontHover rounded-2xl border border-borderColor text-sm flex',
                  {
                    'hidden': !notification,

                  })}
              >
                <div className="w-[400px] h-[500px] hover:bg-bgColor rounded-2xl flex flex-col">
                  <div className="flex items-center justify-start h-12 gap-6 px-4 text-fontColor">
                    <Link href="" className={clsx("border-b-2 border-fontHover h-[48px] flex items-center justify-center", {
                    })}>
                      <span className="px-1 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover">Inbox</span>
                    </Link>
                    <Link href="" className={clsx("border-b-2 hover:border-fontHover border-transparent h-[48px] flex items-center justify-center", {
                    })}>
                      <span className="px-1 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover">Archive</span>
                    </Link>
                    <Link href="" className={clsx("border-b-2 hover:border-fontHover border-transparent h-[48px] flex items-center justify-center", {
                    })}>
                      <span className="px-1 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover">Comments</span>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full p-2 border-t border-borderColor">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bgHover">
                      <LuInbox className="text-fontColor w-[20px] h-auto" />
                    </div>
                    <span className="mt-4 text-fontColor">No new notifications</span>
                  </div>
                </div>
              </div>
              <NotificationModal notificationModal={notificationModal} setNotificationModal={setNotificationModal} />
            </div>
            <div className="relative" ref={settingRef}>
              <button
                onClick={() => {
                  if (window.innerWidth > 960) {
                    setSetting((prev) => !prev)
                  } else {
                    setUserModal((prev) => !prev)
                  }
                }}

                className={clsx('rounded-full border border-borderColor hover:bg-bgHover text-fontColor hover:text-fontHover w-8 h-8 flex justify-center items-center ',
                  {
                    'bg-bgHover': setting
                  }
                )}
              >
                <Image
                  src="/avatar1.svg"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="hidden rounded-full lg:block"
                />
                {
                  !userModal
                    ? <HiMenuAlt4 className="block w-5 h-auto lg:hidden" />
                    : <MdClose className="block w-5 h-auto lg:hidden" />
                }
              </button>
              <div
                className={clsx('max-lg:hidden absolute right-0 top-10 translate-y-2 z-[51] bg-bgColor text-fontHover rounded-2xl border border-borderColor text-sm flex',
                  {
                    'hidden': !setting,

                  })}
              >
                <div className="w-[256px] rounded-2xl p-2 text-fontColor">
                  <div className="pt-4">
                  </div>
                  <Link href="" className="flex items-center justify-start w-full h-10 rounded-md hover:bg-bgHover hover:text-fontHover">
                    <span className="px-2 ">Dashboard</span>
                  </Link>
                  <Link href="" className="flex items-center justify-start w-full h-10 rounded-md hover:bg-bgHover hover:text-fontHover">
                    <span className="px-2 ">Account Settings</span>
                  </Link>
                  <Link href="" className="flex items-center justify-between w-full h-10 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
                    <span className="">Create Team</span>
                    <FiPlusCircle className="w-5 h-5" />
                  </Link>
                  <div className="my-2 -mx-2 border-b border-borderColor"></div>
                  <Link href="" className="flex items-center justify-between w-full h-10 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
                    <span className="">Command Menu</span>
                    <div className="flex gap-1">
                      <p className="p-1 text-xs border rounded-md border-borderColor">Ctrl</p>
                      <p className="p-1 text-xs border rounded-md border-borderColor">K</p>
                    </div>
                  </Link>
                  <Link href="" className="flex items-center justify-between w-full h-10 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
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
                  <div className="my-2 -mx-2 border-b border-borderColor"></div>
                  <Link href="" className="flex items-center justify-between w-full h-10 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
                    <span className="">Home Page</span>
                    <LuTriangle className="w-5 h-5" />
                  </Link>
                  <Link href="" className="flex items-center justify-between w-full h-10 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
                    <span className="">Log Out</span>
                    <LuLogOut className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <UserModal userModal={userModal} setUserModal={setUserModal} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
