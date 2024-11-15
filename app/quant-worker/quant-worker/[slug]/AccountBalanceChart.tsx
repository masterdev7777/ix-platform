import { data1 } from "@/stack/data"
import { FC, useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const CustomTooltip: FC = (data: any) => {
  if (data.active && data.payload && data.payload.length) {
    return (
      <div className={`bg-black border-borderColor text-fontColor border rounded-lg py-2 px-5 w-40`}>
        <p className="pb-2 pr-2 text-xs">
          {/* {moment(data.label).format('D MMMM YYYY')} */}
        </p>
        <p className="text-lg font-semibold text-right text-fontHover">{`$${data.payload[0].value.toLocaleString()}`}</p>
      </div>
    )
  }
  return null;
}

const AccountBalanceChart = () => {
  const [period, setPeriod] = useState<number>(7)

  const dateFormatter = (tick: Date) => {
    // return moment(tick).format('D MMM');
  }

  const dataFormatter = (tick: number) => {
    const maxValue = 28000;
    if (maxValue >= 1000) return `${(tick / 1000).toFixed(0)}k`;
    return `${tick.toFixed(0)}`;
  }

  const domain = () => {
    let maxValue = 28000;
    let numbers = maxValue.toString().length;
    const maxLimit = Math.pow(10, numbers);
    return [0, maxLimit]
  }

  const generateTicks = (ticks: number) => {
    let maxValue = 28000;
    let numbers = maxValue.toString().length;
    const maxLimit = Math.pow(10, numbers);
    const step = maxLimit / (ticks - 1);
    return Array.from({ length: ticks}, (_, i) => 0 + i * step);
  }

  return (
    <div className="py-9 px-16 bg-bgColor border border-borderColor rounded-xl col-span-3">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl text-fontHover font-bold">Account Balance</h3>
        <select
          value={period}
          onChange={e => setPeriod(Number(e.target.value))}
          className="border border-borderColor text-fontColor bg-transparent rounded p-1 outline-none"
        >
          <option value={7} className="bg-bgColor">7 Days</option>
          <option value={30} className="bg-bgColor">1 Month</option>
          <option value={90} className="bg-bgColor">3 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          width={500}
          height={300}
          data={data1}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#B8B8B8"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "#B8B8B8"}}
            axisLine={false}
            tickLine={false}
            padding={{ right: 20, left: 20}}
            // tickFormatter={dateFormatter}
            interval={(period === 7) ? 0 : (period === 30) ? 2 : 5}
            tickMargin={10}
          />
          <YAxis 
            tick={{ fill: "#B8B8B8" }}
            tickFormatter={dataFormatter}
            domain={domain()}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            ticks={generateTicks(6)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line dot={false} type="monotone" dataKey="pv" stroke="#708fff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AccountBalanceChart