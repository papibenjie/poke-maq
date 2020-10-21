import React from 'react'

import "./src/index.css"


export default ({ children }) => {
    return (
        <div style={{
            border: "1px solid black",
        }}>
            {children}
        </div> 
    ) 
}