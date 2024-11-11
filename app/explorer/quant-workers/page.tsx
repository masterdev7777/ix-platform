'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import data from "@/stack/data"

const ExplorerQuantWorkers = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 lg:gap-8 max-w-[1280px] w-full lg:pb-12 lg:pt-16 py-5 lg:py-10">
      <div className="grid w-full grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-2" >
          <p className="text-xs leading-4 text-fontColor">Total Worker Earning</p>
          <p className="text-2xl text-fontHover">$ 416,081.4</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-2" >
          <p className="text-xs leading-4 text-fontColor">Week Worker Earning</p>
          <p className="text-2xl text-fontHover">$ 83,216.28</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Quant Workers</p>
          <p className="text-2xl text-fontHover">142</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Active Quant Workers</p>
          <p className="text-2xl text-fontHover">27</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Trading Volume</p>
          <p className="text-2xl text-fontHover">611,878,994.01</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor sm:col-span-1" >
          <p className="text-xs leading-4 text-fontColor">Total Fund Managed</p>
          <p className="text-2xl text-fontHover">$ 3100000</p>
        </div>
        <div className="flex flex-col border rounded-lg sm:col-span-2 border-borderColor bg-bgColor lg:col-span-4">
          <div className="flex flex-row items-center justify-between p-6">
            <p className="items-center justify-between text-2xl font-medium text-fontHover">Total Worker Earning</p>
          </div>
          <div className="shrink-0 bg-borderColor h-[1px] w-full mb-10"></div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="name" hide={true} />
              <YAxis hide={true} />
              <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default ExplorerQuantWorkers