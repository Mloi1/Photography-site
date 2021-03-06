const roundNumber = number => Math.round(number * 100) / 100

document.addEventListener("DOMContentLoaded", () => {
    //getting form and values
    const picsQuantity = document.getElementById("picsQuantity")
    const picsSelector = document.getElementById("picsSelector")
    const addToCart = document.getElementById("addToCart")
    const cart = document.getElementsByClassName("cart")[0]
    const basket = {}
    const items = {
        bosa: {
            price: 19.99,
        },
        geyser: {
            price: 19.99,
        },
        glacier: {
            price: 15.99,
        },
        porto: {
            price: 20.99,
        },
        squirrel: {
            price: 20.99,
        },
        stPaul: {
            price: 20.99,
        },
        murales: {
            price: 19.99,
        },
        tavira: {
            price: 19.99,
        }, 
        ice: {
            price: 20.99,
        },
        reflection: {
            price: 20.99,
        },
        towerBridge: {
            price: 20.99,
        },
        peace: {
            price: 20.99,
        }
    }

    const populateCart = basket => {
        cart.innerHTML = ""
        let total = 0;
        Object.entries(basket).forEach(entry => {
            const itemType = entry[0]
            const quantity = entry[1]
            const unitPrice = items[itemType].price
            const subTotal = unitPrice * quantity
            total += subTotal
            const newDiv = document.createElement("div")
            newDiv.classList.add("item-row")
            newDiv.innerHTML = `<span class="item-type">${itemType}: </span><span class="quantity">${quantity}</span><span class="price"> unit price: £${unitPrice}</span><span class="price"> total price: ${roundNumber(subTotal)}</span>`
            cart.appendChild(newDiv)
        })
        const newTotal = document.createElement("div");
        newTotal.classList.add("item-row")
        newTotal.innerHTML = total ? `<span class="grand-total">Total: ${total}</span>` : 'No Items Purchased Yet'
        cart.appendChild(newTotal)
    }
    const goodSelectorsHandler = event => {
        const currentQuantity = basket[event.target.value]
        picsQuantity.value = currentQuantity || 0
    }
    const addToCartHandler = event => {
        event.preventDefault()
        basket[picsSelector.value] = picsQuantity.value
        populateCart(basket)
    }
    // goodsQuantity.addEventListener("blur", goodSelectorsHandler)
    picsSelector.addEventListener("input", goodSelectorsHandler)
    addToCart.addEventListener("click", addToCartHandler)
})

