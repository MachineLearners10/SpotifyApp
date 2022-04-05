import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RefreshIcon from "@mui/icons-material/Refresh";
import { nextPlaylist } from "../../redux/getPlaylist";
import AddIcon from "@mui/icons-material/Add";
import { dispatchAddPlaylist } from "../../redux/playlist";
import CheckIcon from "@mui/icons-material/Check";
import { selectSong } from "../../redux/playlist";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const Header = ({ songs, user }) => {
  const dispatch = useDispatch();
  const nextSongs = useSelector((state) => state.playlist.selected);
  const playlistAdded = useSelector((state) => state.playlist.added);

  return (
    <div className="header">
      <div className="header_left">
        <RefreshIcon
          className="svg_icons"
          onClick={() => {
            dispatch(nextPlaylist(nextSongs));
            dispatch(selectSong([]));
          }}
        />{" "}
        Select <AutoAwesomeIcon className="svg_icons1" /> to remix playlist!
      </div>
    </div>
  );
};

export default Header;
