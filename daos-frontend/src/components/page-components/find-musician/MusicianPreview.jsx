import styles from "./MusicianPreview.module.css";
import MusicianInfo from "./MusicianInfo";
import MusicianInstrumentsList from "./MusicianInstrumentsList";

export default function MusicianPreview({musician}) {
    
    return (
        <div className={styles.musicianPreview}>
            <MusicianInfo musician={musician} />
            {musician.instruments.length != 0 && <MusicianInstrumentsList instruments={musician.instruments} />}
        </div>
    );
}