import styles from "./ProfileSettings.module.css";
import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import SettingsComponent from "../components/page-components/profile-settings/SettingsComponent";

export default function ProfileSettings({setLoggedIn}) {

    return (
        <div className={styles.profileSettings}>
            <div>
                <Link to={-1}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Settings" />
                <SettingsComponent setLoggedIn={setLoggedIn} />
            </div>
        </div>
    );
}