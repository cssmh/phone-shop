import PropTypes from "prop-types";
const FavoriteCard = ({ getCard }) => {
  const { image, brand_name, phone_name, price } = getCard;

  return (
    <div className="text-center rounded-md border-2 border-gray-300 py-5">
      <img className="w-1/5 md:w-2/5 mx-auto" src={image} alt="product image" />
      <h5 className="text-green-500">{brand_name}</h5>
      <div>
        <p className="font-semibold">Price: ${price}</p>
        <h5 className="text-xl font-semibold">{phone_name}</h5>
        <button className="py-1 px-2 mt-1 font-semibold rounded-lg bg-green-400">Remove from favorite</button>
      </div>
    </div>
  );
};

FavoriteCard.propTypes = {
  getCard: PropTypes.object,
};

export default FavoriteCard;
