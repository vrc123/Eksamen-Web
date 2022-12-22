import styles from "./MusicianGenreList.module.css";
import GenreComponent from "../../others/GenreComponent";

export default function MusicianGenreList({genreList}) {

    return (
        <div className={styles.musicianGenreList}>
            {genreList.genre.slice(0,2).map((genre, index) => {
                return (
                    <GenreComponent Preview key={index} genre={genre} />
                );
            })}
            {genreList.genre.length > 2 && <div className={styles.musicianGenreListMore}>
                {`+${genreList.genre.length-2}`}
            </div>}
        </div>
    );
}