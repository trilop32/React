import React from 'react';

function UserPosts({ posts }) {
    if (!posts) {
      return <div className="user-posts"></div>;
    }
  
    if (posts.length === 0) {
      return <div className="user-posts">У пользователя нет постов</div>;
    }
  
    return (
      <div className="user-posts">
        <h2>Посты пользователя</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  UserPosts.displayName = 'UserPosts';
  export default UserPosts;