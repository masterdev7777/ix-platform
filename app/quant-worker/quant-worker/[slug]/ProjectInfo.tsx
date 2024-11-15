const ProjectInfo = () => {
  return (
    <div className="border border-borderColor bg-bgColor rounded-xl py-9 text-fontHover px-6 flex flex-col pb-12">
      <h3 className="text-xl font-bold text-fontHover mb-8">Information</h3>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Market Type</span>
          <span className="font-light">Crypto</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Phase</span>
          <span className="font-light text-green-500">Evaluation</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Account Size</span>
          <span className="font-light">$50,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Start Date</span>
          <span className="font-light">2024/08/20</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">End Date</span>
          <span className="font-light">2024/11/10</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Win Rate</span>
          <div className="">
            <div className="flex items-center justify-between">
              <span>Win 85</span>
              <span>Loss 15</span>
            </div>
            <div className="w-full h-1.5 bg-red-500 relative rounded-full">
              <div className="absolute top-0 left-0 w-[85%] h-1.5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Daily Loss Limit</span>
          <div className="">
            <div className="flex items-center justify-between">
              <span>$1,500.00 Left</span>
              <span>80%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-500 relative rounded-full">
              <div className="absolute top-0 left-0 w-[80%] h-1.5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Max Loss Limit</span>
          <div className="">
            <div className="flex items-center justify-between">
              <span>$0.00 Limit</span>
              <span>100%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-500 relative rounded-full">
              <div className="absolute top-0 right-0 w-[100%] h-1.5 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectInfo