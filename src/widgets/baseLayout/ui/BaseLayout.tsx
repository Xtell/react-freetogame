import { Header } from "../../header";
import { Outlet } from "react-router";
import { Layout } from "antd";

const { Content } = Layout
export const BaseLayout = () => {

  return (
      <Layout className={ "layout" }>
        <Header/>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
  )
}