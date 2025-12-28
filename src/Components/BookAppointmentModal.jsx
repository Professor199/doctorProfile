import React from "react";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";
import appointment from '../../src/assets/appointment.PNG'
const BookAppointmentModal = ({ openBookModal, setOpenBookModal }) => {
  const phoneNumber = "919770910522"; // country code ke saath
  const message = `Hello, I would like to book an appointment at Dr. Mandloi’s Remedies. Please share the available consultation slots.`;

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <Modal
      onClose={() => setOpenBookModal(false)}
      onOpen={() => setOpenBookModal(true)}
      open={openBookModal}
      closeIcon
      size="mini"
      style={{
        height: "50%",
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        left: 450,
        top: 170,
        background:
          "linear-gradient(14deg, rgba(145, 144, 182, 0.8), rgba(113, 113, 168, 0.8), rgba(80, 120, 128, 0.8))",
      }}
    >
      <ModalHeader
        style={{
          background:
            "linear-gradient(14deg, rgba(145, 144, 182, 0.8), rgba(113, 113, 168, 0.8), rgba(80, 120, 128, 0.8))",
          color: "white",
        }}
      >
        Book Appointment
      </ModalHeader>
      <ModalContent
        image
        style={{
          background:
            "linear-gradient(14deg, rgba(145, 144, 182, 0.8), rgba(113, 113, 168, 0.8), rgba(80, 120, 128, 0.8))",
          color: "white",
        }}
      >
        <Image
          size="medium"
          src={appointment}
          wrapped
        />
        <ModalDescription>
          <Header style={{ color: "White" }}>
            To Book Appointment with Doctor Komal Mandloi, Please click on Book
            appointment button below.
          </Header>
          <button
            onClick={handleWhatsApp}
            style={{
              padding: "12px 24px",
              backgroundColor: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Book Appointment on WhatsApp
          </button>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};

export default BookAppointmentModal;
