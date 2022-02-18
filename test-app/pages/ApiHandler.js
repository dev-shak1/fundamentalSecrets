import React, { useState } from 'react'
import styles from '../styles/apiHandler.module.css'
import { buttonClicked } from "../services/index"

export const ApiHandler = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        buttonClicked("TestUser")
            .then(response => {
                console.log(response);
                setCount(count + 1);
            });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                NextJS Test App
            </h1>
            <button className={styles.button} onClick={handleClick}>CONNECT</button>
            <span>Clicked {count}</span>
        </div>
    )
}
