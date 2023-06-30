import React from 'react';
import MyButton from './UI/button/MyButton';

const Post = ({ post, remove }) => {
    return (
        <div className="post">
            <div className="postContent">
                <strong>
                    {post.title}
                </strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div>
                <MyButton onClick={() => remove(post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default Post;