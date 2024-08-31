import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import {getFormattedDate} from "../util/util";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

export default function Diary() {
  const { diaryId } = useParams();
  const data = useDiary(diaryId);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/diaries/${diaryId}/edit`);
  }

  if (!data) {
    return <div>일기를 불러오고 있습니다... 🙇</div>
  }

  const {date, emotionId, content} = data;
  const title = `${getFormattedDate(new Date(Number(date)))}`;
  return (
    <>
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
      </div>
    </>
  );
}
