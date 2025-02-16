export type Message = {
  id: string;
  content: string;
  sender: User;
  timestamp: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
};
