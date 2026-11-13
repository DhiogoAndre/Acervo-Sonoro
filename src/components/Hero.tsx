export function Hero() {
  return (
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
  );
}