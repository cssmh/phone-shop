import { useEffect, useState } from "react";
import { getLocalStorage } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const [showAllBtn, setShowAllBtn] = useState(false);
  const [matchId, setMatchId] = useState([]);
  const [showFav, setShowFav] = useState(3);

  const getLocalId = getLocalStorage();

  const loaderData = useLoaderData();
  useEffect(() => {
    if (getLocalId.length > 0) {
      const matchBothLoaderLocal = loaderData.filter((phone) =>
        getLocalId.includes(parseInt(phone.id))
      );
      setMatchId(matchBothLoaderLocal);
    }
  }, []);

  const handleShowFavorite = () => {
    setShowAllBtn(!showAllBtn)
    if(showAllBtn){
        setShowFav(3)
    }else{
        setShowFav(matchId.length)
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-center py-8 bg-green-200">
        Your Favorite Phones
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-5xl mx-auto mb-5">
        {matchId.slice(0, showFav).map((phone) => (
          <FavoriteCard key={phone.id} getCard={phone}></FavoriteCard>
        ))}
      </div>
      <div className="w-24 mx-auto text-center mb-5 font-semibold bg-green-400 rounded-md">
        <button onClick={handleShowFavorite}>{showAllBtn ? "Show Less" : "Show All"}</button>
      </div>
    </div>
  );
};

export default Favorite;
