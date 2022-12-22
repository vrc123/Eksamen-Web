import styles from "./DeleteEnsemble.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import HTag from "../../atoms/HTag";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";

export default function DeleteEnsemble({ensemble, deleteEnsemble, setDeleteEnsemble}) {

    const navigate = useNavigate();

    function closeModal() {
        setDeleteEnsemble(false);
    }

    function deleteSelectedEnsemble() {

        fetch("http://127.0.0.1:3000/ensembles/" + ensemble._id, {
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
        <Modal overlayClassName={styles.deleteEnsembleOverlay} className={styles.deleteEnsemble} isOpen={deleteEnsemble} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText="Delete ensemble"/>
            <LabelTag labelType="normal" labelColor="red" labelText="Are you sure you want to delete this ensemble?" />
            <ButtonTag buttonType="normal" buttonColor="white" buttonText="No" buttonFunction={closeModal} />
            <ButtonTag buttonType="normal" buttonColor="red" buttonText="Yes" buttonFunction={deleteSelectedEnsemble} />
        </Modal>
    );
}