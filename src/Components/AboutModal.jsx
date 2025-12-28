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
const AboutModal = ({ openAboutModal, setOpenAboutModal }) => {
  return (
    <Modal
      onClose={() => setOpenAboutModal(false)}
      onOpen={() => setOpenAboutModal(true)}
      open={openAboutModal}
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
        About Us
      </ModalHeader>
      <ModalContent
        style={{
          background:
            "linear-gradient(14deg, rgba(145, 144, 182, 0.8), rgba(113, 113, 168, 0.8), rgba(80, 120, 128, 0.8))",
          color: "white",
        }}
      >
        <ModalDescription style={{fontSize:"18px"}}>
          <p>
            At Dr. Mandloi’s Remedies, we offer a refined and clinically driven
            approach to homeopathic medicine, combining time-honored therapeutic
            principles with modern standards of patient care. Our practice is
            dedicated to delivering personalized, safe, and evidence-informed
            treatment within a professional healthcare setting designed for
            comfort, privacy, and trust. We follow a comprehensive consultation
            process that considers each patient’s medical history, lifestyle,
            and overall health profile. This allows us to develop individualized
            treatment plans that aim for long-term wellness rather than
            short-term symptom control. Homeopathy supports the body’s inherent
            healing capacity, making it an effective and well-tolerated option
            across all age groups. Our clinical expertise extends to the
            management of chronic and complex conditions, including digestive
            disorders, dermatological concerns, respiratory conditions, hormonal
            imbalances, stress-related illnesses, and immune system support.
            Every prescription is carefully selected to ensure consistency,
            precision, and continuity of care. Clinical excellence, ethical
            practice, and patient confidentiality are fundamental to our
            philosophy. At Dr. Mandloi’s Remedies, we are committed to providing
            a healthcare experience defined by professionalism, transparency,
            and measurable improvement—guiding our patients toward sustained
            health through natural and scientifically guided homeopathic care.
          </p>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};

export default AboutModal;
