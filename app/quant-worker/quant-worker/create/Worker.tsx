'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import CreateWorkerModal from "./CreateWorkerModal";

const Worker = ({ item, index, length }: any) => {
  const [createWorkerModal, setCreateWorkerModal] = useState<boolean>(false);
  const [marketType, setMarketType] = useState<string>('');

  useEffect(() => {
    if (!createWorkerModal) {
      document.body.style.overflow = 'unset'
    }
  }, [createWorkerModal])

  return (
    <>
      <div className={`flex items-center w-full px-8 py-6 border-borderColor bg-bgColor justify-center
      ${item.status === 'close' ? 'opacity-40' : ''}
      ${index === 0 ? 'rounded-t-lg' : ''}
      ${index === length - 1 ? 'rounded-b-lg' : 'border-b'}`}
      >
        <div className="w-full flex gap-4 sm:items-end max-sm:flex-col max-sm:items-center">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded bg-gradient-to-b from-[#909090] to-[#2a2a2a] p-1px">
                <div className="bg-black w-[46px] h-[46px] flex items-center justify-center rounded">
                  <Image
                    src="/logo.svg"
                    alt="worker"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
              <p className="mb-1 text-lg font-medium text-fontHover ">{item.marketType}</p>
            </div>
            <p className="mb-2 text-sm text-fontColor">Master the art of trading by connecting any metatrader 4 account.</p>
          </div>
          <div className="">
            {
              item.status === 'close' ? <button
                type="button"
                disabled
                className="h-8 px-4 text-sm font-medium transition-colors whitespace-nowrap duration-300 ease-linear rounded-md text-fontHover border border-borderColor w-[130px]"
              >
                Coming Soon
              </button>
                : <button
                  type="button"
                  onClick={() => {
                    setCreateWorkerModal(true)
                    setMarketType(item.marketType)
                  }}
                  className="h-8 px-4 text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-linear bg-fontHover border rounded-md text-black hover:bg-fontColor border-borderColor w-[130px]"
                >
                  Deploy Worker
                </button>
            }
          </div>
        </div>
      </div>
      {
        createWorkerModal && <CreateWorkerModal setCreateWorkerModal={setCreateWorkerModal} marketType={marketType} />
      }
    </>

  )
}

export default Worker

