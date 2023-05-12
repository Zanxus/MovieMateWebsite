import {TrackedState} from "./TrackedMedia";

export interface TrackedListMedia {
  id: number;
  title: string;
  year: string;
  imdbId: string;
  trackedState: TrackedState;
  userId: string;
  watchLinks :string[];
}
