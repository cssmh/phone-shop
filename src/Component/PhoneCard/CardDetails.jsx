import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const [matchBoth, setMatchBoth] = useState([])

    const paramsId = useParams()
    const intParamId = parseInt(paramsId.phoneId);

    const allDataFromLoader = useLoaderData()

    useEffect(()=> {
        if(allDataFromLoader.length > 0){
            const matchBoth = allDataFromLoader.find(phone => parseInt(phone.id) === intParamId)
            setMatchBoth(matchBoth);
        }
    },[allDataFromLoader, intParamId])
    console.log(matchBoth);
    const { id, image, price, brand_name, phone_name } = matchBoth;


  return (
    <div>
      <div>
        <h1 className="text-3xl text-center py-8 bg-green-200">
          Phone details
        </h1>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default CardDetails;
