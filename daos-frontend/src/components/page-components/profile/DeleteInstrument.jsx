import styles from "./DeleteInstrument.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import HTag from "../../atoms/HTag";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";

export default function DeleteInstrument({instrument, deleteInstrument, setDeleteInstrument}) {

    const profileId = localStorage.getItem("profileId");

    const navigate = useNavigate();

    function closeModal() {
        setDeleteInstrument(false);
    }

    function deleteSelectedInstrument() {

        fetch("http://127.0.0.1:3000/profiles/" + profileId + "/instrument/" + instrument._id, {
            method: "Delete",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(0);
        });
    }

    return (
        <Modal overlayClassName={styles.deleteInstrumentOverlay} className={styles.deleteInstrument} isOpen={deleteInstrument} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText="Delete instrument"/>
            <LabelTag labelType="normal" labelColor="red" labelText="Are you sure you want to delete this instrument?" />
            <ButtonTag buttonType="normal" buttonColor="white" buttonText="No" buttonFunction={closeModal} />
            <ButtonTag buttonType="normal" buttonColor="red" buttonText="Yes" buttonFunction={deleteSelectedInstrument} />
        </Modal>
    );
}