import React from 'react';
import { posts } from './data/posts'

export const Main = () => {
  return(
    <div className='container'>
      <ul>
      {posts.map(post => (
        <div className='postWrapper'>
          <li key={post.id} className='postList'>
          <p>{post.title}</p>
          <p>{post.content}</p>
          </li>
        </div>
    ))}
      </ul>
    </div>
    )
}
