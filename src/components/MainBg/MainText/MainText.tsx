import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

const MainText = () => {
  const txt =
    "안녕하세요. 제 포트폴리오에 방문해주셔서 감사합니다. 아래 그림을 클릭하시면 제 취향을 알 수 있습니다.😊";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 100);

    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }

    // if (Text.length === txt.length) {
    //   clearInterval(interval);
    //   handleAfterAction(); // 글자가 모두 출력된 후 handleAfterAction 함수를 호출합니다.
    // }

    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    <div className={styles.main_text}>
      <p>{Text}</p>
    </div>
  );
};

export default MainText;
