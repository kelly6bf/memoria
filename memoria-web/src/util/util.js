import emotion1 from "../images/emotion1.png";
import emotion2 from "../images/emotion2.png";
import emotion3 from "../images/emotion3.png";
import emotion4 from "../images/emotion4.png";
import emotion5 from "../images/emotion5.png";

export const getEmotionImageById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
}

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}

export const emotionList = [
  {
    id: 1,
    name: "완전 좋음",
    img: getEmotionImageById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImageById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImageById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImageById(4),
  },
  {
    id: 5,
    name: "완전 나쁨",
    img: getEmotionImageById(5),
  },
];
