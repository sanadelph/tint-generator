import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './SingleColor.module.css'

const SingleColor = ({rgb,weight,hexColor}) => {
    const [alert, setAlert] = useState(false)
    // console.log(rgb);
    const bg=rgb.join(',')

    useEffect(()=>{
        const timeout=setTimeout(() => {
            setAlert(false)
        }, 3000);
        return ()=>clearTimeout(timeout)
    },[alert])
  return (
    <div 
    className={styles.color}
    style={{backgroundColor:`rgb(${bg})`}}
    onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(`#${hexColor}`)
    }}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hexColor}</p>
        {alert && <p className={styles.copied}>Copied!</p>}

    </div>
  )
}

export default SingleColor