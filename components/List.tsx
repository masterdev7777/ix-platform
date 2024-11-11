'use client'

import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import EditWorkerModal from "./quant-worker/quant-worker/EditWorkerModal"
import RemoveWorkerModal from "./quant-worker/quant-worker/RemoveWorkerModal"

const List = ({ item }: any) => {
  const [editWorkerModal, setEditWorkerModal] = useState<boolean>(false);
  const [removeWorkerModal, setRemoveWorkerModal] = useState<boolean>(false);

  const [menu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [addition, setAddition] = useState<boolean>(false);
  const additionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (additionRef.current && !additionRef.current.contains(event.target as Node)) {
        setAddition(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  })

  return (
    <div className="flex flex-col gap-3 text-fontColor">
      {
        editWorkerModal && <EditWorkerModal setEditWorkerModal={setEditWorkerModal} item={item} />
      }
      {
        removeWorkerModal && <RemoveWorkerModal setRemoveWorkerModal={setRemoveWorkerModal} item={item} />
      }
      <div className="flex justify-between">
        <div className="flex items-center gap-4 px-2">
          <span className="font-semibold text-fontHover whitespace-nowrap">{item.marketType}</span>
        </div>
        {/* <div className="relative" ref={menuRef}>
          <button
            className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-bgHover hover:text-fontHover"
            onClick={() => setMenu((prev) => !prev)}
          >
            <BsThreeDots className="w-6 h-4" />
          </button>
          <div
            className={clsx('absolute w-[315px] bg-bgColor border z-50 border-bgHover p-2 rounded-xl transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0', {
              'invisible opacity-0': menu === false,
              'visible opacity-1': menu === true,
            })}
          >
            <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
              <FaPlus />
              <span>Import Directory</span>
            </Link>
            <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
              <FaUpRightFromSquare />
              <span>View Git Repository</span>
            </Link>
            <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
              <SlSettings />
              <span>Manage Shared Environment Variables</span>
            </Link>
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-between p-4 border border-borderColor bg-bgColor rounded-xl">
        <div className="flex items-center gap-4 grow ">
          <div className="basis-[40%] flex justify-start items-center gap-4">
            <p className="text-fontHover text-lg  overflow-hidden text-nowrap max-w-[180px] text-ellipsis ">
              {item.name}
            </p>
            <div className="h-full ">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                    ${item.status === 'running' ? 'bg-green-500'
                    : item.status === 'stop' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2
                    ${item.status === 'running' ? 'bg-green-500'
                    : item.status === 'stop' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></span>
              </span>
            </div>
          </div>
          <div className="grow">
            <p className="leading-5">{item.created}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="border border-borderColor rounded h-[35px] w-[90px] flex justify-center items-center cursor-pointer">
            {
              item.status === 'running' ? 'Evaluation'
                : item.status === 'stop' ? 'Funded' : 'Failed'
            }
          </div>
          <div className="relative" ref={additionRef}>
            <button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-bgHover hover:text-fontHover"
              onClick={() => setAddition((prev) => !prev)}>
              <BsThreeDots className="w-6 h-4" />
            </button>
            <div
              className={clsx('absolute w-[184px] bg-bgColor border border-bgHover p-2 rounded-xl z-50 transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0', {
                'invisible opacity-0': addition === false,
                'visible opacity-1': addition === true,
              })}
            >
              <button
                type="button" className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover"
                onClick={() => {
                  setEditWorkerModal(true);
                }}
              >Edit</button>
              <button type="button" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover"
                onClick={() => {
                  setRemoveWorkerModal(true)
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List