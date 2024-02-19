"use client";
import Link from "next/link";
import React from "react";

const WritePageBtnDiv = () => {
  return (
    <div>
      <Link href={"/"}>
        <button className="writePageBtn">돌아가기</button>
      </Link>
      <button className="writePageBtn">등록하기</button>
    </div>
  );
};

export default WritePageBtnDiv;
