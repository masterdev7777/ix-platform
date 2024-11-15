'use client'

import dailyStock from "@/stack/dailyStock"
import moment from "moment"
import { useState } from "react"
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const Calendar = ({ setSelectedDay }: any) => {
  const [stateCalendar, setStateCalendar] = useState<number>(0);
  const [currentDay, setCurrentDay] = useState<any>(new Date())
  const [selectedButton, setSelectedButton] = useState<number | undefined>(undefined);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const generateDays = () => {
    const startDay = moment(currentDay).startOf('month').day();
    const daysInMonth = moment(currentDay).endOf('month').date();
    const today = moment();

    return Array.from({ length: daysInMonth }).map((_, index) => {
      const currentDate = moment(currentDay).date(index + 1)
      const isFutureDate = currentDate.isAfter(today, 'day');
      const isToday = currentDate.isSame(today, 'day');
      const data = dailyStock.find((item: any) => item.date === currentDate.format('YYYY-MM-DD'))

      return <button
        key={index}
        className={`h-20 border rounded text-base font-semibold pl-3 pt-3 flex flex-col items-start justify-start hover:scale-105 relative
          ${(data?.profit ?? 0) < 0 ? 'bg-[#FF6B000D] border-[#FF6B0099] text-[#FF6B00]'
            : (data?.profit ?? 0) > 0 ? 'bg-[#00FFB20D] border-[#00FFB299] text-[#00FFB2]'
              : isFutureDate ? 'bg-black border-borderColor'
                : isToday ? 'bg-fontHover text-black'
                  : 'bg-bgHover border-borderColor text-fontHover'}`}
        style={index === 0 ? { gridColumnStart: startDay + 1 } : undefined}
        onClick={() => {
          setSelectedDay(currentDate.format('YYYY-MM-DD'))
          setSelectedButton(index)
        }}
      >
        <p className={`${isToday ? 'text-black' : 'text-fontHover'}`}>{(index + 1) < 10 ? `0${index + 1}` : (index + 1)}</p>
        <p className="text-2xl font-bold">
          {isFutureDate ? `${data?.profit || ''}` : `$ ${data?.profit || '0.0'}`}
        </p>
        <FaCheck className={`${selectedButton === index ? 'block' : 'hidden'} absolute right-0 top-0 -translate-y-1 translate-x-1 bg-[#0033FF] w-5 h-5 rounded-full text-white p-1`} />
      </button>
    })
  }

  return (
    <div className="col-span-3 bg-bgColor border border-borderColor text-fontColor rounded-lg px-10 py-9 h-[600px] flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <button
          onClick={() => setStateCalendar((prev) => (prev + 1) > 2 ? 0 : prev + 1)}
          className="text-xl font-bold text-fontHover pl-5"
        >
          {
            stateCalendar === 0 ? moment(currentDay).format('MMM, YYYY')
            : moment(currentDay).format('YYYY')
          }
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              stateCalendar === 0 ? setCurrentDay(moment(currentDay).subtract(1, 'months').toDate())
              : setCurrentDay(moment(currentDay).subtract(1, 'year').toDate())
            }}
            className="h-8 w-8 border border-borderColor bg-black flex items-center justify-center rounded-lg hover:scale-110 hover:bg-bgHover transition-all duration-300 ease-in-out outline-none"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => {
              stateCalendar === 0 ? setCurrentDay(moment(currentDay).add(1, 'months').toDate())
              : setCurrentDay(moment(currentDay).add(1, 'year').toDate())
            }}
            className="h-8 w-8 border border-borderColor bg-black flex items-center justify-center rounded-lg hover:scale-110 hover:bg-bgHover transition-all duration-300 ease-in-out outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      {
        stateCalendar === 0 ?
          <>
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                SUN
              </div>
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                MON
              </div>
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                TUE
              </div>
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                WED
              </div>
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                THU
              </div>
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                FRI
              </div>
              <div className="h-10 border border-borderColor rounded text-fontColor text-sm font-medium pl-5 flex items-center justify-start">
                SAT
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {generateDays()}
            </div>
          </>
          : stateCalendar === 1 ?
            <div className="flex-1 flex items-stretch w-full my-5">
              <div className="grid grid-cols-4 gap-5 w-full">
                {
                  months.map((month, index) => <button key={index}
                    className="bg-black border border-borderColor rounded-lg text-xl text-fontHover hover:scale-105 hover:bg-bgHover transition-all duration-300 ease-in-out">
                    {month}
                  </button>
                  )
                }
              </div>
            </div>
            : ''

      }

    </div>
  )
}

export default Calendar