import styles from "./MusiciansFilter.module.css";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";

export default function MusiciansFilter({musicians, query, setQuery}) {

    function search(e){
        setQuery(e.target.value);
    }

    function clear(){
        setQuery("");
    }

    return (
        <div className={styles.musiciansFilter}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Find Musician"/>
                {musicians.length != undefined && <PTag pType="normal" pColor="grey" pText={`${musicians.length} musicians found`} />}
                {musicians.length == undefined && <PTag pType="normal" pColor="grey" pText={`0 musicians found`} />}
            </div>
            <div className={styles.musiciansFilterSearch}>
                <input placeholder="Type a city or zip code" type="text" value={query} onChange={search} />
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    );
}