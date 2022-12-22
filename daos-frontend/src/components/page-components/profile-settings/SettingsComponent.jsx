import styles from "./SettingsComponent.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import DeleteProfile from "./DeleteProfile";

export default function SettingsComponent({setLoggedIn}) {

    const [deleteProfile, setDeleteProfile] = useState(false);

    function showModal() {
        setDeleteProfile(true);
    }

    return (
        <div className={styles.settingsComponent}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Password" />
                <Link to="/profile/settings/password">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Change password" />
                </Link>
            </div>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Newsletters" />
                <Link to="/profile/settings/newsletter">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Newsletter settings" />
                </Link>
            </div>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Profile" />
                <ButtonTag buttonType="normal" buttonColor="red" buttonText="Delete profile" buttonFunction={showModal} />
                <DeleteProfile setLoggedIn={setLoggedIn} deleteProfile={deleteProfile} setDeleteProfile={setDeleteProfile} />
            </div>
        </div>
    );
}