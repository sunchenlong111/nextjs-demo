import path from 'path'
import fs, {promises as fsPromise} from 'fs'
import matter from 'gray-matter'

const getPosts = async ()=>{
  const markdownDir = path.join(process.cwd(), 'markdown')
  const fileNames = await fsPromise.readdir(markdownDir)
  const posts = fileNames.map(fileName=>{
    // 获取完整路径
    const fullPath = path.join(markdownDir, fileName)
    // 把md 后缀去掉，生成对应ID
    const id = fileName.replace(/.md$/g, '')
    // 同步读取文件内容
    const text = fs.readFileSync(fullPath, 'utf-8')
    // 使用 gray-matter 读取文章内容
    const {data:{title, date}, content} = matter(text)

    return {
      id,
      title,
      date,
      content
    }
  })
  return posts
}

export default getPosts