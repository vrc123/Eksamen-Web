import styles from "./EnsemblesFilter.module.css";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";

export default function EnsemblesFilter({ensembles, query, setQuery}) {

    function search(e){
        setQuery(e.target.value);
    }

    function clear(){
        setQuery("");
    }

    return (
        <div className={styles.ensemblesFilter}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Find Ensemble"/>
                {ensembles.length != undefined && <PTag pType="normal" pColor="grey" pText={`${ensembles.length} ensembles found with current posts`} />}
                {ensembles.length == undefined && <PTag pType="normal" pColor="grey" pText={`0 ensembles found with current posts`} />}
            </div>
            <div className={styles.ensemblesFilterSearch}>
                <input placeholder="Type a city or zip code" type="text" value={query} onChange={search} />
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    );
}