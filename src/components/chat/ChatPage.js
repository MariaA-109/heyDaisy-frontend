import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatPage = (props) => {
  const chatProps = useMultiChatLogic(
    "286c08c5-5015-484c-94f9-c980b4e6c57e",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "80%" }} />
    </div>
  );
};

export default ChatPage;
