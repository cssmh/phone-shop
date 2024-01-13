import { useEffect, useState } from "react";
import {
  getLocalStorage,
  handleRemoveFromLocalStorage,
} from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";
import swal from "sweetalert";

const Favorite = () => {
  const [showAllBtn, setShowAllBtn] = useState(false);
  const [matchId, setMatchId] = useState([]);
  const [displayFav, setDisplayFav] = useState(4);

  // Match local and loadData and pass to FavoriteCard
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
  // Match local and loadData and pass to FavoriteCard end

  const handleShowFavorite = () => {
    setShowAllBtn(!showAllBtn);
    if (showAllBtn) {
      setDisplayFav(4);
    } else {
      setDisplayFav(matchId.length);
    }
  };

  //   Delete all amd set to show
  const deleteAllFavorite = () => {
    localStorage.clear();
    setDisplayFav([]);
    setMatchId([]);
    swal("Good job!", "Successfully Deleted!", "success");
  };
  //   Delete all amd set to show end

  //   Single favorite card remove from local and set to show again
  const singleRemoveHandler = (idx) => {
    handleRemoveFromLocalStorage(parseInt(idx));
    const getLocalId = getLocalStorage();
    const matchBothAgain = loaderData.filter((phone) =>
      getLocalId.includes(parseInt(phone.id))
    );
    setMatchId(matchBothAgain);
  };
  //   Single favorite card remove from local and set to show again end

  const totalPrice = matchId.reduce((preValue, currentValue) => preValue + currentValue.price, 0)

  return (
    <div>
      {matchId.length > 0 && (
        <h1 className="text-3xl text-center py-8 bg-green-300">
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
            ? "text-center"
            : "hidden"
        }`}
      >
        <button className="w-[150px] mx-auto mt-2 font-medium bg-red-400 rounded-md" onClick={deleteAllFavorite}>Delete all Favorite!!</button>
        <p className="text-base mb-1 text-green-500 font-semibold">Total Price of all Favorite phones: ${totalPrice}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-5xl mx-auto mb-5">
        {matchId.slice(0, displayFav).map((phone) => (
          <FavoriteCard
            key={phone.id}
            getCard={phone}
            singleRemoveHandler={singleRemoveHandler}
          ></FavoriteCard>
        ))}
      </div>
      <div
        className={`${
          matchId.length > 4
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
