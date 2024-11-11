'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const SubMenu = ({ item }: any) => {
  const pathname = usePathname();

  const root = pathname.split('/').splice(1, 1)
  const endPath = pathname.split('/').splice(2, 1)

  const rootString = root.toString();
  const endPathString = endPath.toString().replaceAll('-', ' ');

  return (
    <>
      {
        item.status === 'open' ?
          <Link
            href={`/${rootString}/${item.name.toLowerCase().replaceAll(' ', '-')}`}
            className={`${endPathString === item.name.toLowerCase() ? 'border-fontHover text-fontHover' : 'border-transparent text-fontColor'} 
              border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out whitespace-nowrap`}
          >
            <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">
              {item.name}
            </span>
          </Link>
          :
          <button
            type="button"
            disabled
            className={`h-[46px] flex text-fontColor items-center justify-center transition-colors duration-300 ease-in-out opacity-40`}
          >
            <span className="px-3 leading-[14px] py-2 rounded-md ">
              {item.name}
            </span>
          </button>
      }
    </>
  )
}
export default SubMenu