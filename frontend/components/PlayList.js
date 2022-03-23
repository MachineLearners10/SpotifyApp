import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTopTracks,
  fetchRecommendations,
  fetchCategories,
} from "../redux/user";
import { Link } from "react-router-dom";

function PlayList() {
  const topTracks = useSelector((state) => state.userReducer);
  const recommendations = useSelector((state) => state.userReducer);
  const categories = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopTracks());
  }, []);

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="container">
      <div>{/* <img src={require("../../public/calmImage.jpeg")} /> */}</div>
      <div>
        <div>
          <h1>Playlist</h1>

          <p>List of music</p>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
