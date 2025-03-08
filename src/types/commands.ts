export interface CommandOutput {
  title?: string;
  content?: string;
  clear?: boolean;
}

export interface CommandType {
  name: string;
  description: string;
  hidden?: boolean;
  execute: () => CommandOutput;
}

export interface HistoryItem {
  command: string;
  output?: CommandOutput;
  error?: boolean;
  isNew?: boolean;
} 