import Link from "next/link";
import { memo } from "react";
import type { Chat } from "@/lib/db/schema";

type Props = {
  chat: Chat;
  isActive: boolean;
};

function SidebarHistoryItem({ chat, isActive }: Props) {
  return (
    <Link
      href={`/chat/${chat.id}`}
      className={`block px-3 py-2 rounded ${
        isActive ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
    >
      {chat.title ?? "Untitled chat"}
    </Link>
  );
}

export default memo(SidebarHistoryItem);
