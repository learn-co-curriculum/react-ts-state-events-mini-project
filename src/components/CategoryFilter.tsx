interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory(category: string): void;
}
function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : undefined}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
