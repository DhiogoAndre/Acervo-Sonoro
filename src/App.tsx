import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Acervo Sonoro - início">
          <span className="brand-mark" aria-hidden="true">
            ◉
          </span>
          <span>Acervo Sonoro</span>
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#albuns">Álbuns</a>
          <a href="#bandas">Bandas</a>
          <button type="button" className="favorite-count">
            1 favorito
          </button>
        </nav>
        <button type="button" className="menu-button" aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Sua coleção, seu ritmo</p>
            <h1 id="hero-title">Sua próxima descoberta começa aqui.</h1>
            <p>Álbuns para explorar. Bandas para ouvir de novo.</p>
            <a className="primary-button" href="#albuns">
              Explorar álbuns
            </a>
          </div>
          <div className="image-placeholder hero-image">Imagem de destaque</div>
        </section>

        <div className="content-layout">
          <section
            className="albums-section"
            id="albuns"
            aria-labelledby="albums-title"
          >
            <div className="section-heading">
              <h2 id="albums-title">Álbuns para descobrir</h2>
              <p>10 álbuns na coleção</p>
            </div>
            <div className="filter-list" aria-label="Filtros de gênero">
              <button type="button" className="filter active">
                Todos
              </button>
              <button type="button" className="filter">
                Grunge
              </button>
              <button type="button" className="filter">
                Rock alt.
              </button>
              <button type="button" className="filter">
                Metal alt.
              </button>
              <button type="button" className="filter">
                Shoegaze
              </button>
            </div>

            <div className="album-grid">
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 01</div>
                <h3>Superunknown</h3>
                <p>Soundgarden</p>
                <div className="card-footer">
                  <span className="tag">Grunge</span>
                  <span>1994</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Superunknown"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 02</div>
                <h3>...Like Clockwork</h3>
                <p>Queens of the Stone Age</p>
                <div className="card-footer">
                  <span className="tag">Rock alternativo</span>
                  <span>2013</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar ...Like Clockwork"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 03</div>
                <h3>White Pony</h3>
                <p>Deftones</p>
                <div className="card-footer">
                  <span className="tag">Metal alternativo</span>
                  <span>2000</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar White Pony"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 04</div>
                <h3>Badmotorfinger</h3>
                <p>Soundgarden</p>
                <div className="card-footer">
                  <span className="tag">Grunge</span>
                  <span>1991</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Badmotorfinger"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 05</div>
                <h3>Villains</h3>
                <p>Queens of the Stone Age</p>
                <div className="card-footer">
                  <span className="tag">Rock alternativo</span>
                  <span>2017</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Villains"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 06</div>
                <h3>Koi No Yokan</h3>
                <p>Deftones</p>
                <div className="card-footer">
                  <span className="tag">Metal alternativo</span>
                  <span>2012</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Koi No Yokan"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 07</div>
                <h3>Down on the Upside</h3>
                <p>Soundgarden</p>
                <div className="card-footer">
                  <span className="tag">Grunge</span>
                  <span>1996</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Down on the Upside"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 08</div>
                <h3>Diamond Eyes</h3>
                <p>Deftones</p>
                <div className="card-footer">
                  <span className="tag">Metal alternativo</span>
                  <span>2010</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Diamond Eyes"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 09</div>
                <h3>my anti-aircraft friend</h3>
                <p>Julie</p>
                <div className="card-footer">
                  <span className="tag">Shoegaze</span>
                  <span>2024</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar my anti-aircraft friend"
                  >
                    ♡
                  </button>
                </div>
              </article>
              <article className="album-card">
                <div className="image-placeholder album-cover">Capa 10</div>
                <h3>Ohms</h3>
                <p>Deftones</p>
                <div className="card-footer">
                  <span className="tag">Metal alternativo</span>
                  <span>2020</span>
                  <button
                    type="button"
                    className="heart"
                    aria-label="Favoritar Ohms"
                  >
                    ♡
                  </button>
                </div>
              </article>
            </div>
          </section>

          <section
            className="bands-section"
            id="bandas"
            aria-labelledby="bands-title"
          >
            <div className="section-heading">
              <h2 id="bands-title">Bandas em Destaque</h2>
              <p>3 artistas para conhecer</p>
            </div>
            <div className="band-list">
              <article className="band-card">
                <div className="image-placeholder band-image">
                  Foto da banda
                </div>
                <h3>Limp Bizkit</h3>
                <p>Energia e guitarras marcantes na seleção alternativa.</p>
              </article>
              <article className="band-card">
                <div className="image-placeholder band-image">
                  Foto da banda
                </div>
                <h3>Tame Impala</h3>
                <p>
                  Texturas e melodias para descobrir entre uma faixa e outra.
                </p>
              </article>
              <article className="band-card">
                <div className="image-placeholder band-image">
                  Foto da banda
                </div>
                <h3>Julie</h3>
                <p>Guitarras e atmosferas para explorar nesta seleção.</p>
              </article>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Acervo Musical Alternativo</strong>
          <p>Dhiogo André · Projeto acadêmico</p>
        </div>
        <p>Álbuns | Bandas</p>
      </footer>
    </div>
  );
}

export default App;
