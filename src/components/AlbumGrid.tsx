import type { Album } from "./types";
import { AlbumCard } from "./AlbumCard";

export type AlbumGridProps = {
  albums: Album[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
};

export function AlbumGrid({ albums, favorites, onToggleFavorite }: AlbumGridProps) {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          isFavorited={favorites.includes(album.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}