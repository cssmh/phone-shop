import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { handleLocalStorage } from "../../Utility/LocalStorage";

const CardDetails = () => {
  const [matchBoth, setMatchBoth] = useState([]);

  const paramsId = useParams();
  const intParamId = parseInt(paramsId.phoneId);

  const allDataFromLoader = useLoaderData();

  useEffect(() => {
    if (allDataFromLoader.length > 0) {
      const matchBoth = allDataFromLoader.find(
        (phone) => parseInt(phone.id) === intParamId
      );
      setMatchBoth(matchBoth);
    }
  }, [allDataFromLoader, intParamId]);
  const { id, image, brand_name, phone_name } = matchBoth;

  const intIdToSendLocalStorage = parseInt(id)
  const handleFavoriteButton = () => {
    handleLocalStorage(intIdToSendLocalStorage)
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center py-8 bg-green-200">
          Phone details
        </h1>
      </div>
      <div className="rounded-lg shadow-xl flex flex-col md:flex-row justify-center lg:w-3/5 mx-auto items-center py-2 m-6 md:gap-4">
        <img className="md:h-64 md:pb-5" src={image} alt="product image" />
        <div>
          <h5 className="text-3xl md:text-lg font-semibold text-green-400 rounded-sm px-[1px]">
            {brand_name}
          </h5>
          <h5 className="text-4xl md:text-xl font-semibold">{phone_name}</h5>
          <div>
            <button onClick={handleFavoriteButton} className="btn bg-green-300 font-semibold my-5 md:my-2">
              Add To Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
