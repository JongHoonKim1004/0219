"use client"

import Link from "next/link";

const WriteButton = () => {
  return(
    <div style={{float: "right", margin: "20px 50px"}}>
      <Link href={'/write'}>
        <button >글쓰기</button>
      </Link>
    </div>
  )
}

export default WriteButton;