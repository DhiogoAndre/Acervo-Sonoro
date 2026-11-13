import type { Band } from "./types";
import { BandCard } from "./BandCard";

export type BandListProps = {
  bands: Band[];
};

export function BandList({ bands }: BandListProps) {
  return (
    <div className="band-list">
      {bands.map((band) => (
        <BandCard key={band.id} band={band} />
      ))}
    </div>
  );
}