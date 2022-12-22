import styles from "./DeleteProfile.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import HTag from "../../atoms/HTag";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";

export default function DeleteProfile({setLoggedIn, deleteProfile, setDeleteProfile}) {

    const profileId = localStorage.getItem("profileId");

    const navigate = useNavigate();

    function closeModal() {
        setDeleteProfile(false);
    }

    function deleteSelectedProfile() {
        
        fetch("http://127.0.0.1:3000/ensembles/admin/" + profileId, {
            method: "Delete",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })

        fetch("http://127.0.0.1:3000/profiles/" + profileId, {
            method: "Delete",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            localStorage.clear();
            setLoggedIn(false)
            navigate("/");
        });
    }

    return (
        <Modal overlayClassName={styles.deleteProfileOverlay} className={styles.deleteProfile} isOpen={deleteProfile} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText="Delete Profile"/>
            <LabelTag labelType="normal" labelColor="red" labelText="Are you sure you want to delete your profile?" />
            <ButtonTag buttonType="normal" buttonColor="white" buttonText="No" buttonFunction={closeModal} />
            <ButtonTag buttonType="normal" buttonColor="red" buttonText="Yes" buttonFunction={deleteSelectedProfile} />
        </Modal>
    );
}