import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import profile from '../../src/assets/profile.png'
import ceremony from '../../src/assets/ceremony.png'

const Fotoroma = () => {
  const images = [
    {
      original: profile,
      thumbnail: "./profile.png",
    },
    {
      original: ceremony,
      thumbnail: "./ceremony.png",
    },
    {
      original: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
      thumbnail: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      original: "https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1626980740924IMG_20210723_000136.jpg",
      thumbnail: "https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1626980740924IMG_20210723_000136.jpg",
    }
  ];
  return (
    <div className="imagegallery" style={{width:"100%"}}>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={false}
        autoPlay={true}
        slideInterval={5000}
        showNav={false}
        showThumbnails={false}
      />
    </div>
  );
};

export default Fotoroma;
