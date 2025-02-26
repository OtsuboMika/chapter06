import React from 'react';
import { posts } from './data/posts';
import classes from "../src/css/Main.module.css";
export const Main = () => {
  return(
    <div className={classes.container}>
      <ul>
      {posts.map(post => (
        <li key={post.id} className={classes.postWrapper}>
          <a href={post.thumbnailUrl} className={classes.postLink}>
            <div class={classes.postInfo}>
              <div className={classes.postDate}>{new Date(post.createdAt).toLocaleDateString()}</div>
                <div className={classes.postCategorywrap}>
                  {post.categories.map((category, index) => (
                    <div key={index}className={classes.postCategory}>{category}</div>
                     ))}
                </div>
            </div>
            <p className={classes.postTitle}>{post.title}</p>
            <div className={classes.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
          </a>
        </li>
      ))}
      </ul>
    </div>
  );
};
