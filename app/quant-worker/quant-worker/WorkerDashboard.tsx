'use client'

import { useState } from "react";
import { useProjects } from "@/lib/utils/context/ProjectsContext";
import Filter from "./Filter";
import Card from "./Card";
import List from "./List";

const WorkerDashboard = () => {
  const { projects } = useProjects();

  const [align, setAlign] = useState<string>('card');
  return (
    <div className="max-w-[1350px] w-full flex justify-center items-center flex-col gap-10 sm:px-6 px-4 -mx-10 py-10">
      <Filter setAlign={setAlign} align={align} />
      {
        projects.length === 0 ? <div className="text-fontColor font-semibold text-base pt-10">No Data</div> :
          align === 'card' ?
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2 w-full">
              {
                projects.map((item, index) => {
                  return (
                    <Card key={index} item={item} />
                  )
                })
              }
            </div>
            : <div className="flex flex-col gap-8 mt-4 w-full">
              {
                projects.map((item, index) => {
                  return (
                    <List key={index} item={item} />
                  )
                })
              }
            </div>
      }
      
    </div>
  )
}

export default WorkerDashboard