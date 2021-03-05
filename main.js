var shoppingCart = [];

function addItem() {
    var type = document.getElementById('type').value;
    var quantity = document.getElementById('quantity').value;

    if (type == '' || quantity == '') {
        alert('Field must not be empty');
        return;
    }
    var newItem = new Item(type, quantity);
    shoppingCart.push(newItem);

    var newListItem = document.createElement('li');
    newListItem.innerHTML = newItem.type + ', ' + newItem.quantity;
    document.getElementById('shopping-cart').appendChild(newListItem);
}

function showCart() {
    var element = document.getElementById('shopping-cart');
    var status = element.className;
    if (status === 'show') {
        element.style.display = 'none';
        element.setAttribute('class', 'hide');
    } else {
        element.style.display = 'block';
        element.setAttribute('class', 'show');
    }
}