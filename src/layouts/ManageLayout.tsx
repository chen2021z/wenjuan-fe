import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
const MainLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>manageLayout left</p>
        <button>创建问卷</button>
        <button>我的文件</button>
        <button>星标问卷</button>
        <button>回收站</button>
        </div>
      <div className={styles.right}>
        <Outlet></Outlet>
      </div>
      <div>manageLayout right</div>
    </div>
  );
};

export default MainLayout;
