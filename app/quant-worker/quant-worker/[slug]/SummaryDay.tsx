import dailyStock from "@/stack/dailyStock"
import moment from "moment"

const SummaryDay = ({ selectedDay }: any) => {
  const data = dailyStock.find((item: any) => item.date === selectedDay)

  return (
    <div className="bg-bgColor border border-borderColor rounded-lg px-6 py-9 text-fontColor">
      <h3 className="text-xl font-bold text-fontHover mb-5">Summary for the day</h3>
      <div className="flex-1 grid grid-cols-2 gap-3 ">
        <div className="border border-borderColor bg-black p-2 rounded">
          <p>Date</p>
          <p className="text-lg text-fontHover">{moment(selectedDay).format('YYYY/MM/DD')}</p>
        </div>
        <div className="border border-borderColor bg-black p-2 rounded">
          <p>Ending Balance</p>
          <p className="text-lg text-fontHover">{data?.endingBalance || "$ 0"}</p>
        </div>
        <div className="border border-borderColor bg-black p-2 rounded">
          <p>Trades Taken</p>
          <p className="text-lg text-fontHover">{data?.tradesTaken || 0}</p>
        </div>
        <div className="border border-borderColor bg-black p-2 rounded">
          <p>Lots Used</p>
          <p className="text-lg text-fontHover">{data?.lotsUsed || '0.0'}</p>
        </div>
        <div className={`border  p-2 rounded col-span-2 h-[100px]
          ${(data?.profit ?? 0) < 0 ? 'border-[#FF6B0099] text-[#FF6B00] bg-[#FF6B000D]'
            : (data?.profit ?? 0) > 0 ? 'border-[#00FFB299] text-[#00FFB2] bg-[#00FFB20D]'
              : 'border-borderColor text-fontHover bg-bgHover'
          }`}>
          <p className="text-lg text-fontHover mb-2">Profit</p>
          <p className="text-4xl font-extrabold ">$ {data?.profit || 0}</p>
        </div>
      </div>
    </div>
  )
}

export default SummaryDay