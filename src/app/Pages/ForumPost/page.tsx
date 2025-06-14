import './forumpost.css';

function ForumPost() {
  return (
    <div className="post-container">
      <img
      src="/assets/back.png"
      alt="Back"
      style={{ width: "24px", height: "24px", objectFit: "contain" }}
      className='backbutt'
      />

      <h1 className="post-title text-black">How to have a pet</h1>

      <img
        src="/assets/shelter2.png"
        alt="post visualization"
        className="post-image"
      />

      <div className="post-content text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <h2 className="comment-header text-black">Comment</h2>

      <div className="comment-box text-black">
        <div className="comment-user">
          <img
            src="https://i.pravatar.cc/30?img=12"
            alt="avatar"
            className="avatar"
          />
          <span className="username">Reina</span>
        </div>
        <div className="comment-text text-black">
          Lorem ipsum dolor sit amet, consectetur elit.
        </div>
      </div>

      <button className="reply-button text-black">↳ Reply</button>

      <div className="comment-box other">
        <div className="comment-text-only text-black">
          Lorem ipsum dolor sit amet, consectetur elit.
        </div>
        <button className="scroll-button">↑</button>
      </div>
    </div>
  );
}

export default ForumPost;


// import './forumpost.css';
// import { useParams } from 'next/navigation';
// import React, { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";

// export default function ForumPostPage() {
//   const { id } = useParams(); 
//   const forumId = parseInt(id);

//   const [post, setPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyContent, setReplyContent] = useState("");
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserId = async () => {
//       const email = localStorage.getItem("email");
//       if (!email) return;

//       const { data, error } = await supabase
//         .from("users")
//         .select("user_id")
//         .eq("email", email)
//         .single();

//       if (data) setUserId(data.user_id);
//     };

//     fetchUserId();
//   }, []);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const { data } = await supabase
//         .from("forum_post")
//         .select("*")
//         .eq("forum_id", forumId)
//         .single();
//       setPost(data);
//     };

//     const fetchReplies = async () => {
//       const { data } = await supabase
//         .from("forum_reply")
//         .select("*")
//         .eq("forum_id", forumId);
//       setReplies(data);
//     };

//     fetchPost();
//     fetchReplies();
//   }, [forumId]);

//   const handleReply = async () => {
//     if (!replyContent) return alert("Reply can't be empty");

//     const { data, error } = await supabase
//       .from("forum_reply")
//       .insert([
//         {
//           content: replyContent,
//           user_id: userId,
//           forum_id: forumId,
//           date: new Date().toISOString(),
//         },
//       ])
//       .select();

//     if (error) {
//       alert("Failed to send reply.");
//     } else {
//       setReplies([...replies, data[0]]);
//       setReplyContent("");
//     }
//   };

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div className="post-container">
//       <button className="back-button" onClick={() => history.back()}>←</button>
//       <h1 className="post-title">{post.title}</h1>
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Tyrannosaurus_Rex_Holoscape.jpg"
//         alt="post visual"
//         className="post-image"
//       />
//       <div className="post-content">{post.content}</div>

//       <h2 className="comment-header">Replies</h2>
//       {replies.map((reply, idx) => (
//         <div key={idx} className="comment-box">
//           <div className="comment-text-only">{reply.content}</div>
//         </div>
//       ))}

//       {userId ? (
//         <div className="mt-4">
//           <textarea
//             value={replyContent}
//             onChange={(e) => setReplyContent(e.target.value)}
//             placeholder="Write a reply..."
//             className="w-full rounded px-4 py-2 shadow bg-white text-black"
//           />
//           <button
//             onClick={handleReply}
//             className="reply-button bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600"
//           >
//             ↳ Reply
//           </button>
//         </div>
//       ) : (
//         <p className="text-gray-600 mt-4">Log in to reply</p>
//       )}
//     </div>
//   );
// }
