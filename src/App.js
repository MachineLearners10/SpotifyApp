import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useDispatch } from "react-redux";
const s = new SpotifyWebApi();

function App() {
  const [{ token }] = useStateValue();
  const dispatch = useDispatch();
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token); //give token to the API

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      // s.getMyTopArtists().then((response) =>
      //   dispatch({
      //     type: "SET_TOP_ARTISTS",
      //     top_artists: response,
      //   })
      // );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        //my account
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      s.getMySavedTracks().then((response) => {
        dispatch({
          type: "SET_USER_TRACKS",
          user_tracks: response,
        });
      });
      // s.getUserPlaylists().then((playlists) => {
      //   dispatch({
      //     type: "SET_PLAYLISTS",
      //     playlists,
      //   });
      // });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Home />}
      {token && <h1>Hi guys</h1>}
    </div>
  );
}

export default App;
