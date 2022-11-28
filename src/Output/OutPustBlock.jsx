import React from "react";
import styles from '../Input/InputBlock.module.scss'
import { useSelector } from "react-redux";

const OutPutBlock = () => {
    const { translatedText, status } = useSelector(state => state.translate);
    console.log(translatedText)
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
            </div>
            <textarea className={styles.input} value={status === 'loading' ? 'Translating...' : translatedText}          >


            </textarea>
        </div>
    )
}
export default OutPutBlock;


// {
//     status == 'loading' ? value = { Translating } : value = { translatedText }
// }