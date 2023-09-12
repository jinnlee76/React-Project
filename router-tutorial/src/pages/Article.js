import React from 'react';
import { useParams } from 'react-router-dom';

function Article(props) {
    const { id } = useParams(); 
    return (
        <div>
            <h2>수정 게시글 {id} </h2>
        </div>
    );
};

export default Article;