/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        //console.log(res.data);
        setPosts(res.data);
    }; 

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return <div 
                key = {post.id}
                className="card"
                style={{border: 'solid 2px', padding: '5px', marginBottom: '5px'}}>
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <CommentList comments={post.comments}/>
                        <CommentCreate postId={post.id}/>
                    </div>
                    
                </div> 
    });

    return <div>
        {renderedPosts}
    </div>;
};