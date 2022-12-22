import styles from "./MusicianInstrumentPreview.module.css";
import InstrumentInfo from "../../others/InstrumentInfo";
import MusicianGenreList from "./MusicianGenreList";

export default function MusicianInstrumentPreview({instrument}) {
    return (
        <div className={styles.musicianInstrumentPreview}>
            <InstrumentInfo instrument={instrument} />
            {instrument.genre != 0 && <MusicianGenreList genreList={instrument} />}
        </div>
    );
}