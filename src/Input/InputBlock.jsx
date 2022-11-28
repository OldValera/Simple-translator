import React, { useState } from "react";
import styles from '../Input/InputBlock.module.scss'
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translateRequest } from "../redux/slices/translateSlice";
import debounce from "lodash.debounce";
import { useCallback } from "react";

const InputBlock = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState();

    const changeValue = useCallback(
        debounce((str) => {
            dispatch(translateRequest(str))

        }, 400),
        [],
    )
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Введите текст
            </div>
            {/* <textarea className={styles.input} value={value} onChange={(e) => changeValue(e.target.value)} >
            </textarea> */}
            <textarea className={styles.input} value={value} onChange={(e) => {
                changeValue(e.target.value)
                setValue(e.target.value)
            }} >
            </textarea>
        </div>
    )
}
export default InputBlock;