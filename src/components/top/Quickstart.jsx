import './quickstart.css'
import React from 'react';
import Link from "gatsby-link"
const Index = (props) => {
  return <div css={{
    backgroundColor: '#ecede8',
     width: "100%",
    margin: "0 auto",
    marginTop: 140,
    position: "fixed",
    zIndex: 100
  }}>
    <div className="quickstart">
      <Link to="/course#ryrm">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./19pic_01.png')} />
          <span className="quickstart-nr-span" >日语入门课程</span>
        </div>
      </Link>
      <Link to="/course#rydj">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./20pic_02.png')} />
          <span className="quickstart-nr-span" >日语等级课程</span>
        </div>
      </Link>
      <Link to="/course#ky">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./21pic_03.png')} />
          <span className="quickstart-nr-span" >口语课程</span>
        </div>
      </Link>
      <Link to="/course#rylx">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./22pic_04.png')} />
          <span className="quickstart-nr-span" >日语留学课程</span>
        </div>
      </Link>
      <Link to="/course#xq">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./23pic_05.png')} />
          <span className="quickstart-nr-span" >兴趣课程</span>
        </div>
      </Link>
      <Link to="/course#ly">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./24pic_06.png')} />
          <span className="quickstart-nr-span" >旅游日语</span>
        </div>
      </Link>
      <Link to="/course#se">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./25pic_07.png')} />
          <span className="quickstart-nr-span" >少儿日语</span>
        </div>
      </Link>
      <Link to="/course#tbdz">
        <div className="quickstart-nr">
          <img  className="quickstart-nr-img" src={require('./26pic_08.png')} />
          <span className="quickstart-nr-span" >特别定制课程</span>
        </div>
      </Link>
    </div>
  </div>
}

export default Index;