import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductRating() {
  return (
    <>
      <div className="infos__avaliation">
        <div className="avaliation__stars">
          <FontAwesomeIcon icon="fa-star" />
          <FontAwesomeIcon icon="fa-star" />
          <FontAwesomeIcon icon="fa-star" />
          <FontAwesomeIcon icon="fa-star" />
          <FontAwesomeIcon icon="fa-star" />
        </div>
        <span>Seja o primeiro !</span>
      </div>
    </>
  );
}

export default ProductRating;
