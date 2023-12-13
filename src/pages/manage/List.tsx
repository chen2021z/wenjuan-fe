import React, { useState } from "react";
import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "2023-12-14",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "2023-12-14",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "2023-12-14",
  },
];

const List: React.FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.content}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.map((q) => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q}></QuestionCard>;
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;
