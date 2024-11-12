'use client'

import PayoutTable from "@/components/quant-worker/earning/PayoutTable";
import RewardTable from "@/components/quant-worker/earning/RewardTable";
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"

const Earning = () => {
  const [align, setAlign] = useState<string>('payout');

  return (
    <div className="flex flex-col flex-1 gap-6 lg:gap-8 max-w-[1280px] w-full lg:pb-12 lg:pt-16 py-5 lg:py-10">
      <div className="grid w-full grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-2" >
          <p className="text-xs leading-4 text-fontColor">Worker Points</p>
          <p className="text-2xl text-fontHover">416,081</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-2" >
          <p className="text-xs leading-4 text-fontColor">Worker Classification</p>
          <p className="text-2xl text-fontHover">0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Fund Manage</p>
          <p className="text-2xl text-fontHover">142</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Payouts</p>
          <p className="text-2xl text-fontHover">27</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Rewards</p>
          <p className="text-2xl text-fontHover">$ 611,878,994.01</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Funded Worker</p>
          <p className="text-2xl text-fontHover">$ 3,100,000.00</p>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-4">
        <div className="flex gap-4 w-full max-sm:flex-col ">
          <div className="grow bg-bgColor flex items-center h-10 justify-between rounded-md border border-borderColor  text-fontColor pr-2.5">
            <div className="flex items-center justify-center w-10 h-10">
              <FaSearch />
            </div>
            <input type="text" className="w-full h-full outline-none bg-bgColor" placeholder="Search Repositories and Projects..." />
          </div>
          <div className="flex items-center justify-between rounded-md border border-borderColor p-1 h-10 bg-bgColor gap-4">
            <button
              className={`w-full h-full flex justify-center items-center rounded-sm px-3 border border-borderColor transition-colors duration-300 ease-in-out ${align === 'payout' ? 'bg-fontHover text-bgColor hover:bg-fontColor' : 'bg-bgColor text-fontHover hover:bg-bgHover'}`}
              onClick={() => setAlign('payout')}
            >
              Payout
            </button>
            <button
              className={`w-full h-full flex justify-center items-center rounded-sm px-3 border border-borderColor transition-colors duration-300 ease-in-out ${align === 'reward' ? 'bg-fontHover text-bgColor hover:bg-fontColor' : 'bg-bgColor text-fontHover hover:bg-bgHover'}`}
              onClick={() => setAlign('reward')}
            >
              Reward
            </button>
          </div>
        </div>
        {
          align === 'payout' ? <PayoutTable /> : <RewardTable />
        }
      </div>
    </div>
  )
}

export default Earning