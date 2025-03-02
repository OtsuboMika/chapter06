import React from 'react';
import { posts } from '../data/posts';
import classes from "../css/Main.module.css";
import { Link } from 'react-router-dom'; 

export const Main = () => {
  return(
    <div className={classes.container}>
      <ul>
      {posts.map(post => (
        <li key={post.id} className={classes.postWrapper}>
          <Link to={`/posts/${post.id}`} className={classes.postLink}>
            <div className={classes.postInfo}>
              <div className={classes.postDate}>{new Date(post.createdAt).toLocaleDateString()}</div>
                <div className={classes.postCategorywrap}>
                  {post.categories.map((category, index) => (
                    <div key={index} className={classes.postCategory}>{category}</div>
                     ))}
                </div>
            </div>
            <p className={classes.postTitle}>{post.title}</p>
            <div className={classes.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
};
