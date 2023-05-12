
export interface TrackedMedia {
  id: number;
  imdbId: string;
  trackedState: TrackedState;
  userId: string;
}
export interface TrackedMediaSimple {
  id: number;
  imdbId: string;
  trackedState: TrackedState;
}

export enum TrackedState {
  PlanToWatch = 0,
  Watching = 1,
  Completed = 2,
  OnHold = 3,
  Dropped = 4,
}
