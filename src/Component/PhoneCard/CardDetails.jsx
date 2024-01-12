import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
  console.log(matchBoth);
  const { image, brand_name, phone_name } = matchBoth;

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center py-8 bg-green-200">
          Phone details
        </h1>
      </div>
      <div className="rounded-lg shadow-xl flex justify-center w-3/5 mx-auto items-center py-2 m-6 gap-4">
        <img className="h-64 pb-5" src={image} alt="product image" />
        <div>
          <h5 className="text-lg font-semibold bg-green-400 rounded-sm px-[1px]">
            {brand_name}
          </h5>
          <h5 className="text-xl font-semibold">{phone_name}</h5>
          <div>
            <button className="btn bg-red-200 font-semibold my-2">
              Add To Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
