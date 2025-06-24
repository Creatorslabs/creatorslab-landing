import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

function TaskCard({ task }: any) {
  return (
    <Link
      href={`/tasks/${task._id}`}
      className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-xl overflow-hidden shadow-lg w-full max-w-md mx-auto transition hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={task.image || "/images/Rectangle 3.png"}
          alt={task.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-[-20px] right-4 z-10">
          <Image
            src="https://i.pravatar.cc/100"
            alt="creator avatar"
            quality={75}
            loader={({ src, width, quality }) =>
              `${src}?w=${width}&q=${quality || 75}`
            }
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-black"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 pt-6 flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg">{task.title}</h3>
        <p className="text-sm text-gray-400">{task.description}</p>

        {/* Footer Section */}
        <div className="mt-4 flex items-center justify-between">
          {/* Reward Tag */}
          <div className="px-3 py-1 text-sm rounded-md bg-[#6d28d9] text-white flex items-center gap-2">
            {task.rewardPoints} $CLS
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={14} fill="white" className="text-white" />
              1.5k
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} />
              10k
            </div>
            <div className="flex items-center gap-1">
              <Share2 size={14} />
              120
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TaskCard;
