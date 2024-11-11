'use client'

import { useEffect, useRef } from "react"
import { useProjects } from "@/lib/utils/context/ProjectsContext"

const RemoveWorkerModal = ({ setRemoveWorkerModal, item }: RemoveWorkerModalProps) => {
  const { removeProjects } = useProjects();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickDelete = () => {
    setRemoveWorkerModal(false);
    removeProjects(item)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => { document.body.style.overflow = 'auto' }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        modalRef.current.style.padding = '50px';
        modalRef.current.style.transition = 'padding 0.1s ease'

        setTimeout(() => {
          if (modalRef.current) {
            modalRef.current.style.padding = '40px';
          }
        }, 150);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="fixed w-screen h-screen flex justify-center items-center bg-black bg-opacity-70 z-[50] top-0 left-0 transition-opacity duration-300 ease-in-out">
      <div ref={modalRef} className="border-2 border-borderColor bg-bgColor rounded-2xl py-10 px-10 flex flex-col gap-5 transition-all duration-150">
        <p>Are you sure to delete this worker?</p>
        <div className="flex justify-center gap-10 mt-10">
          <button
            type="button"
            onClick={() => setRemoveWorkerModal(false)}
            className="bg-transparent hover:bg-bgHover text-fontHover text-lg border border-borderColor h-10 w-32 rounded-lg transition-colors duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleClickDelete}
            className="bg-fontHover text-bgColor hover:opacity-60 text-lg border border-borderColor h-10 w-32 rounded-lg transition-opacity duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default RemoveWorkerModal