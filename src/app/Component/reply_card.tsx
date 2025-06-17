"use client";
import Link from "next/link";

type ReplyCardProps = {
  forum_id: number;
  reply_id: number;
  content: string;
  name: string;
  date: string;
};

export default function ReplyCard({ forum_id, reply_id, content, name, date }: ReplyCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">{name}</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <div>{content}</div>
    </div>
  );
};

// Ian Mulya Chiuandi membuat keseluruhan kode ini.