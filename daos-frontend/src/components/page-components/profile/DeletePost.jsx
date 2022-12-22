import styles from "./DeletePost.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import HTag from "../../atoms/HTag";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";

export default function DeletePost({ensemble, post, deletePost, setDeletePost}) {

    const navigate = useNavigate();

    function closeModal() {
        setDeletePost(false);
    }

    function deleteSelectedPost() {

        fetch("http://127.0.0.1:3000/ensembles/" + ensemble._id + "/post/" + post._id, {
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
        <Modal overlayClassName={styles.deletePostOverlay} className={styles.deletePost} isOpen={deletePost} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText="Delete post"/>
            <LabelTag labelType="normal" labelColor="red" labelText="Are you sure you want to delete this post?" />
            <ButtonTag buttonType="normal" buttonColor="white" buttonText="No" buttonFunction={closeModal} />
            <ButtonTag buttonType="normal" buttonColor="red" buttonText="Yes" buttonFunction={deleteSelectedPost} />
        </Modal>
    );
}