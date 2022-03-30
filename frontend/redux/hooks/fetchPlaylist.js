import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../user";
import { getGenres } from "../getGenres";
import { getPlaylist } from "../getPlaylist";

export default function fetchPlaylist() {
  const genresList = useSelector((state) => state.getGenres);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getGenres());
    dispatch(getPlaylist(genresList));
  }, []);

  return { genresList, user }
}
