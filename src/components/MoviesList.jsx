// import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state?.moviesData?.movies);

  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    if (id) {
      dispatch(removeMovie(id));
    }
  };

  return (
    <div>
      <h1>Movies List</h1>
      {movies?.map((value) => {
        return (
          <div key={value?.id}>
            <div>{value?.name}</div>
            <button onClick={() => handleRemoveMovie(value?.id)}>
              Remove it!
            </button>
          </div>
        );
      })}
    </div>
  );
};
