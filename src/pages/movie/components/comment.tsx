import type { CommentType } from "./comment-list";

export const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex gap-4 my-2">
      <div className="w-10 h-10 rounded-full bg-gray-500" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <p className="text-sm font-semibold">{comment.name}</p>
          <p className="text-sm font-semibold">{comment.date}</p>
        </div>
        <p className="text-sm">{comment.comment}</p>
      </div>
    </div>
  );
};
