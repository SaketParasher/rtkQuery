import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {id} = useParams();

    const renderSelectedPost = () => {
        if(!id){
            return <h3>Please select a post to Edit or Delete!</h3>
        }
        return <h3>Post Selected with Id :- {id}</h3>
    }
  return <div>
      {renderSelectedPost()}

  </div>;
};

export default PostDetails;
