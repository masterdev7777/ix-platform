const PayoutTable = () => {
  return (
    <div className="w-full border border-borderColor rounded-lg">
      <table className="border-collapse bg-bgColor rounded-lg text-left w-full">
        <thead>
          <tr className="h-10 text-fontColor">
            <th className="pl-10">Date</th>
            <th className="pl-10">Total Profit</th>
            <th className="pl-10">Worker Earning</th>
            <th className="pl-10">Status</th>
          </tr>
        </thead>
        <tbody className="text-fontHover">
          <tr className="h-14 border-t border-borderColor odd:bg-bgHover even:bg-bgColor">
            <td className="pl-10">2023-10-10</td>
            <td className="pl-10">$ 1,000.00</td>
            <td className="pl-10">$ 1,000.00</td>
            <td className="pl-10 h-14 flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                    bg-blue-500
                      `}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-blue-500
                    `}></span>
              </span>
              Available
            </td>
          </tr>
          <tr className="h-14 border-t border-borderColor odd:bg-bgHover even:bg-bgColor">
            <td className="pl-10">2023-10-10</td>
            <td className="pl-10">$ 1,000.00</td>
            <td className="pl-10">$ 1,000.00</td>
            <td className="pl-10  h-14 flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                    bg-red-500
                      `}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-red-500
                    `}></span>
              </span>
              Unavailable
            </td>
          </tr>
          <tr className="h-14 border-t border-borderColor odd:bg-bgHover even:bg-bgColor">
            <td className="pl-10">2023-10-10</td>
            <td className="pl-10">$ 1,000.00</td>
            <td className="pl-10">$ 1,000.00</td>
            <td className="pl-10  h-14 flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                    bg-yellow-500
                      `}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-yellow-500
                    `}></span>
              </span>
              Pending
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PayoutTable