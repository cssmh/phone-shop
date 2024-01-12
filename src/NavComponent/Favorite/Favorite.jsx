import { useEffect, useState } from "react";
import { getLocalStorage } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const [showAllBtn, setShowAllBtn] = useState(false);
  const [matchId, setMatchId] = useState([]);
  const [displayFav, setDisplayFav] = useState(3);

  //   if (matchId.length < 1) {
  //     const noData = (
  //       <div>
  //         <p>No data found</p>
  //       </div>
  //     );
  //   }

  
  const loaderData = useLoaderData();
  useEffect(() => {
      const getLocalId = getLocalStorage();
    if (getLocalId.length > 0) {
      const matchBothLoaderLocal = loaderData.filter((phone) =>
        getLocalId.includes(parseInt(phone.id))
        );
        setMatchId(matchBothLoaderLocal);
    }
  }, [loaderData]);
  
  const handleShowFavorite = () => {
    setShowAllBtn(!showAllBtn);
    if (showAllBtn) {
      setDisplayFav(3);
    } else {
      setDisplayFav(matchId.length);
    }
  };

  const deleteAllFavorite = () => {
    localStorage.clear();
    setDisplayFav([]);
    setMatchId([]);
  };

  return (
    <div>
      {matchId.length > 0 && (
        <h1 className="text-3xl text-center py-8 bg-green-200">
          Your Favorite Phones {matchId.length}
        </h1>
      )}
      <div>
        {matchId.length < 1 && (
          <p className="flex text-xl items-center justify-center h-[75vh]">
            No item found
          </p>
        )}
      </div>
      <div
        className={`${
          matchId.length > 0
            ? "w-36 mx-auto text-center my-2 font-semibold bg-green-400 rounded-md"
            : "hidden"
        }`}
      >
        <button onClick={deleteAllFavorite}>Delete all Favorite</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-5xl mx-auto mb-5">
        {matchId.slice(0, displayFav).map((phone) => (
          <FavoriteCard key={phone.id} getCard={phone}></FavoriteCard>
        ))}
      </div>
      <div
        className={`${
          matchId.length > 3
            ? "block w-24 mx-auto text-center mb-5 font-semibold bg-green-400 rounded-md"
            : "hidden"
        }`}
      >
        <button onClick={handleShowFavorite}>
          {showAllBtn ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Favorite;
