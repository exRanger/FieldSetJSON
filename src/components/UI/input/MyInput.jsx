import React, {forwardRef} from 'react'
import classes from './MyInput.module.css'

export default forwardRef(function MyInput(props, ref) {
    return (
        <input ref={ref} className={classes.MyInput} {...props}/>
    )
})
