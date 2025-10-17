import { Comment } from "./comment";

export type CommentType = {
  name: string;
  comment: string;
  date: string;
  replies: CommentType[];
};

export const commentsData: CommentType[] = [
  {
    name: "Akshay Yelle",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2 days ago",
    replies: [
      {
        name: "Akshay Yelle",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "2 days ago",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Yelle",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2 days ago",
    replies: [
      {
        name: "Akshay Yelle",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "2 days ago",
        replies: [
          {
            name: "Akshay Yelle",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            date: "2 days ago",
            replies: [
              {
                name: "Akshay Yelle",
                comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                date: "2 days ago",
                replies: [
                  {
                    name: "Akshay Yelle",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                    date: "2 days ago",
                    replies: [
                      {
                        name: "Akshay Yelle",
                        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                        date: "2 days ago",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Yelle",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                    date: "2 days ago",
                    replies: [],
                  },
                  {
                    name: "Akshay Yelle",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                    date: "2 days ago",
                    replies: [],
                  },
                ],
              },
              {
                name: "Akshay Yelle",
                comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
                date: "2 days ago",
                replies: [],
              },
            ],
          },
          {
            name: "Akshay Yelle",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            date: "2 days ago",
            replies: [],
          },
        ],
      },
      {
        name: "Akshay Yelle",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "2 days ago",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Yelle",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2 days ago",
    replies: [],
  },
  {
    name: "Akshay Yelle",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2 days ago",
    replies: [],
  },
  {
    name: "Akshay Yelle",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    date: "2 days ago",
    replies: [],
  },
];

export const CommentsList = ({ comments }: { comments: CommentType[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, i) => (
        <div key={i}>
          <Comment comment={comment} key={i} />
          <div className="ml-8 pl-4 border-l border-l-neutral-50">
            <CommentsList comments={comment.replies} key={i} />
          </div>
        </div>
      ))}
    </div>
  );
};
