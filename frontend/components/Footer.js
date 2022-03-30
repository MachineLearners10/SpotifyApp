import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.spotify.com/us/">
          <img
            className="footer-icon"
            src={
              "https://1000logos.net/wp-content/uploads/2017/08/Spotify-emblem.jpg"
            }
            alt=""
          />
        </a>
        <a href="https://github.com/MachineLearners10/SpotifyApp">
          <img
            className="footer-icon"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU"
            }
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/">
          <img
            className="footer-icon"
            src={
              "https://www.pinclipart.com/picdir/big/150-1504080_facebook-white-facebook-white-icon-png-2018-clipart.png"
            }
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            className="footer-icon"
            src={
              "https://www.citypng.com/public/uploads/preview/-51609193615decnmgwyz7.png"
            }
            alt=""
          />
        </a>
        <div className="footer-title">Catch A Vibe</div>
      </div>
    </footer>
  );
};

export default Footer;
