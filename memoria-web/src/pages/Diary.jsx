import React from "react";
import {useParams} from "react-router-dom";

export default function Diary() {
  const { diaryId } = useParams();
  return (
    <>
      <h1>{diaryId}번 일기</h1>
      <p>Diary Page입니다.</p>
    </>
  );
}
