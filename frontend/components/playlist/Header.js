import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RefreshIcon from "@mui/icons-material/Refresh";
import { nextPlaylist } from "../../redux/getPlaylist";
const Header = () => {
  const dispatch = useDispatch();
  const nextSongs = useSelector((state) => state.playlist.selected);

  return (
    <div className="header">
      <div className="header_left">
        <RefreshIcon
          className="svg_icons"
          onClick={() => {
            dispatch(nextPlaylist(nextSongs));
          }}
        />{" "}
        Remix Playlist!
      </div>
    </div>
  );
};

export default Header;
