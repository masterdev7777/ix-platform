const LoadingComponent = () => {
  return (
    <div className="h-[calc(100vh-235px)] w-screen flex items-center justify-center text-white -translate-y-full">
      <div className="flex justify-center flex-col items-center gap-10">
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 text-white text-center"></span>
          <span className="relative inline-flex rounded-full h-0 w-0 bg-sky-500"></span>
        </span>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingComponent