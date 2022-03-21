// import React, { useEffect, useState } from "react";
// import { useStateValue } from "./StateProvider";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import SkipNextIcon from "@material-ui/icons/SkipNext";
// import ShuffleIcon from "@material-ui/icons/Shuffle";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
// import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
// import "./Footer.css";
// import { Grid, Slider } from "@material-ui/core";

// function Footer({ spotify }) {
//   const [{ token, item, playing }, dispatch] = useStateValue();

//   useEffect(() => {
//     spotify.getMyCurrentPlaybackState().then((r) => {
//       console.log(r);

//       dispatch({
//         type: "SET_PLAYING",
//         playing: r.is_playing,
//       });

//       dispatch({
//         type: "SET_ITEM",
//         item: r.item,
//       });
//     });
//   }, [spotify]);

//   const handlePlayPause = () => {
//     if (playing) {
//       spotify.pause();
//       dispatch({
//         type: "SET_PLAYING",
//         playing: false,
//       });
//     } else {
//       spotify.play();
//       dispatch({
//         type: "SET_PLAYING",
//         playing: true,
//       });
//     }
//   };

//   const skipNext = () => {
//     spotify.skipToNext();
//     spotify.getMyCurrentPlayingTrack().then((r) => {
//       dispatch({
//         type: "SET_ITEM",
//         item: r.item,
//       });
//       dispatch({
//         type: "SET_PLAYING",
//         playing: true,
//       });
//     });
//   };

//   const skipPrevious = () => {
//     spotify.skipToPrevious();
//     spotify.getMyCurrentPlayingTrack().then((r) => {
//       dispatch({
//         type: "SET_ITEM",
//         item: r.item,
//       });
//       dispatch({
//         type: "SET_PLAYING",
//         playing: true,
//       });
//     });
//   };

//   return (
//     <div className="footer">
//       <div className="footer__left">
//         <img
//           className="footer__albumLogo"
//           src={item?.album.images[0].url}
//           alt={item?.name}
//         />
//         {item ? (
//           <div className="footer__songInfo">
//             <h4>{item.name}</h4>
//             <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
//           </div>
//         ) : (
//           <div className="footer__songInfo">
//             <h4>No song is playing</h4>
//             <p>...</p>
//           </div>
//         )}
//       </div>

//       <div className="footer__center">
//         <ShuffleIcon className="footer__green" />
//         <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
//         {playing ? (
//           <PauseCircleOutlineIcon
//             onClick={handlePlayPause}
//             fontSize="large"
//             className="footer__icon"
//           />
//         ) : (
//           <PlayCircleOutlineIcon
//             onClick={handlePlayPause}
//             fontSize="large"
//             className="footer__icon"
//           />
//         )}
//         <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
//         <RepeatIcon className="footer__green" />
//       </div>
//       <div className="footer__right">
//         <Grid container spacing={2}>
//           <Grid item>
//             <PlaylistPlayIcon />
//           </Grid>
//           <Grid item>
//             <VolumeDownIcon />
//           </Grid>
//           <Grid item xs>
//             <Slider aria-labelledby="continuous-slider" />
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import { AppBar, Typography, makeStyles } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { ImageList } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#000a12",
    display: "flex",
    justifyContent: "space-between",
  },
  footer1: {
    marginLeft: 20,
    fontSize: 17,
  },
  footer2: {
    marginRight: 20,
  },
  image: {
    width: 5,
    height: 5,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Typography variant="h6" className={classes.footer1}>
        SpotifyApp
      </Typography>
      {/* <ImageList
      // className={classes.footer2}
      // sx={{ width: 10, height: 10 }}
      // cols={5}
      // rowHeight={16}
      >
        <ImageListItem className={classes.image}>
          <img src={require("./Images/SpotifyIcon.png")} alt="" />
          <img src={require("./Images/GithubIcon.png")} alt="" />
          <img src={require("./Images/FacebookIcon.png")} alt="" />
          <img src={require("./Images/InstagramIcon.png")} alt="" />
        </ImageListItem>
      </ImageList> */}
    </AppBar>
  );
}

export default Footer;
