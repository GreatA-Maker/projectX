import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";

import { Context } from "../context"
import { ChatEngine } from 'react-chat-engine'


export default function Chats() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true)

    }
  },[])

  useEffect(() => {
    if (username.length === "" || secret === "") {
      router.push("/")
    }
  },[username,secret])

  if (!showChat) return <div />

  return <div className="background">
    <div className="shadow">
    
      <ChatEngine
      height='calc(100vh - 200px)'
      publicKey={'5d9921ec-ae3b-407f-83e5-085a2ecf040c'}
      userName={username}
      userSecret={secret}
      
    />

    </div>
  </div>;
}
