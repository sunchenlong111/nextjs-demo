import { usePosts } from 'hooks/usePosts'
import { NextPage } from 'next'

const PostIndex: NextPage = () => {
  const { isLoading, isEmpty, posts } = usePosts()
  return (
    <div>
      <h1>文章列表</h1>

      {isLoading ? <div>加载中</div> :
        isEmpty ? <div>没有文章</div> :
          posts.map(post => <div key={post.id}>{post.id}</div>)
      }
    </div>
  )
}

export default PostIndex