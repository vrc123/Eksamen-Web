import styles from "./EnsemblePreview.module.css";
import EnsembleInfo from "./EnsembleInfo";
import EnsemblePostsList from "./EnsemblePostsList";

export default function EnsemblePreview({ensemble}) {
    return (
        <div className={styles.ensemblePreview}>
            <EnsembleInfo ensemble={ensemble} />
            <EnsemblePostsList ensemble={ensemble} posts={ensemble.posts} />
        </div>
    );
}