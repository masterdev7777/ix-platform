'use client1'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import mainMenu from "@/stack/mainMenu";

const HeaderMainMenu = () => {
  const [headerMainMenu, setHeaderMainMenu] = useState<boolean>(false);

  const pathname = usePathname();
  const root = pathname.split('/').splice(1, 1).toString();

  return (
    <div
      onMouseLeave={() => setHeaderMainMenu(false)}
      onMouseEnter={() => setHeaderMainMenu(true)}
      onClick={() => setHeaderMainMenu(!headerMainMenu)}
      className="relative group"
    >
      <div
        className={clsx("flex items-center justify-start gap-2 text-fontColor border rounded-xl px-3 h-9 text-sm font-semibold transition-colors duration-300 ease-in-out font-pavelt cursor-pointer", {
          'border-[#444]': headerMainMenu === true,
          'border-borderColor': headerMainMenu === false
        })}
      >
        <Image
          src="/avatar.svg"
          width={18}
          height={18}
          className="rounded-full w-[18px] h-[18px]"
          alt="User avatar"
        />
        <span className="text-nowrap">
          {
            root === "quant-worker"
              ? 'iX Quant Worker'
              : (root === "cloud"
                ? 'iX Cloud'
                : (root === "explorer"
                  ? 'iX Explorer'
                  : (root === "investing"
                    ? 'iX Investing'
                    : (root === "community"
                      ? 'iX Community'
                      : 'iX Platform'
                    )
                  )
                )
              )
          }
        </span>
        <HiMiniChevronUpDown className="w-[20px] h-auto text-fontColor" />
      </div>
      <div className={clsx("group-hover:opacity-100 absolute bg-black max-w-[400px] min-w-fit w-[calc(100vw-60px)] text-fontHover z-[51] left-0 transition-opacity duration-300 ease-in-out font-pavelt", {
        'invisible opacity-0': headerMainMenu === false,
        'visible opacity-100': headerMainMenu === true
      })}>
        <div className="pt-3 bg-bgColor"></div>
        <div className="grid grid-cols-1 p-3 border border-[#444] rounded-lg gap-3">
          {
            mainMenu.map((item, index) => {
              const stringLink = item.split(' ');
              stringLink.splice(0, 1);
              const link = '/' + stringLink.join('-').toLowerCase();

              return <Link href={link} key={index} className="flex w-full bg-bgColor h-[80px] border-2 border-[#1e1e1e] hover:border-[#444] rounded-[6px] p-3 transition-colors duration-300 ease-in-out">
                {item}
              </Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderMainMenu