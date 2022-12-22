import styles from "./EnsemblePostsList.module.css";
import PostPreview from "../../others/PostPreview";
import HTag from "../../atoms/HTag";

export default function EnsemblePostList({ensemble, posts}) {
    return (
        <div className={styles.ensemblePostsList}>
            {posts.slice(0,1).map((post, index) => {
                return (
                    <PostPreview key={index} ensemble={ensemble} post={post} />
                );
            })}
            {posts.length > 1 && <div className={styles.ensemblePostsListMore}>
                <HTag hType="h3" hColor="blue" hText={`+ ${posts.length-1} more posts`} />
            </div>}
        </div>
    );
}