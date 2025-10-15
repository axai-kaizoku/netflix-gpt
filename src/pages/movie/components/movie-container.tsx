import { BASE_IMG_URL } from "@/utils/constants";
import type { Movie } from "@/utils/store/slices/movieSlice";

const commentsData = [
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

export const MovieContainer = ({ movie }: { movie: Movie | null }) => {
  if (!movie) {
    return (
      <div>
        <h1 className="text-2xl font-bold my-4">Movie not found!</h1>
      </div>
    );
  }
  return (
    <div className="px-10 w-full">
      <div className="flex justify-start gap-2  w-full">
        <img
          src={BASE_IMG_URL + movie.backdrop_path}
          alt={movie.title}
          width={950}
          height={500}
          className="rounded w-2/3"
        />
        <LiveChat />
      </div>

      <h1 className="text-4xl font-bold my-2">{movie?.title}</h1>
      <p className="text-lg max-w-3xl">{movie.overview}</p>
      <div>
        <h1 className="text-2xl font-bold my-4">Comments:</h1>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export const CommentsList = ({ comments }: { comments: typeof commentsData }) => {
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

export const Comment = ({ comment }: { comment: (typeof commentsData)[0] }) => {
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

export const LiveChat = () => (
  <div className="border rounded-lg w-2/6 bg-neutral-900/50">
    <div className="shadow p-4 border-b">Chat</div>
    <div className="px-4 h-80 overflow-y-auto">
      {new Array(20).fill(0).map((_, i) => (
        <div key={i} className="flex items-center gap-2 my-4">
          <div className="size-8 rounded-full bg-gray-500" />
          <div className="font-medium">Akshay</div>
          <p className="text-sm">Lorem ipsum dolor sit amet .</p>
        </div>
      ))}
    </div>
    <div className="border border-t"></div>
  </div>
);
