import React from 'react';
import Link from "gatsby-link"
import styled from 'styled-components'

const CourseDiv = styled.div`
  display: inline-block;
  position: relative;
`
const CourseImg =  styled.img`
  width: 355px;
  height: 225px;
  margin: 0 10px;
  border: 1px solid #fff;
`
const CourseSpan= styled.span`
  position: absolute;
  left: 20px;
  bottom: 20px;
  background-color: rgba(0, 0, 0, 0.36);
  color: #fff;
  padding: 0 10px;
  border: 1px solid #e5e5e5;
  font-size: 0.7rem;
  letter-spacing: 2px;
`
const Quickstart = (props) => {
  return <div css={{
    backgroundColor: '#ecede8',
    width: "100%",
    margin: "0 auto",
    marginTop: 140,
  }}>
    <Link to="/course#ryrm">
      <CourseDiv>
        <CourseImg src={require('./19pic_01.png')} />
        <CourseSpan>日语入门课程</CourseSpan>
      </CourseDiv>
    </Link>
    <Link to="/course#rydj">
      <CourseDiv>
        <CourseImg src={require('./20pic_02.png')} />
        <CourseSpan>日语等级课程</CourseSpan>
      </CourseDiv>
    </Link>
    <Link to="/course#ky">
      <CourseDiv>
        <CourseImg src={require('./21pic_03.png')} />
        <CourseSpan>口语课程</CourseSpan>
      </CourseDiv>
    </Link>
    <Link to="/course#rylx">
      <CourseDiv>
        <CourseImg src={require('./22pic_04.png')} />
        <CourseSpan>日语留学课程</CourseSpan>
      </CourseDiv>
    </Link>
    <Link to="/course#xq">
      <CourseDiv>
        <CourseImg src={require('./23pic_05.png')} />
        <CourseSpan>兴趣课程</CourseSpan>
      </CourseDiv>
    </Link>
    <Link to="/course#ly">
      <CourseDiv>
        <CourseImg src={require('./24pic_06.png')} />
        <CourseSpan>旅游日语</CourseSpan>
      </CourseDiv>
    </Link>
    <Link to="/course#se">
      <CourseDiv>
        <CourseImg src={require('./25pic_07.png')} />
        <CourseSpan>少儿日语</CourseSpan>
      </CourseDiv>
    </Link >
    <Link to="/course#tbdz">
      <CourseDiv>
        <CourseImg src={require('./26pic_08.png')} />
        <CourseSpan>特别定制课程</CourseSpan>
      </CourseDiv>
    </Link>
  </div >
}

export default Quickstart;
