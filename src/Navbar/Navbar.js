import classes from './Navbar.module.css'
import {getCLS} from "web-vitals";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to={"/bucket"} activeClassName={classes.activeLink}><h2>Корзина</h2>
            </NavLink></div>
            <div className={classes.item}><NavLink to={"/products"} activeClassName={classes.activeLink}><h2>Продукты</h2>
            </NavLink></div>
            <div className={classes.item}><NavLink to={"/admin"} activeClassName={classes.activeLink}><h2>Управление<span>  <img src={'https://images.freeimages.com/images/premium/previews/3774/37748878-gear-flat-icon.jpg'}/></span></h2>
            </NavLink></div>
        </nav>
    );
}
export default Navbar;