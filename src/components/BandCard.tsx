import type { Band } from "./types";

export type BandCardProps = {
  band: Band;
};

export function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <div className="image-placeholder band-image">{band.image}</div>
      <h3>{band.name}</h3>
      <p>{band.description}</p>
    </article>
  );
}