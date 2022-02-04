import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { useGetPostsQuery, useAddPostMutation } from '../../services/posts';
import { Outlet, Link } from 'react-router-dom';

const PostManager = () => {

    const { data:posts, isLoading, isFetching } = useGetPostsQuery();
    const [addPost, {isLoading:addPostloading}] = useAddPostMutation();

    const getPostList = () => {
        if(isLoading){
            return <h3>Loading...</h3>
        }
        if(isFetching){
            return <h3>Fetching...</h3>
        }
        if(!posts){
            return <h3>No Post Found...</h3>
        }
        return (
            <ul>
                {posts.map(post => <li key={post.id}><Link to={post.id}>{post.name}</Link></li>)  }
            </ul>
        )
    }

  return <div style={{width:'80%',margin:'20px auto'}}>
      <h1>Add a Post </h1>
      <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <TextField id="outlined-basic" label="Post Details" variant="outlined" style={{width:'80%'}} />
        <Button variant='contained' color='secondary'>Add Post</Button>
      </div>
      <hr/>
      <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{width:'45%'}}>
              {getPostList()}
          </div>
          <div style={{width:'45%'}}>
            <Outlet />
          </div>

      </div>
  </div>;
};

export default PostManager;
