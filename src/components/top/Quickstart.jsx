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
  const list = [
    {
      link: "/course#ryrm",
      img: "19pic_01.png",
      title: "日语入门课程"
    },
    {
      link: "/course#rydj",
      img: "20pic_02.png",
      title: "日语等级课程"
    },
    {
      link: "/course#ky",
      img: "21pic_03.png",
      title: "口语课程"
    },
    {
      link: "/course#rylx",
      img: "22pic_04.png",
      title: "日语留学课程"
    },
    {
      link: "/course#xq",
      img: "23pic_05.png",
      title: "兴趣课程"
    },
    {
      link: "/course#ly",
      img: "24pic_06.png",
      title: "旅游日语"
    },
    {
      link: "/course#se",
      img: "25pic_07.png",
      title: "少儿日语"
    },
    {
      link: "/course#tbdz",
      img: "26pic_08.png",
      title: "特别定制课程"
    },
  ];
  return <div css={{
    backgroundColor: '#ecede8',
    width: "100%",
    margin: "0 auto",
    marginTop: 140,
  }}>
    {list.map(post => {
      return <Link to={post.link}>
        <CourseDiv>
          <CourseImg src={require('./' + post.img)} />
          <CourseSpan>{post.title}</CourseSpan>
        </CourseDiv>
      </Link>
    }
    )}
  </div >
}

export default Quickstart;
