import type { FoodCategory } from '../../../../../types/home'

interface CategoryStripProps {
  categories: FoodCategory[]
  activeCategory: string
  onSelect: (categoryId: string) => void
}

function CategoryStrip({ categories, activeCategory, onSelect }: CategoryStripProps) {
  return (
    <div className="category-strip">
      {categories.map((category) => (
        <button
          aria-pressed={activeCategory === category.id}
          className={`category-item${activeCategory === category.id ? ' is-active' : ''}`}
          key={category.id}
          onClick={() => onSelect(activeCategory === category.id ? '' : category.id)}
          type="button"
        >
          <span className="category-icon" style={{ backgroundColor: category.color }}>
            {category.emoji}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryStrip
