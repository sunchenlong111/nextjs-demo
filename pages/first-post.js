
import React, { useCallback } from 'react'
import Link from 'next/link'

export default function X() {
  const clickme = useCallback(() => {
    console.log('you clicked me')
  }, [])
  return (
    <>
      <div>
        first post <button onClick={clickme}>hahah</button>
        <hr />
        <Link href="/"><a>回到首页点击这里</a></Link>
      </div>
    </>
  )
}