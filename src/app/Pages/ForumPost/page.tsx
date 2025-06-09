import './forumpost.css';

function ForumPost() {
  return (
    <div className="post-container">
      <button className="back-button">←</button>

      <h1 className="post-title">How to have a pet</h1>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Tyrannosaurus_Rex_Holoscape.jpg"
        alt="post visual"
        className="post-image"
      />

      <div className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <h2 className="comment-header">Comment</h2>

      <div className="comment-box">
        <div className="comment-user">
          <img
            src="https://i.pravatar.cc/30?img=12"
            alt="avatar"
            className="avatar"
          />
          <span className="username">Reina</span>
        </div>
        <div className="comment-text">
          Lorem ipsum dolor sit amet, consectetur elit.
        </div>
      </div>

      <button className="reply-button">↳ Reply</button>

      <div className="comment-box other">
        <div className="comment-text-only">
          Lorem ipsum dolor sit amet, consectetur elit.
        </div>
        <button className="scroll-button">↑</button>
      </div>
    </div>
  );
}

export default ForumPost;
