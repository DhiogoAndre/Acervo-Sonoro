# Acervo Sonoro

O **Acervo Sonoro** é uma página única dedicada à música alternativa. A interface apresenta um catálogo de álbuns e uma seção de bandas em destaque, com foco em uma organização simples, responsiva e inspirada em um acervo musical.

**Etapa atual:** Fase 2 — construção da página com React, TypeScript, JSX e CSS.

## Conteúdo da página

| Listagem | Quantidade | Informações exibidas |
| --- | ---: | --- |
| Álbuns para descobrir | 10 álbuns | Capa, título, banda, gênero, ano e favorito |
| Bandas em destaque | 3 bandas | Foto, nome e descrição |

A página também possui cabeçalho com navegação, área de destaque, filtros visuais de gênero e rodapé.

## Responsividade

O layout foi desenvolvido com abordagem **mobile first**, usando CSS e media queries:

| Tela | Organização |
| --- | --- |
| Mobile — até 767 px | Menu recolhido, álbuns em uma coluna e bandas abaixo do catálogo |
| Tablet — a partir de 768 px | Navegação visível, álbuns em duas colunas e bandas lado a lado |
| Desktop — a partir de 1024 px | Álbuns em três colunas e bandas em uma barra lateral |

## Wireframes

- [Wireframe mobile](docs/wireframe-mobile.png)
- [Wireframe tablet](docs/wireframe-tablet.png)
- [Wireframe desktop](docs/wireframe-desktop.png)

## Implementação da Fase 2

Nesta fase:

- toda a página foi construída no [`src/App.tsx`](src/App.tsx);
- os cards das duas listagens foram escritos diretamente no JSX;
- foram usados elementos semânticos, como `header`, `main`, `section` e `footer`;
- os estilos estão em [`src/App.css`](src/App.css);
- as cores, espaçamentos e tipografia foram organizados com variáveis CSS em `:root`;
- a responsividade utiliza as media queries de `768px` e `1024px`;
- os dados e os controles de favoritos e filtros são representações estáticas.

A componentização, os vetores de dados e a interação com `useState` serão desenvolvidos na Fase 3. O carregamento de dados externos e o Tailwind CSS serão incluídos somente na Fase 4.

## Tecnologias

- React
- TypeScript
- Vite
- CSS

## Como executar

Pré-requisito: Node.js instalado.

```bash
npm install
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

Para gerar a versão de produção:

```bash
npm run build
```

## Etapas do desenvolvimento

| Fase | Objetivo | Branch |
| --- | --- | --- |
| 1 — Wireframe | Planejar as versões mobile, tablet e desktop | `fase-1-wireframe` |
| 2 — Página | Construir a interface no `App.tsx` usando JSX e CSS | `fase-2-pagina` |
| 3 — Componentes | Criar componentes, tipos, vetores de dados e interação com estado | `fase-3-componentes` |
| 4 — JSON e Tailwind | Carregar a listagem principal com `fetch` e migrar os estilos para Tailwind CSS | `fase-4-json` |

## Autor

Dhiogo André.
