import SubMenu from "@/components/SubMenu"
import { explorerSubMenu } from "@/stack/subMenu"

const ExplorerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className={`px-4 h-[46px] flex items-center bg-bgColor border-b border-borderColor sticky top-0 overflow-hidden z-50 text-sm `}>
        {
          explorerSubMenu.map((item, index) => <SubMenu item={item} key={index} />)
        }
      </div>
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-281px)] items-center justify-center">
        {children}
      </main>
    </>
  )
}

export default ExplorerLayout