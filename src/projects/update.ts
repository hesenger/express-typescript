import { Project } from "./project";

export function updateProject(project: Project) {
  return {
    ...project,
    version: project.version + 1,
  };
}
