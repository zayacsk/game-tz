import React, { useEffect, useState } from "react";
import './nick-name.css'

const NickName = () => {
    const [ name, setName ] = useState('');
    const [display, setDisplay] = useState('block');

    const btnClick= () => {
        setDisplay('none')
        if (display == 'none'){
            document.getElementsByClassName('nickName').style.display = "block"
        }
    }

    if (display == 'none'){
        document.getElementById('nickName').style.display = "block"
    }

    return(
        <>
            <span style={{ display }} className="inputName">
                <input type="text" placeholder="Enter your nick name" onChange={ event => setName( event.target.value) } value={ name }/>
                <button className="btn btn-primary" onClick={ btnClick }>Ok</button>
            </span>
            <div className="nickName" id="nickName">
                { name }
            </div>
        </>
        
    )
}
export default NickName;