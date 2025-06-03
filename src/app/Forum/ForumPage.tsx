import './forumpage.css';

function ForumPage() {
  return (
    <div className="forum-container">
      <header className="forum-header">
        <div className="left-icons">🏠</div>
        <div className="logo">LOGO</div>
        <div className="right-icons">👤</div>
      </header>

      <nav className="forum-nav">
        <button>Lost Pet</button>
        <button>Adopt</button>
        <button>Rescue</button>
        <button className="active">Forum</button>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search Post..." />
      </div>

      <div className="post-list">
        {[1, 2, 3].map((item) => (
          <div className="post-card" key={item}>
            <img src="https://i.imgur.com/MK3eW3As.png" alt="sprite" className="post-img" />
            <div className="post-content">
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at elementum lacus, vitae porta ante...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumPage;
