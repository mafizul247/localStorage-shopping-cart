import React, { useEffect, useState } from "react";
import Bottle from "../../Bottle/Bottle";
import { addToLocalStorage, getStoredCart } from "../../../utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("bottles.json")
            .then((res) => res.json())
            .then((data) => {
                setBottles(data);
            });
    }, [setBottles]);

    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart();

            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles?.find(bottle => bottle.id === id);
                if(bottle) {
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart)
        }
    }, [bottles])

    const handleAddToCart = (bottle) => {
        /* if(!Array.isArray(cart)){
            return "Cart is not array";
        } */

        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    };
    // console.log(cart);

    return (
        <div>
            {/* <H3>Total Bottles is {bottles?.length}</H3> */}
            <h3 className="text-center my-2">Total Bottles is {bottles?.length}</h3>
            <h4 className="text-center my-2">Total Cart {cart?.length || 0}</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {bottles?.map((bottle) => (
                    <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;
