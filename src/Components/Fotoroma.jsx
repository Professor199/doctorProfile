import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Fotoroma = () => {
  const images = [
    {
      original: "./profile.png",
      thumbnail: "./profile.png",
    },
    {
      original: "https://www.shutterstock.com/image-photo/diverse-male-female-medical-professionals-600nw-2557673895.jpg",
      thumbnail: "https://www.shutterstock.com/image-photo/diverse-male-female-medical-professionals-600nw-2557673895.jpg",
    },
    {
      original: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
      thumbnail: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      original: "https://img.freepik.com/free-photo/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support_482257-35871.jpg",
      thumbnail: "https://img.freepik.com/free-photo/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support_482257-35871.jpg",
    },
    // {
    //   original: "https://img.freepik.com/free-photo/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support_482257-35871.jpg",
    //   thumbnail: "https://img.freepik.com/free-photo/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support_482257-35871.jpg",
    // },
  ];
  return (
    <div className="imagegallery" style={{width:"100%"}}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}
        slideInterval={3000}
        showNav={false}
        showThumbnails={false}
      />
    </div>
  );
};

export default Fotoroma;
