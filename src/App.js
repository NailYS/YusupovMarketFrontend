import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Bucket from "./Bucket/Bucket";
import Content from "./Content/Content";
import React, {useEffect, useState} from "react";
import Management from "./Management/Management";

function App(props) {

    const [cartdto, setCartdDto] = React.useState(
        [{id: 0, name: 'ППП', count: 0, price: 0.0}]
    )
    useEffect(() => {
        fetch('http://localhost:8080/cart')
            .then(response => response.json())
            .then(cartdto => {
                setCartdDto(cartdto)
            })
    }, [])

    const [product, setProducts] = React.useState([
        {id: 1, name: 'Sprite', count: 23, price: 312.23},
        {id: 2, name: 'Fanta', count: 24, price: 111.123}
    ])
    useEffect(() => {
        fetch('http://localhost:8080/product')
            .then(response => response.json())
            .then(product => {
                setProducts(product)
            })
    }, [])


    return (
        <BrowserRouter>
            <div className="App-Position">
                <Header/>
                <Navbar/>
                <div className={'all-wrapper'}>
                    <Route path='/products' render={() => <Content product={product}/>}/>
                    <Route path='/bucket' render={() => <Bucket cartdto={cartdto}/>}/>
                    <Route path='/admin' render={() => <Management state={props.state}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
