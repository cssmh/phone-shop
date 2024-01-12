import { useEffect, useState } from "react";
import { getLocalStorage } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
    const [matchId, setMatchId] = useState([])

    const getLocalId = getLocalStorage()

    const loaderData = useLoaderData()
    useEffect(()=> {
        if(getLocalId.length > 0){
            const matchBothLoaderLocal = loaderData.filter(phone => getLocalId.includes(parseInt(phone.id)))
            setMatchId(matchBothLoaderLocal);
        }
    },[])

  return (
    <div>
        <h1 className="text-3xl text-center py-8 bg-green-200">
          Your Favorite Phones
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-5xl mx-auto mb-5">
        {
            matchId.map(phone => <FavoriteCard key={phone.id} getCard={phone}></FavoriteCard>)
        }
      </div>
    </div>
  );
};

export default Favorite;
