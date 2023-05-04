
export interface TrackedMedia {
  id: number;
  title: string;
  year: number;
  imdbId: string;
  trackedState: TrackedState;
  userId: string;
  watchLinks :string[];
}

export enum TrackedState {
  PlanToWatch = 'PlanToWatch',
  Watching = 'Watching',
  Completed = 'Completed',
  OnHold = 'OnHold',
  Dropped = 'Dropped',
}
