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
import profileImg from '../../src/assets/dp.png'
const ContactModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      onClose={() => setOpenModal(false)}
      onOpen={() => setOpenModal(true)}
      open={openModal}
      closeIcon
      size="mini"
      className="all-modal"
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
            color:"white"
        }}
      >
        Contact
      </ModalHeader>
      <ModalContent image  style={{
          background:
            "linear-gradient(14deg, rgba(145, 144, 182, 0.8), rgba(113, 113, 168, 0.8), rgba(80, 120, 128, 0.8))",
             color:"white"
        }}>
        <Image
          size="medium"
          src={profileImg}
          wrapped
          style={{height:"30%"}}
        />
        <ModalDescription>
          <Header style={{color:"White"}}>Dr. Komal Mandloi (MD Medicine (Homoeopathic))</Header>
          <p>
           You can contact me at 
          </p>
          <p>📞 +91 9685623635</p>
          <p>📧 komalmandloi0701@gmail.com</p>
          <p>🕒 Mon – Sat: 7 PM – 10 PM</p>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
