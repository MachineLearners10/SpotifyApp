import React from "react";

const Footer = () => {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi, look this new app: ");

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.spotify.com/us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icon"
            src={
              "https://podcast.tcia.org/wp-content/uploads/2020/06/Spotify_Logo_icon_White.png"
            }
            alt=""
          />
        </a>
        <a
          href="https://github.com/MachineLearners10/SpotifyApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icon"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU"
            }
            alt=""
          />
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=${postUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icon"
            src={
              "https://www.pinclipart.com/picdir/big/150-1504080_facebook-white-facebook-white-icon-png-2018-clipart.png"
            }
            alt=""
          />
        </a>
        <a
          href={`https://wa.me/?text=${postTitle} ${postUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icon"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWvxa4GQ25xdva6Z8gHwcF1Y0QLtfMKnI9A&usqp=CAU"
            }
            alt=""
          />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icon"
            src={
              "https://www.citypng.com/public/uploads/preview/hd-white-square-outline-linkedin-in-icon-symbol-png-31623972553hxk4l9ziuw.png"
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
