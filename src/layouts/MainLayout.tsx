import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import style from "./MainLayout.module.scss";
const { Header, Content, Footer } = Layout;
const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header className={style.heaader}>
        <div className={style.left}>
          logo
        </div>
        <div className={style.right}>
          login
        </div>
      </Header>
      <Layout  className={style.main}>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer className={style.footer}>小治问卷 &copy;2023 - present. Created by 如约而至</Footer>
    </Layout>
  );
};

export default MainLayout;
