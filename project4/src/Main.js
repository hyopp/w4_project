import React, { useState } from "react";
//import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';


//---------단어장 틀--------
const Main = (props) => {
    const history = useHistory();


    let [word, setWord] = useState(['ㅋㅋ루삥뽕', '킹받다', '2000원 비싸졌다']);
    let [mean, means] = useState(['의미없음', '화난다', '맞는말했다']);
    let [ex, exs] = useState(['ㅋㅋ루삥뽕 그거아닌데', '아~ 킹받네~', '와씨 이천원비싸짐']);
    let [trans, transfer] = useState(['의미없이 놀리는말 ', '아 진짜 화난다', '뼈맞아서 뼈가부러져서 순살됨=>순살치킨은 2천원 비쌈']);

    return (
        <>
        
        {/* ------기본단어카드-------- */}
        <div className="card-box">
            <div className="card">
                <div className="word-box">
                    <h1> {word[0]} </h1>                    
                    <p>{mean[0]} </p>
                    <p><span>{ex[0]}</span></p>
                    <p>{trans[0]} </p>
                </div>
                <div className="icon">
                    <span onClick={() => { }}>😄</span>
                    <span onClick={() => { }}>🤢</span>
                </div>
            </div>

            <div className="card">
                <div className="word-box">
                    <h1> {word[1]} </h1>
                    <p>{mean[1]} </p>
                    <p><span>{ex[1]}</span></p>
                    <p>{trans[1]} </p>
                </div>
                <div className="icon">
                    <span onClick={() => { }}>😄</span>
                    <span onClick={() => { }}>🤢</span>
                </div>
            </div>

            <div className="card">
                <div className="word-box">
                    <h1> {word[2]} </h1>
                    <p>{mean[2]} </p>
                    <p><span>{ex[2]}</span></p>
                    <p>{trans[2]} </p>
                </div>
                <div className="icon">
                    <span onClick={() => { }}>😄</span>
                    <span onClick={() => { }}>🤢</span>
                </div>
            </div>
        </div>

        {/* --------단어추가버튼------- */}
        <div className="btn">
            <Link to="/Add">
        <button 
        type="button" class="btn btn-light">단어 추가하기</button>
        </Link>


        </div>
        
        </>
    );
}



export default Main;