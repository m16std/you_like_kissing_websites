import React from 'react';

const MySelect = ({ sortPosts }) => {
    return (
        <select onChange={(event) => sortPosts(event.target.value)}>
            <option key="1" value="body">По содержанию</option>
            <option key="2" value="title">По названию</option>
        </select>
    );
};

export default MySelect;


