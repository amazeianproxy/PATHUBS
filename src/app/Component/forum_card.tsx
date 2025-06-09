"use client";
import Link from "next/link";

type ForumCardProps = {
  forum_id: number;
  title: string;
  content: string;
};

export default function ForumCard({ forum_id, title, content }: ForumCardProps) {
  return (
    <Link href={`/Pages/ForumPost`}>
      <div className="post-card cursor-pointer">
        <img src="https://i.imgur.com/MK3eW3As.png" alt="sprite" className="post-img" />
        <div className="post-content">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  );
};