import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.headerControl}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3hCvlQteNGigyVy7pLXXL7z9GpGw7HMcUg&usqp=CAU'}/>
            <span className={classes.span}>Море вкуса</span>
        </div>
    );
}
export default Header;