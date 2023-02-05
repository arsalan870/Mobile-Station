const newArrivalsID = document.getElementById("new-arrivals");

function addNewArrivals(data) {
  newArrivalsID.innerHTML = "";
  data.forEach((e) => {
    let starStr = "";
    let len = parseInt(e.rating[0]);

    for (let i = 0; i < len; i++) starStr += `<i class="fas fa-star"></i>`;

    if (parseInt(e.rating[2]) > 0) {
        starStr += `<i class="fa-solid fa-star-half-stroke"></i>`;
        for (let i = 0; i < 4 - len; i++) starStr += `<i class="fa-regular fa-star"></i>`;
    } else {
        for (let i = 0; i < 5 - len; i++) starStr += `<i class="fa-regular fa-star"></i>`;
    }
    
    newArrivalsID.innerHTML += `
        <div class="pro">
                <img src="${e.imgSrc}">
                <div class="des">
                    <span>${e.company}</span>
                    <h5>${e.modelName}</h5>
                    <div class="star">
                        ${starStr}
                    </div>
                    <h4>${e.price}</h4>
                    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                </div>
            </div>
        `;
  });
}
addNewArrivals(newArrivals);
