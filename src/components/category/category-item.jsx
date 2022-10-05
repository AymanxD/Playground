import './category-item.styles.scss';
import PropTypes from 'prop-types';

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>

  );
}

CategoryItem.propTypes = {
  category: {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
};
