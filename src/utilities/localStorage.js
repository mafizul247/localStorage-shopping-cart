const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartLocalStorage = (cart) => {
    const cartSting = JSON.stringify(cart);
    localStorage.setItem('cart', cartSting);
}

const addToLocalStorage = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartLocalStorage(cart);
}

const removeCartFromLocalStorage = (id) => {
    const cart =getStoredCart();
    const remaining = cart?.filter(idx => idx !== id);
    saveCartLocalStorage(remaining); 
}


export { addToLocalStorage, getStoredCart, removeCartFromLocalStorage };
