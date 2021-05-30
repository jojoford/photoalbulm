import React from 'react'
import './style.css'

const PageTitle = (props) => {
    return (
        <React.Fragment>
            <div className="titleWrapper" >
            <h1 className="pageTitle" >{props.title}</h1>
            </div>
        </React.Fragment>
    )
}


export default PageTitle