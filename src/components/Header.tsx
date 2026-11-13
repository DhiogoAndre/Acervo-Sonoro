export type HeaderProps = {
  favoriteCount: number;
};

export function Header({ favoriteCount }: HeaderProps) {
  return (
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
          {favoriteCount} favorito{favoriteCount !== 1 ? "s" : ""}
        </button>
      </nav>
      <button type="button" className="menu-button" aria-label="Abrir menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}