import { getPost, getPostIds } from "lib/posts"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"

type Props = {
  post: Post
}

const postShow: NextPage<Props> = (props) => {
  const { post } = props
  return (

    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default postShow

export const getStaticPaths: GetStaticPaths = async () => {
  const idList = await getPostIds()
  return {
    paths: idList.map(id => ({ params: { id: id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (x: any) => {
  const id = x.params.id
  const post = await getPost(id)
  return {
    props: {
      post
    }
  }
}