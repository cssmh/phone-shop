import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhoneCard = ({ getPhones }) => {
  const { id, rating, image, price, brand_name, phone_name } = getPhones;
  return (
    <div>
      <div className="rounded-lg shadow-xl">
        <Link to={`/phone/${id}`} state={phone_name}>
          <div className="flex justify-center border-[1px] border-r-gray-100 rounded-lg m-4">
            <img
              className="h-64 flex justify-center"
              src={image}
              alt="product image"
            />
          </div>
        </Link>
        <div className="px-5 pb-2">
          <div className="flex items-center my-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Rating: {rating}
            </span>
          </div>
          <h5 className="text-lg font-semibold bg-green-300 mt-3 mb-[9px] rounded-sm px-[1px]">
            {brand_name}
          </h5>
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold">{phone_name}</h5>
            <span className="text-lg font-bold">{price}</span>
          </div>
          <div className="w-full my-3">
            <Link to={`/phone/${id}`} state={phone_name}>
              <button
                className="block bg-gray-200 w-full select-none rounded-lg bg-blue-gray-900/10 py-[10px] px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  getPhones: PropTypes.object,
};

export default PhoneCard;
