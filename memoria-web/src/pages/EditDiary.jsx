import React, {useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import {DiaryDispatchContext} from "../App";
import Editor from "../components/Editor/Editor";

export default function EditDiary() {
  const {diaryId} = useParams();
  const data = useDiary(diaryId);

  const {onUpdate, onDelete} = useContext(DiaryDispatchContext);
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const {date, content, emotionId} = data;
      onUpdate(diaryId, date, content, emotionId);
      navigate("/", {replace: true});
    }
  };
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요! 😖")) {
      onDelete(diaryId);
      navigate("/", {replace: true});
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다... 🙇</div>
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
        rightChild={<Button type={"negative"} text={"삭제하기"} onClick={onClickDelete}/>}
      />
      <Editor initData={data} onSubmit={onSubmit}/>
    </div>
  );
};
