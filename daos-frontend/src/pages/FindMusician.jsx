import { useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import MusiciansFilter from "../components/page-components/find-musician/MusiciansFilter";
import MusiciansDisplay from "../components/page-components/find-musician/MusiciansDisplay";

export default function FindMusician() {

    const [query, setQuery] = useState("");
    
    const { data: musicians, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles");

    let filter = musicians;

    if(musicians) {
        if(musicians.statusCode != 400) {
            if(query != "") {
                if (!isNaN(query[0])) {
                    filter = musicians.filter((musician) => musician.zipCode.includes(query));
                } else {
                    if (query[0] != query[0].toUpperCase()) {
                        setQuery(query[0].toUpperCase());
                    } else {
                        filter = musicians.filter((musician) => musician.city.includes(query));
                    }
                }
            }
        }
    }

    let visibleMusiciansStart = 0;

    if(screen.width < 428 ) {
        visibleMusiciansStart = 6;
    } else {
        visibleMusiciansStart = 12;
    }

    const [visibleMusicians, setVisibleMusicians] = useState(visibleMusiciansStart);

    function showMoreMusicians() {
        setVisibleMusicians(visibleMusicians + visibleMusiciansStart);
    }

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {musicians && <div>
                <MusiciansFilter musicians={filter} query={query} setQuery={setQuery} />
                <MusiciansDisplay musicians={filter} visibleMusicians={visibleMusicians} showMoreMusicians={showMoreMusicians} />
            </div>}
        </>
    );
}