import React from 'react';
import { posts } from '../data/posts';
import classes from "../css/Detail.module.css";
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams(); 
  const post = posts.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return <p>記事が見つかりません</p>;
  }

  return(
    <div className={classes.Detail_postContainer}>
      <div className={classes.Detail_Posts}>
        <div className={classes.Detail_Images}>
          <img src={post.thumbnailUrl} alt={post.title}/>
        </div>
      </div>
        
      <div className={classes.Detail_postWrapper}>
        <div className={classes.Detail_postInfo}>
          <div className={classes.Detail_postDate}>{new Date(post.createdAt).toLocaleDateString()}</div>
          <div className={classes.Detail_postCategorywrap}>{
            post.categories.map((category,index) => {
              return (
                <span key={index} className={classes.Detail_postCategory}>{category}</span>
              );
            })}
          </div>
        </div>
      </div>
        <p className={classes.Detail_postTitle}>{post.title}</p>
        <div className={classes.Detail_postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};