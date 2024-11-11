interface Project {
  id: string;
  name: string;
  created: string;
  marketType: string;
  apiKey: string;
  status: string;
}

interface ProjectsContextTypes {
  projects: Project[];
  addProjects: (value: Project) => void;
  editProjects: (value: Project) => void;
  removeProjects: (value: Project) => void;
}

interface WorkerContextTypes {
  workerDashboard: boolean;
  setWorkerDashboard: (value: boolean) => void
}

interface CreateWorkerModalProps {
  setCreateWorkerModal: (value: boolean) => void;
  marketType: string;
}
interface EditWorkerModalProps {
  setEditWorkerModal: (value: boolean) => void;
  item: Project;
}
interface RemoveWorkerModalProps {
  setRemoveWorkerModal: (value: boolean) => void;
  item: Project
}