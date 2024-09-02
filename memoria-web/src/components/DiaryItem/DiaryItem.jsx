import React from "react";
import "./DiaryItem.css";
import {useNavigate} from "react-router-dom";
import {getEmotionImageById} from "../../util/util";
import Button from "../Button/Button";

export default React.memo(function DiaryItem({id, emotionId, content, date}) {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diaries/${id}`);
  };
  const goEdit = () => {
    navigate(`/diaries/${id}/edit`);
  };

  return (
    <>
      <div className="DiaryItem">
        <div onClick={goDetail} className={["img_section", `img_section_${emotionId}`].join(" ")}>
          <img alt={`emotion${emotionId}`} src={getEmotionImageById(emotionId)}/>
        </div>
        <div onClick={goDetail} className="info_section">
          <div className="date_wrapper">
            {new Date(parseInt(date)).toLocaleDateString()}
          </div>
          <div className="content_wrapper">{content.slice(0, 25)}</div>
        </div>
        <div className="button_section">
          <Button onClick={goEdit} text={"수정하기"}/>
        </div>
      </div>
    </>
  );
});
