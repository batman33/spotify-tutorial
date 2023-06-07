import React from "react";
import Image from "next/image";

import { Song } from "@/types";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  onClick?: (id: string) => void;
  data: Song;
}

const MediaItem: React.FC<MediaItemProps> = ({ onClick, data }) => {
  const imagePath = useLoadImage(data);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      onClick(data.id);
    }

    player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imagePath || "/images/liked.png"}
          alt={data.title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
