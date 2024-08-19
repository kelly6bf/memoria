import React from "react";
import {useParams} from "react-router-dom";

export default function EditDiary() {
  const { diaryId } = useParams();
  return (
    <>
      <h1>{diaryId}번 일기 수정 페이지</h1>
      <p>일기 수정 때립시답.</p>
    </>
  );
}
