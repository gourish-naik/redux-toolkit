import { useState, useEffect } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const [debouncedMovie, setDebouncedMovie] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedMovie(newMovie);
    }, 300);

    // Cleanup on unmount or value change
    return () => clearTimeout(handler);
  }, [newMovie]);

  const handleAddMovie = () => {
    if (debouncedMovie) {
      dispatch(addMovie(debouncedMovie));
      setNewMovie("");
    }
  };

  return (
    <>
      <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
      <button type="button" onClick={handleAddMovie}>
        Add Movie
      </button>
    </>
  );
};
