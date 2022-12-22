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

  })
  return <div className="background">

  </div>;
}
