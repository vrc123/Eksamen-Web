import styles from "./LoggedOut.module.css";
import { Link } from "react-router-dom";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";
import ButtonTag from "../components/atoms/ButtonTag";

export default function LoggedOut() {
    
    return (
        <div className={styles.loggedOut}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Sign up or login" />
                <PTag pType="normal" pColor="grey" pText="Sign up or login to find musicians you can play with throughout Denmark" />
                <div className={styles.loggedOutContent}>
                    <Link to="/sign-up">
                        <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Sign up" />
                    </Link>
                    <div>
                        <span></span>
                        <PTag pType="small" pColor="grey" pText="or"/>
                        <span></span>
                    </div>
                    <Link to="/login">
                        <ButtonTag buttonType="normal" buttonColor="white" buttonText="Login" />
                    </Link>
                </div>
            </div>
        </div>
    );
}