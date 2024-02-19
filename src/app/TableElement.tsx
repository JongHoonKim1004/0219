"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface BoardItem {
  BOARD_ID: number;
  BOARD_TITLE: string;
  BOARD_CONTENT: string;
  REGISTER_ID: string;
  REGISTER_DATE: string;
}

const TableElement:React.FC = () => {
  const [post, setPost] = useState<BoardItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:9999/board")
      .then((resp) => resp.json())
      .then((result) => setPost(result));
  }, []);

  return (
    <table className="homeTable">
      <thead>
        <tr>
          <th style={{ textAlign: "center" }}>No</th>
          <th>제목</th>
          <th style={{ textAlign: "center" }}>작성자</th>
        </tr>
      </thead>
      <tbody>
        {post.map((ele) => (
          <TableComp
            id={ele.BOARD_ID}
            title={ele.BOARD_TITLE}
            registerId={ele.REGISTER_ID}
            key={ele.BOARD_ID}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableElement;

const TableComp:React.FC<
{
  id: number;
  title: string;
  registerId: string
}> = ({id, title, registerId}) => {
  return(
    <tr>
      <td style={{ textAlign: "center" }}>{id}</td>
      <td><Link href={`/read/${id}`} className="TableLink">{title}</Link></td>
      <td style={{ textAlign: "center" }}>{registerId}</td>
    </tr>
  )
}
