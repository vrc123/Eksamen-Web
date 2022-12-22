import styles from "./ProfilePostPreview.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import PostPreviewInstrument from "../../others/PostPreviewInstrument";
import PTag from "../../atoms/PTag";
import DeletePost from "./DeletePost";

export default function ProfilePostPreview({ensemble, post}) {

    const [deletePost, setDeletePost] = useState(false);

    function showModal() {
        setDeletePost(true);
    }
    
    return (
        <div className={styles.profilePostPreview}>
            <div className={styles.profilePostPreviewHeader}>
                <Link to={`/profile/ensembles/${ensemble._id}/posts/${post._id}/edit`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="red" buttonText="Delete" buttonFunction={showModal} />
                <DeletePost ensemble={ensemble} post={post} deletePost={deletePost} setDeletePost={setDeletePost} />
            </div>
            <PostPreviewInstrument post={post} />
            <PTag pType="normal" pColor="grey" pText={post.title} />
            <Link to={`/ensembles/${ensemble._id}/posts/${post._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show post" />
            </Link>
        </div>
    );
}