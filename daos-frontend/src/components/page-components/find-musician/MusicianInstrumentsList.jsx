import styles from "./MusicianInstrumentsList.module.css";
import MusicianInstrumentPreview from "./MusicianInstrumentPreview";
import HTag from "../../atoms/HTag";

export default function MusicianInstrumentsList({instruments}) {
    return (
        <div className={styles.musicianInstrumentsList}>
            {instruments.slice(0,1).map((instrument, index) => {
                return (
                    <MusicianInstrumentPreview key={index} instrument={instrument} />
                );
            })}
            {instruments.length > 1 && <div className={styles.musicianInstrumentsListMore}>
                <HTag hType="h3" hColor="blue" hText={`+ ${instruments.length-1} more instruments`} />
            </div>}
        </div>
    );
}