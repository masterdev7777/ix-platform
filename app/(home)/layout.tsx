// import SubMenu from "@/components/SubMenu"

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {/* <SubMenu /> */}
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-235px)] items-center justify-center">
        {children}
      </main>
    </>
  )
}

export default HomeLayout