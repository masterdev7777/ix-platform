'use client'

import stack from "@/stack/projects";
import { createContext, useContext, useState } from "react";

const ProjectsContext = createContext<ProjectsContextTypes | undefined>(undefined); // Create the context

interface ProjectsProviderProps {
  children: React.ReactNode
}

const initialStack: Project[] = Array.isArray(stack) ? stack : [];

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(initialStack)

  const addProjects = (value: Project) => {
    setProjects((prevProjects) => [...prevProjects, value]);
  }

  const editProjects = (value: Project) => {
    setProjects((prevProjects) => prevProjects.map((project) => project.id === value.id ? value : project))
  }

  const removeProjects = (value: Project) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== value.id))
  }

  return (
    <ProjectsContext.Provider value={{ projects, addProjects, editProjects, removeProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider')
  }
  return context;
}