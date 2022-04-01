import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RefreshIcon from "@mui/icons-material/Refresh";
import { nextPlaylist } from "../../redux/getPlaylist";
const Header = () => {
  const dispatch = useDispatch();
  const nextSongs = useSelector((state) => state.playlist.selected);

  return (
    <div className="header">
      <RefreshIcon
        className="svg_icons"
        onClick={() => {
          dispatch(nextPlaylist(nextSongs));
        }}
      />
    </div>
  );
};

export default Header;
