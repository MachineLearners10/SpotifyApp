import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../user";
import { getGenres } from "../getGenres";

export default function fetchPlaylist() {
  const genresList = useSelector((state) => state.getGenres);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getGenres());
    // dispatch(getPlaylist(genresList));
  }, []);
  console.log("fetchPlaylist genresList", genresList)
  return { genresList, user }
}
