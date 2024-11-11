import SubMenu from "@/components/SubMenu"
import { quantWorkerSubMenu } from "@/stack/subMenu"
import { ProjectsProvider } from "@/lib/utils/context/ProjectsContext"

const QuantWorkerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className={`px-4 h-[46px] flex items-center bg-bgColor border-b border-borderColor sticky top-0 overflow-hidden z-50 text-sm `}>
        {
          quantWorkerSubMenu.map((item, index) => <SubMenu item={item} key={index} />)
        }
      </div>
      <ProjectsProvider>
        <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-281px)] items-center">
          {children}
        </main>
      </ProjectsProvider>
    </>
  )
}

export default QuantWorkerLayout