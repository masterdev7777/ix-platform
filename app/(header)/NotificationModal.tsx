'use client'

import clsx from "clsx"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { LuInbox } from "react-icons/lu"

const NotificationModal = ({ notificationModal, setNotificationModal }: any) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationModal(false);
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  })

  return (
    <div className={`sm:hidden transtion duration-300 ${notificationModal ? 'visible ' : 'invisible'} bg-[#00000066]  fixed top-0 left-0 w-screen h-screen z-10`}
    >
      <div
        ref={notificationRef}
        className={`transition-transform duration-300 ${notificationModal ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full opacity-0 scale-0'} bg-bgColor fixed w-full rounded-xl bottom-0 h-[75%]`}>
        <div className={`border-[#FFFFFF33] border-t rounded-xl`}>
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
    </div>
  )
}

export default NotificationModal