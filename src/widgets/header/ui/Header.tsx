import { Layout } from "antd";

const { Header: AndtHeader } = Layout
export const Header = () => {
  return (
      <Layout>
        <AndtHeader className={ "header" }>
          <div className="header__logo">
            <div className={ "Logo" }>Logo</div>
          </div>
        </AndtHeader>
      </Layout>
  )
}