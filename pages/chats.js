import { useRouter } from "next/dist/client/router";
import React, { useContext, useState, useEffect, useReducer } from "react";

import { Context } from "../context"
import dynamic from "./next/dynamic"

const ChatEngine = dynamic(() => {
  import("react-chat-engine").thne((module) => module.ChatEngine)
})

const MessageFormSocial = dynamic(() => {
  import("react-chat-engine").thne((module) => module.MessageFormSocial)
})

export default function Chats() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true)

    }
  })

  useEffect(() => {
    if (username.length === 0 || secret === 0) {
      router.push("/")
    }
  })

  if (!showChat) return <div></div>

  return <div className="background">
    <div className="shadow">
      <ChatEngine height='calc(100vh - 200px)' projectID="5d9921ec-ae3b-407f-83e5-085a2ecf040c" userName={username} userSecret={secret} renderNewMessageFrom={() => <MessageFormSocial />}
      />

    </div>
  </div>;
}
