import axios from 'axios'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

type Post = {
  id: string;
  date: string;
  title: string;
}
const PostIndex: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get('/api/v1/posts').then(response => {
      setPosts(response.data)
      setIsLoading(false)
      if (response.data.length === 0) {
        setIsEmpty(true)
      }
    }, () => {
      setIsLoading(false)
    })
  }, [])
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