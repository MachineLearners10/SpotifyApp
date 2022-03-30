import React from "react";

const Footer = () => {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi, look this new app: ");

  const miniIcons = [
    {
      id: 1,
      link: "https://www.spotify.com/us/",
      icon: "https://podcast.tcia.org/wp-content/uploads/2020/06/Spotify_Logo_icon_White.png",
    },
    {
      id: 2,
      link: "https://github.com/MachineLearners10/SpotifyApp",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU",
    },
    {
      id: 3,
      link: `https://www.facebook.com/sharer.php?u=${postUrl}`,
      icon: "https://www.pinclipart.com/picdir/big/150-1504080_facebook-white-facebook-white-icon-png-2018-clipart.png",
    },
    {
      id: 4,
      link: `https://wa.me/?text=${postTitle} ${postUrl}`,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWvxa4GQ25xdva6Z8gHwcF1Y0QLtfMKnI9A&usqp=CAU",
    },
    {
      id: 5,
      link: `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`,
      icon: "https://www.citypng.com/public/uploads/preview/hd-white-square-outline-linkedin-in-icon-symbol-png-31623972553hxk4l9ziuw.png",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-icons">
        {miniIcons.map((miniIcon) => (
          <a
            key={miniIcon.id}
            href={miniIcon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer-icon" src={miniIcon.icon} alt="" />
          </a>
        ))}
        <p className="footer-title">Catch a Vibe</p>
      </div>
    </footer>
  );
};

export default Footer;
