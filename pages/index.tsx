import { GetServerSideProps, NextPage } from 'next'
// 获取浏览器类型
import { UAParser } from 'ua-parser-js'

type Props = {
  browser: {
    name: string;
    version: string;
    major: string;
  }
}

const index: NextPage<Props> = (props) => {
  const { browser } = props
  return (
    <div>您的浏览器是{browser.name}</div>
  )
}


export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()
  return {
    props: {
      browser: result.browser
    }
  }
}
