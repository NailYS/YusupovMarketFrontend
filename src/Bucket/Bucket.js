import classes from './Bucket.module.css'

let URL = 'http://localhost:8080/cart'
const Bucket = (props) => {

    let removeFromCart = (c) => {
        return fetch(URL + "/" + c.id, {
            method: 'DELETE',
            headers: {'Accept': 'application/json', 'Content-type': 'application/json',}
        })
    }

    return (
        <div className={classes.bucket}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOA545N_l61y4xEFEr2zZ7gLjT8UuM4mhanA&usqp=CAU'}/>
            <div><h1 className={classes.cl}>Корзина</h1>
            </div>
            {props.cartdto.map(c => <div>
                <span>
                    <div className={classes.dto_name}>
                        <h2>{c.name}</h2>
                        <h2>{c.price} ₽ <button className={classes.button}
                                                onClick={() => removeFromCart(c)}>ОТМЕНИТЬ</button></h2>
                        <button className={classes.newButton}>Оформить покупку</button>
                    </div>
                </span>
            </div>)}
        </div>
    );
}
export default Bucket;