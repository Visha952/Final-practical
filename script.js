function renderProductCard(id) {
    const card = document.getElementById(id);

    const name = card.dataset.name;
    const price = card.dataset.price;
    const stock = card.dataset.stock;

    card.innerHTML = `
        <h2>${name}</h2>
        <p>Price: ₹${price}</p>
        <p>Status: ${stock}</p>
    `;
}

renderProductCard("card1");
