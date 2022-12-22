import { useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import EnsemblesFilter from "../components/page-components/find-ensemble/EnsemblesFilter";
import EnsemblesDisplay from "../components/page-components/find-ensemble/EnsemblesDisplay";

export default function FindEnsemble() { 
    
    const [query, setQuery] = useState("");

    const { data: ensembles, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles");

    let filter = ensembles;

    if (ensembles) {
        if(ensembles.statusCode != 400) {
            if(query != "") {
                if (!isNaN(query[0])) {
                    filter = ensembles.filter((ensemble) => ensemble.zipCode.includes(query));
                } else {
                    if (query[0] != query[0].toUpperCase()) {
                        setQuery(query[0].toUpperCase());
                    } else {
                        filter = ensembles.filter((ensemble) => ensemble.city.includes(query));
                    }
                }
            }  
        }
    }

    let visibleEnsemblesStart = 0;

    if(screen.width < 428 ) {
        visibleEnsemblesStart = 3;
    } else {
        visibleEnsemblesStart = 6;
    }

    const [visibleEnsembles, setVisibleEnsembles] = useState(visibleEnsemblesStart);

    function showMoreEnsembles() {
        setVisibleEnsembles(visibleEnsembles + visibleEnsemblesStart);
    }

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {ensembles && <div>
                <EnsemblesFilter ensembles={ensembles} query={query} setQuery={setQuery} />
                <EnsemblesDisplay ensembles={filter} visibleEnsembles={visibleEnsembles} showMoreEnsembles={showMoreEnsembles} />
            </div>}
        </>
    );
}