import avatarka from "../assets/profile/avatarka.jpg"
const redux = {
  dialogs: [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
    { id: 5, name: "name5" },
    { id: 6, name: "name6" },
  ],
  messages: [
    { id: 1, message: "hello" },
    { id: 2, message: "how are you" },
    { id: 3, message: "it is ok" },
  ],
  posts: [
    { id: 1, avatarka: avatarka, post: "I'am ak and you", likeCount: 3 },
    { id: 2, avatarka: avatarka, post: "How are you", likeCount: 2 },
    { id: 3, avatarka: avatarka, post: "Do you happy", likeCount: 5 },
    { id: 4, avatarka: avatarka, post: "I'm GOOD...", likeCount: 6 },
  ],
}

export default redux;

