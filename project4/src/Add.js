import React from "react";

import { useHistory } from "react-router-dom";




const Add = (props) => {
    const history = useHistory();

    //const params = useParams();
    
    //------저장버튼--------
    return(
        <div>
            <div className="inputBox">
             단어 :    
            <input type="text" className="word"/>
            <hr />
             뜻 : 
            <input type="text" className="mean"/>
            <hr />
             예시 : 
            <input type="text" className="ex"/>
            <hr />
             설명 : 
            <input type="text" className="trans"/>
            <hr />
            </div>
            <div>
            <button onClick={() => { history.goBack(); }}>등록</button>
            </div>
        </div>
    );
}




export default Add;
