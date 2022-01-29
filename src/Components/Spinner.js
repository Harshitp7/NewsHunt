import React from 'react'
import loading from './loading.gif'
import LoadingDark from './LoadingDark.gif'
const Spinner = (props)=> {
        
        return (
            <div className="text-center">
                <img  className="my-3" src={props.mode==='light'?`${loading}`:`${LoadingDark}`} alt="loading" />
            </div>
        )
    
}

export default Spinner