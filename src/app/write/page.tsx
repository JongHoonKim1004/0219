import React from 'react';
import WritePageBtnDiv from './writePageBtnDiv';


const page = () => {
  return (
    <div>
      <h4 style={{fontSize: "20px", lineHeight: "30px", textAlign: "center"}}>
        새로운 글 쓰기
      </h4>
      <div className='writeFormDiv'>
        <form className='writeForm'>
          <label style={{fontSize: "20px", lineHeight: "30px"}}>제목&nbsp;</label>
          <input type='text' name='title' placeholder='제목을 입력하세요.' style={{width: "900px", marginLeft: "20px", height: "40px", fontSize: "16px", borderRadius: "5px"}}/>
          <br/>
          <br/>

          <label style={{fontSize: "20px", lineHeight: "30px"}}>내용&nbsp;</label>
          <textarea name='content' style={{width: "900px", marginLeft: "20px", minHeight: "200px", fontSize: '18px'}}/>
        </form>
      </div>
      <div className='writePageBtnDiv'>
        <WritePageBtnDiv/>
      </div>
    </div>
  );
};

export default page;