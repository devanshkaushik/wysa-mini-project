import { ChatType, IChat } from "../components/ChatBubble"
import { v4 as uuidv4 } from "uuid"

export const defaultChats: IChat[] = [
  {
    id: uuidv4(),
    text: "Hi there! 👋",
    type: ChatType.SYSTEM,
    isDefault: true,
  },
  {
    id: uuidv4(),
    text: "I'm Wysa - an AI chatbot built by therapists.",
    type: ChatType.SYSTEM,
    isDefault: true,
  },
  {
    id: uuidv4(),
    text: "I'm here to understand your concerns and connect you with the best resources available to support you.",
    type: ChatType.SYSTEM,
    isDefault: true,
  },
  {
    id: uuidv4(),
    text: "Can I help?",
    type: ChatType.SYSTEM,
    isDefault: true,
  },
]
