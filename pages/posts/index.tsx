import { getPosts } from 'lib/posts'
// GetStaticProps 服务端渲染必须要引入
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

type Props = {
  posts: Post[]
}

const PostIndex: NextPage<Props> = (props) => {
  const { posts } = props
  return (
    <div>
      <h1>文章列表</h1>
      {
        posts.map(p => <div key={p.id}>
          <Link href="/posts/[id]" as={`/posts/${p.id}`}>
            <a>
              {p.id}
            </a>
          </Link>
        </div>)
      }
    </div>
  )
}

export default PostIndex

// 服务端渲染 获取props固定写法
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}