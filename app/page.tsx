'use client';

import { useEffect, useState } from 'react';
import Comment from '@/app/components/Comments';
import Post from '@/app/components/Post';
import { getComments, getPosts } from '@/supabase/query';
import '../assets/global.css';
import { CommentProps } from '@/app/components/Comments';
import { PostProps } from '@/app/components/Post';

export default function Home() {
  // (dt) Step 1: Create state to hold posts
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [comments, setComments] = useState<CommentProps[]>([]);
  // (dt): We first start with an empty array of posts useState([])

  // (dt) Step 2: Fetch data from Supabase when component loads
  useEffect(() => {
    // (dt) We only run fetch data once the component mounts (i think when page renders??)
    async function fetchData() {
      // (dt) This line calls Supabase getPosts() function and stores the results using setPosts(data)
      const data = await getPosts();
      console.log('Fetched posts:', data);
      setPosts(data);
      const commentsData = await getComments(); // Example post_id
      console.log('Fetched comments for post 1:', commentsData);
      setComments(commentsData);
    }

    fetchData();
  }, []); // this will run once the page loads

  // (dt) Step 3: We render posts
  return (
    <main>
      {posts.length > 0 ? (
        posts.map(post => (
          <>
            <Post
              key={post.id}
              username={post.username}
              date={post.date}
              image={post.image}
              likeCount={post.likeCount}
              text={post.text}
              id={0}
            />
            {/* (dt) Filter comments for the current post and render them using the filter command */}
            {comments
              .filter(comment => comment.post === post.id)
              .map(filteredComment => (
                <Comment
                  key={filteredComment.id}
                  date={filteredComment.date}
                  username={filteredComment.username}
                  comment={filteredComment.comment}
                  post={filteredComment.post}
                  id={0}
                />
              ))}
          </>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </main>
  );
}
