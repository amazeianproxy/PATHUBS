"use client";
import Link from "next/link";

type ForumCardProps = {
  forum_id: number;
  title: string;
  content: string;
  image_url?: string;
};

export default function ForumCard({ forum_id, title, content, image_url }: ForumCardProps) {

  const words = content.split(" ");
  const displayContent = words.length > 200 ? words.slice(0, 200).join(" ") + "..." : content;

  return (
    <Link href={`/Pages/ForumPost`} onClick={() => localStorage.setItem('forum_id', forum_id.toString())}>
      <div className="post-card cursor-pointer flex">
        <img
          src={image_url ? image_url : "/assets/shelter2.jpg"} // Default image
          alt="sprite"
          className="w-64 h-40 rounded mr-4"
        />
        <div className="bg-white p-4 rounded-xl flex flex-col justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{displayContent}</p>
        </div>
      </div>
    </Link>
  );
};

// Ian Mulya Chiuandi membuat keseluruhan kode ini.