import avatarka from '../assets/profile/avatarka.jpg';
import name1 from '../assets/dialog/name1.png';
import name2 from '../assets/dialog/name2.png';
import name3 from '../assets/dialog/name3.png';
import name4 from '../assets/dialog/name4.png';
import name5 from '../assets/dialog/name5.png';
import name6 from '../assets/dialog/name6.png';

let state = {
  dialogPage: {
    dialogs: [
      { id: 1, name: "name1", avatarka: name1 },
      { id: 2, name: "name2", avatarka: name2 },
      { id: 3, name: "name3", avatarka: name3 },
      { id: 4, name: "name4", avatarka: name4 },
      { id: 5, name: "name5", avatarka: name5 },
      { id: 6, name: "name6", avatarka: name6 },
    ],
    messages: [
      { id: 1, userId: 777, message: "hello" },
      { id: 2, userId: 445, message: "how are you" },
      { id: 3, userId: 777, message: "it is ok" },
      { id: 3, userId: 445, message: "Good buy...." },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, avatarka: avatarka, post: "I'am ak and you", likeCount: 3 },
      { id: 2, avatarka: avatarka, post: "How are you", likeCount: 2 },
      { id: 3, avatarka: avatarka, post: "Do you happy", likeCount: 5 },
      { id: 4, avatarka: avatarka, post: "I'm GOOD...", likeCount: 6 },
    ]
  },

}

export default state;

