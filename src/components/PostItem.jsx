import React from 'react';
import MyButton from './UI/button/MyButton';

const Post = (props) => {
    return (
        <div className="post">
            <div className="postContent">
                <strong>
                    {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div>
                <MyButton onClick={props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default Post;