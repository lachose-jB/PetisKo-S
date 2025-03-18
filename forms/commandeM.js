let order = [];

function addToOrder(dish, price) {
    const dishIndex = order.findIndex(item => item.dish === dish);
    if (dishIndex === -1) {
        order.push({ dish, price, quantity: 1 });
        console.log('Ajouté à la commande: ' + dish + ' - ' + price + '€');
    } else {
        order[dishIndex].quantity++;
    }
    updateOrderList();
}

function removeFromOrder(dish) {
    const dishIndex = order.findIndex(item => item.dish === dish);
    if (dishIndex !== -1) {
        if (order[dishIndex].quantity > 1) {
            order[dishIndex].quantity--;
        } else {
            order.splice(dishIndex, 1);
        }
    }
    updateOrderList();
}

function deleteFromOrder(dish) {
    order = order.filter(item => item.dish !== dish);
    updateOrderList();
}

function updateOrderList() {
    let orderListHtml = '';
    let total = 0;

    order.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        orderListHtml += `
            <div class="order-item">
                <span>${item.dish} (${item.quantity} x ${item.price}€) - ${itemTotal}€</span>
                <button onclick="removeFromOrder('${item.dish}')">-</button>
                <button onclick="deleteFromOrder('${item.dish}')">Supprimer</button>
            </div>
        `;
    });

    document.getElementById('order-list').innerHTML = orderListHtml;
    document.getElementById('total-price').innerText = `${total}€`;
}

function payOrder() {
    alert("Merci pour votre commande ! Payer maintenant.");
}

function cancelOrder() {
    order = [];
    updateOrderList();
}
