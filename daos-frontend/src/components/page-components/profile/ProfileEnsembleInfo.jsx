import styles from "./ProfileEnsembleInfo.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import DeleteEnsemble from "./DeleteEnsemble";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ProfileEnsemblePosts from "./ProfileEnsemblePosts";

export default function ProfileEnsembleInfo({ensemble}) {

    const [deleteEnsemble, setDeleteEnsemble] = useState(false);

    function showModal() {
        setDeleteEnsemble(true);
    }

    return (
        <div className={styles.profileEnsembleInfo}>
            <div className={styles.profileEnsembleInfoHeader}>
                <Link to={`/profile/ensembles/${ensemble._id}/edit`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="red" buttonText="Delete" buttonFunction={showModal} />
                <DeleteEnsemble ensemble={ensemble} deleteEnsemble={deleteEnsemble} setDeleteEnsemble={setDeleteEnsemble} />
            </div>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name}/>
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
            <ProfileEnsemblePosts ensemble={ensemble} />
        </div>
    );
}