import React, { useContext } from "react";
import { Context } from "../../App.Reduser";

const MiniCard = ({ item }) => {
  const { dispatch } = useContext(Context);

  return (
    <div>
      {item.type === "tv-series" && (
        <div className="h-0 ">
          <div className="bg-red-500 text-white rounded w-5 h-5 text-sm text-center relative top-12 right-2">
            TV
          </div>
        </div>
      )}
      <div
        onClick={() => {
          dispatch({
            type: "setIdCurrentVideo",
            payload: item.id,
          });
          dispatch({
            type: "setIdCurrentPerson",
            payload: null,
          });
          dispatch({
            type: "setShowFavorites",
            payload: false,
          });
        }}
        className={`bg-cover w-48 h-72 bg-white flex items-end justify-end rounded-xl hover:outline hover:outline-offset-4 hover:outline-4 hover:outline-white mb-3 cursor-pointer`}
        style={{
          backgroundImage: `url(${
            item.poster?.previewUrl || require("../../img/img_broken.svg")
          })`,
        }}
      >
        <div className="w-9 h-7 bg-black/50  rounded-br-xl rounded-tl-lg text-centerё">
          <span className="text-white text-base font-semibold ">
            {item.rating.kp.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="text-xl text-white">{item.name}</div>
      <div className="text-base text-white">{item.year}</div>
    </div>
  );
};

export default MiniCard;
