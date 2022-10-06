import './directory.styles.scss';
import PropTypes from 'prop-types';
import CategoryItem from '../category/category-item';

export default function Directory({ categories }) {
  return (
    <div className=".directory-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}

Directory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired
};
