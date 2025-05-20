import './post.css';

function Post() {
  return (
    <>
      <div className="upload-box image-font">Drag / Drop Images</div>

      <input
        type="text"
        placeholder="Post Title..."
        className="post-title-input post-font"
      />

      <input
        type="text"
        placeholder="Post Description..."
        className="post-description-input post-font"
      />

      <input
        type="text"
        placeholder="#Tags"
        className="post-tags-input post-font"
      />

    </>
  );
}

export default Post;
