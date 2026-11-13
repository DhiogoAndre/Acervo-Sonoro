import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SectionHeading } from "./components/SectionHeading";
import { FilterList, type Filter } from "./components/FilterList";
import { AlbumGrid } from "./components/AlbumGrid";
import { BandList } from "./components/BandList";
import { Footer } from "./components/Footer";
import { ALBUMS, BANDS } from "./components/data";

function App() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredAlbums =
    activeFilter === "Todos"
      ? ALBUMS
      : ALBUMS.filter((album) => album.genre === activeFilter);

  return (
    <div className="app-shell">
      <Header favoriteCount={favorites.length} />

      <main>
        <Hero />

        <div className="content-layout">
          <section
            className="albums-section"
            id="albuns"
            aria-labelledby="albums-title"
          >
            <SectionHeading
              title="Álbuns para descobrir"
              subtitle={`${filteredAlbums.length} álbuns na coleção`}
            />
            <FilterList
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <AlbumGrid
              albums={filteredAlbums}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </section>

          <section
            className="bands-section"
            id="bandas"
            aria-labelledby="bands-title"
          >
            <SectionHeading
              title="Bandas em Destaque"
              subtitle="3 artistas para conhecer"
            />
            <BandList bands={BANDS} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
