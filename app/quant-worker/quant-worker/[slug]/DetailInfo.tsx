import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const DetailInfo = ({item}: any) => {
  const [balances, setBalances] = useState<any>([]);

  const display = (data: any) => {
    const length = data?.length;
    const newData = data[length - 1]?.count;
    const oldData = data[length - 2]?.count;
    if (newData > oldData) {
      if (oldData === 0) {
        return (
          <>
            <FaCaretUp className="text-green-500" />
            <p className={`text-color4 pl-1`}>
              &nbsp;100%
            </p>
          </>
        )
      }
      return (
        <>
          <FaCaretUp className="text-green-500" />
          <p className={`text-color4 pl-1`}>
            &nbsp;{((newData - oldData) / oldData * 100).toFixed(2)}%
          </p>
        </>
      )
    } else if (newData === oldData) {
      return (
        <>
          <FaCaretUp className="text-green-500" />
          <p className={`text-color4 pl-1`}>
            &nbsp;0%
          </p>
        </>
      )
    }
    return (
      <>
        <FaCaretDown className="text-red-500" />
        <p className={`text-fontHover pl-1`}>
          &nbsp;{((oldData - newData) / oldData * 100).toFixed(2)}%
        </p>
      </>
    )
  }

  return (
    <div className={`bg-bgColor text-fontColor border border-borderColor w-full font-bold rounded-xl py-5 px-6 pb-8 grid grid-cols-2`}>
      <div className="col-span-2">
        <h2 className="text-[12px] leading-7 mb-1">{item}</h2>
        <div className="flex items-center text-fontHover gap-5">
          <p className={`pr-2 text-xl`}>$13,278</p>
          <div className={`bg-black rounded-md flex items-center text-[10px] p-1 font-normal leading-none h-[18px]`}>
            {display(balances)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailInfo