import path from 'path'
import fs, { promises as fsPromise } from 'fs'
import matter from 'gray-matter'

const markdownDir = path.join(process.cwd(), 'markdown')

export const getPosts = async () => {
  const fileNames = await fsPromise.readdir(markdownDir)
  const posts = fileNames.map(fileName => {
    // 获取完整路径
    const fullPath = path.join(markdownDir, fileName)
    // 把md 后缀去掉，生成对应ID
    const id = fileName.replace(/.md$/g, '')
    // 同步读取文件内容
    const text = fs.readFileSync(fullPath, 'utf-8')
    // 使用 gray-matter 读取文章内容
    const { data: { title, date }, content } = matter(text)

    return {
      id,
      title,
      date,
      content
    }
  })
  return posts
}

export const getPost = (id: string) => {
  const fullPath = path.join(markdownDir, id + '.md')
  // 同步读取文件内容
  const text = fs.readFileSync(fullPath, 'utf-8')
  // 使用 gray-matter 读取文章内容
  const { data: { title, date }, content } = matter(text)

  return JSON.parse(JSON.stringify({
    id,
    title,
    date,
    content
  }))
}

export const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir)
  return fileNames.map(fileName => fileName.replace(/.md$/g, ''))
}