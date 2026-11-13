import type { Album } from "./types";

export type AlbumCardProps = {
  album: Album;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
};

export function AlbumCard({ album, isFavorited, onToggleFavorite }: AlbumCardProps) {
  return (
    <article className="album-card">
      <div className="image-placeholder album-cover">{album.cover}</div>
      <h3>{album.title}</h3>
      <p>{album.artist}</p>
      <div className="card-footer">
        <span className="tag">{album.genre}</span>
        <span>{album.year}</span>
        <button
          type="button"
          className="heart"
          aria-label={isFavorited ? `Remover ${album.title} dos favoritos` : `Favoritar ${album.title}`}
          onClick={() => onToggleFavorite(album.id)}
        >
          {isFavorited ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}