import React from 'react';

const Post = function (props) {
    return (
        <div className="post">
            <div className="postContent">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="postBtn">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Post;