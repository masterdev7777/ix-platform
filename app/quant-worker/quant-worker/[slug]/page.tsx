'use client'

import { useParams } from "next/navigation";
import { useState } from "react";
import { useProjects } from "@/lib/utils/context/ProjectsContext"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import AccountBalanceChart from "./AccountBalanceChart";
import ProjectInfo from "./ProjectInfo";
import DetailInfo from "./DetailInfo";
import TradingJournal from "./TradingJournal";
import Calendar from "./Calendar";
import SummaryDay from "./SummaryDay";

const Page = () => {
  const params = useParams();
  const { projects } = useProjects();
  const [balances, setBalances] = useState<any>([]);
  const [selectedDay, setSelectedDay] = useState<any>('');

  const currentProject = projects.find((item: any) => item.name.trim().replaceAll(' ', '-').toLowerCase() === params.slug)

  return (
    <div className="max-w-[1280px] w-full grid grid-cols-4 py-10 gap-5">
      <AccountBalanceChart />
      <ProjectInfo />
      <DetailInfo item="Average Win" />
      <DetailInfo item="Average Loss" />
      <DetailInfo item="Profit Factor" />
      <DetailInfo item="Win Ratio" />
      <DetailInfo item="Best Trade" />
      <DetailInfo item="Worst Trade" />
      <DetailInfo item="Number of Trades" />
      <DetailInfo item="Trading Volume" />
      <TradingJournal />
      <Calendar setSelectedDay={setSelectedDay} />
      <SummaryDay selectedDay={selectedDay} />
    </div>
  )
}

export default Page