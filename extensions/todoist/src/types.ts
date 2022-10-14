import { Task } from "@doist/todoist-api-typescript";

export enum ViewMode {
  project,
  date,
  search,
}

export interface SectionWithTasks {
  name: string;
  tasks: Task[];
}

export enum TodayGroupBy {
  default = "default",
  priority = "priority",
  project = "project",
  label = "label",
}

export enum ProjectGroupBy {
  default = "default",
  priority = "priority",
  date = "date",
  label = "label",
}
