import React from 'react'
import cl  from './MyWindow.module.css'

export default function MyWindow({children, visible, setVisible}) {
    
    const rootClasses = [cl.MyWindow] 

    if(visible){
        rootClasses.push(cl.active)
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={()=> {setVisible(false)}}>
            <div className={cl.MyWindowContent} onClick={(e)=> {e.stopPropagation()}}>{children}</div>
        </div>
    )
}
