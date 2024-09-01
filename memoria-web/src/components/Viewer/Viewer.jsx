import React from "react";
import {emotionList} from "../../util/util";
import "./Viewer.css";

export default function Viewer({content, emotionId}) {
  const emotionItem = emotionList.find((it) => it.id === emotionId);

  if (!emotionItem) {
    return <div>일기 정보를 불러오는 중...</div>;
  }

  return (
    <>
      <div className="Viewer">
        <section>
          <h4>오늘의 감정</h4>
          <div
            className={[
              "emotion_img_wrapper",
              `emotion_img_wrapper_${emotionId}`,
            ].join(" ")}
          >
            <img alt={emotionItem.name} src={emotionItem.img}/>
            <div className="emotion_descript">{emotionItem.name}</div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="content_wrapper">
            <p>{content}</p>
          </div>
        </section>
      </div>
    </>
  );
}
