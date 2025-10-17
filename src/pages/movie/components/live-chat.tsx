import { Input } from "@/components/ui/input";
import type { RootState } from "@/utils/store/appStore";
import { setLiveChat } from "@/utils/store/slices/liveChatSlice";
import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { cn } from "@/lib/utils";

export const LiveChat = () => {
  const liveChat = useSelector((state: RootState) => state.livechat);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const unsub = setInterval(() => {
      dispatch(
        setLiveChat([
          { id: new Date().toISOString(), name: "akshay", message: "this is live chat message" },
          { id: new Date().toISOString(), name: "thanay", message: "hiii, hello" },
          { id: new Date().toISOString(), name: "roronoa zoro", message: "worlds greatest swordsman" },
        ])
      );
    }, 1000);

    return () => clearInterval(unsub);
  }, []);

  useEffect(() => {
    if (autoScroll && container.current) {
      container.current.scrollTo({
        top: container.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [liveChat, autoScroll]);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const handleScroll = () => {
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 30;

      if (!atBottom) {
        setAutoScroll(false);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          setAutoScroll(true);
        }, 5000);
      } else {
        setAutoScroll(true);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: liveChat?.length,
    estimateSize: () => 40,
    overscan: 5,
    scrollMargin: container.current?.offsetHeight ?? 0,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div className="border rounded-lg h-full w-2/6  bg-neutral-900/50">
      <div className="shadow p-4 border-b">Chat</div>
      <div className="px-4 h-96 overflow-y-auto relative" ref={container}>
        <div className="relative" style={{ height: `${virtualizer.getTotalSize}px` }}>
          {virtualItems?.map(({ index, size, start, key }) => {
            const item = liveChat[index];
            return (
              <ChatMessage
                data-index={index}
                key={key}
                name={item.name}
                message={item.message}
                className="top-0 left-0 w-full absolute"
                style={{
                  transform: `translateY(${start}px)`,
                  height: `${size}px`,
                }}
              />
            );
          })}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inputRef.current.value = "";
        }}
      >
        <Input ref={inputRef} className="h-12" id="message" placeholder="Enter your message and hit ↲" />
      </form>
    </div>
  );
};

export const ChatMessage = ({
  name,
  message,
  className,
  style,
  ...props
}: {
  name: string;
  message: string;
  className?: string;
  style?: CSSProperties;
  props?: ReactElement<HTMLDivElement>;
}) => (
  <div {...props} className={cn("flex items-center gap-2 my-4", className)} style={style} id="chat-message">
    <div className="size-7 rounded-full bg-gray-500 flex items-center justify-center text-sm">{name?.split("")[0]}</div>
    <div className="font-medium text-sm">{name}</div>
    <p className="text-xs">{message}</p>
  </div>
);
