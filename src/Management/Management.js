import React, {useState} from "react";
import classes from "./Management.module.css";

let URL = 'http://localhost:8080/product'

const Management = () => {
    let idRef = React.createRef();

    let nameRef = React.createRef();

    let countRef = React.createRef();

    let priceRef = React.createRef();


    const Send = () => {
        return fetch(URL, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-type': 'application/json',
            }, body: JSON.stringify({
                id: idRef.current.value,
                name: nameRef.current.value,
                count: countRef.current.value,
                price: priceRef.current.value
            })
        });
    }

    let idDelete = React.createRef();

    const Delete = () => {
        return fetch(URL + '/' + idDelete.current.value, {
            method: 'DELETE', headers: {
                'Accept': 'application/json', 'Content-type': 'application/json',
            }
        })
    }

    return <div>
        <label>
            <h4 className={classes.text}>ID</h4>
            <div>
                <input className={classes.name_area} type={"number"} name={'name0'} ref={idRef}/>
            </div>
        </label>

        <label>
            <h4 className={classes.text}> Имя товара</h4>

            <div>
                <input className={classes.name_area} ref={nameRef}/>
            </div>
        </label>
        <label>
            <h4 className={classes.text}>Количество</h4>
            <div>
                <input className={classes.name_area} type={"number"} name={'name1'} ref={countRef}/>
            </div>
        </label>
        <label>
            <h4 className={classes.text}>Цена</h4>
            <div>
                <input className={classes.name_area} type={"number"} name={'name2'} ref={priceRef}/>
            </div>
        </label>

        <div>
            <button onClick={Send} className={classes.button}>Добавить товар</button>
        </div>

        <form>
            <label>
                <h4 className={classes.text}>Введите ID товара</h4>
                <div>
                    <input className={classes.name_area} type={"number"} name={'name3'} ref={idDelete}/>
                </div>
            </label>

            <div>
                <button className={classes.deleteButt} onClick={Delete}>Удалить товар</button>
            </div>

        </form>
    </div>
}
export default Management;


