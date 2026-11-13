export type Filter = "Todos" | "Grunge" | "Rock alternativo" | "Metal alternativo" | "Shoegaze";

export type FilterListProps = {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
};

export function FilterList({ activeFilter, onFilterChange }: FilterListProps) {
  const filters: Filter[] = ["Todos", "Grunge", "Rock alternativo", "Metal alternativo", "Shoegaze"];

  return (
    <div className="filter-list" aria-label="Filtros de gênero">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`filter ${activeFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}