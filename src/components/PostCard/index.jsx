export const PostCard = (props) => {
    const post = props.post;

    return (
        <div className="post" >
            <img src={post.cover} alt={post.title} className="img" />
            <div className="post-content">
                <h2 > { post.title } </h2>
                <div> {post.body} </div>
            </div>
        </div>
    );
}