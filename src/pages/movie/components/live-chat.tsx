import { Input } from "@/components/ui/input";
import type { RootState } from "@/utils/store/appStore";
import { setLiveChat } from "@/utils/store/slices/liveChatSlice";
import { useEffect, useRef, type CSSProperties, type ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { cn, getRandomName } from "@/lib/utils";

export const LiveChat = () => {
  const liveChat = useSelector((state: RootState) => state.livechat);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsub = setInterval(() => {
      const { message, name } = getRandomName();
      dispatch(setLiveChat([{ id: new Date().toISOString(), name: name, message: message }]));
    }, 1000);

    return () => clearInterval(unsub);
  }, []);

  // const virtualizer = useWindowVirtualizer({
  //   count: liveChat?.length,
  //   estimateSize: () => 40,
  //   overscan: 5,
  //   scrollMargin: container.current?.offsetHeight ?? 0,
  // });

  // const virtualItems = virtualizer.getVirtualItems();

  return (
    <div className="border rounded-lg h-full w-2/6  bg-neutral-900/50">
      <div className="shadow p-4 border-b">Chat</div>
      <div className="px-4 h-96 overflow-y-auto flex flex-col-reverse" ref={container}>
        {liveChat?.map(({ id, message, name }) => {
          return <ChatMessage data-index={id} key={id} name={name} message={message} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputRef.current?.value || inputRef.current.value.trim().length === 0) return;
          dispatch(
            setLiveChat([{ id: new Date().toISOString(), name: "Akshay", message: inputRef.current?.value ?? "" }])
          );
          inputRef.current.value = "";
        }}
      >
        <Input ref={inputRef} className="h-12" id="message" maxLength={60} placeholder="Enter your message and hit ↲" />
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
  <div {...props} className={cn("flex items-center gap-2 my-2", className)} style={style} id="chat-message">
    <div className="size-7 rounded-full bg-gray-500 flex items-center justify-center text-sm">{name?.split("")[0]}</div>
    <div className="font-medium text-sm">{name}</div>
    <p className="text-xs">{message}</p>
  </div>
);
