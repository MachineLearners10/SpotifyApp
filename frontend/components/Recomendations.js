// import React, { useEffect } from "react";
// import SpotifyPlayer from "react-spotify-web-playback";
// import { useSelector, useDispatch } from "react-redux"
// import { fetchPlaylistThunk } from "../redux/playlist";

// function Player() {
//   const { user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchPlaylistThunk());
//   }, []);
//   const { playlist } = useSelector((state) => state.playlist);

//   return (
//     <div>
//         <SpotifyPlayer
//           token={user.token}
//           uris={playlist}
//         />
//     </div>
//   );
// }

// export default Player;
