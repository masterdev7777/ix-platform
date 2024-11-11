'use client'

import { useContext, useEffect, useRef, useState } from "react"
import { BiRefresh } from "react-icons/bi"
import { FaCheck, FaCopy } from "react-icons/fa6"
import { useProjects } from "@/lib/utils/context/ProjectsContext"
import { useRouter } from "next/navigation"

const CreateWorkerModal = ({ setCreateWorkerModal, marketType }: CreateWorkerModalProps) => {
  const { projects, addProjects } = useProjects();

  const modalRef = useRef<HTMLDivElement>(null);

  const [newProjectName, setNewProjectName] = useState<string>('');
  const [newApiKey, setNewApiKey] = useState<string>('');
  const [copyStatus, setCopyStatus] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = (e: any) => {
    setNewProjectName(e.target.value);
  }

  const generateSecureKey = () => {
    const uuid = crypto.randomUUID();
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);

    setNewApiKey(`${uuid.slice(0, 8)}${timestamp}${randomPart}`.toUpperCase());
  }

  const copyApi = async () => {
    await navigator.clipboard.writeText(newApiKey)
      .then(() => setCopyStatus(true))
      .catch((error) => console.log(error))
  }

  const handleClickCreate = () => {
    const validPattern = /[\'\';\\]/
    setShake(false)
    if (validPattern.test(newProjectName)) {
      setShake(true);
      console.log("Forbidden characters detected in project name.");
      return
    }
    if (newProjectName.length < 3) {
      setShake(true);
      console.log("Project name must be at least 3 characters long.");
      return
    }
    if (newProjectName.length > 20) {
      setShake(true);
      console.log("Project name must be less than 20 characters long.");
      return
    }
    if (projects.find((project) => project.name === newProjectName)) {
      setShake(true);
      console.log("Project name exists already.");
      return
    }

    const newProject = {
      id: (projects.length + 1).toString(),
      name: newProjectName,
      created: new Date().toLocaleString(),
      marketType: marketType,
      apiKey: newApiKey,
      status: 'running'
    }

    setCreateWorkerModal(false);

    addProjects(newProject)

    router.push('/quant-worker/quant-worker')
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    generateSecureKey()

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
        <div className="grid grid-cols-4 gap-3 items-center ">
          <label className="text-lg text-fontColor text-right" htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={newProjectName}
            onChange={(e) => handleChange(e)}
            placeholder="Enter Project Name..."
            className={`${shake ? 'shake' : ''} col-span-3 bg-black border border-borderColor rounded-lg h-10 text-base px-5 text-fontColor placeholder:text-fontColor outline-none`}
          />
        </div>
        <div className="grid grid-cols-4 gap-3 items-center ">
          <label className="text-lg text-fontColor text-right" htmlFor="apiKey">API Key:</label>
          <div className="flex bg-black border border-borderColor rounded-lg h-10 col-span-3 justify-between gap-1 px-5 pr-2">
            <input
              type="text"
              name="apiKey"
              value={newApiKey}
              disabled
              className="rounded-lg h-10 text-base text-fontColor outline-none bg-transparent grow"
            />
            <button
              type="button"
              onClick={generateSecureKey}
              className="text-fontColor hover:text-fontHover"
            >
              <BiRefresh className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={copyApi}
              className="text-fontColor hover:text-fontHover"
            >
              {
                !copyStatus ?
                  <FaCopy className="w-5 h-5" /> :
                  <FaCheck className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10 mt-10">
          <button
            type="button"
            onClick={() => setCreateWorkerModal(false)}
            className="bg-transparent hover:bg-bgHover text-fontHover text-lg border border-borderColor h-10 w-32 rounded-lg transition-colors duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleClickCreate}
            className="bg-fontHover text-bgColor hover:opacity-60 text-lg border border-borderColor h-10 w-32 rounded-lg transition-opacity duration-300 ease-in-out"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateWorkerModal