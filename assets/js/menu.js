fetch('../../menu.json')
.then((resp) => resp.json())
.then((data) => {
    const menu = [...data];

    console.log(menu);
    menu.forEach((section, sIndex) => {
        let sectionTitle = document.createElement("div");
        sectionTitle.id = "menuCategory";

        sectionTitle.innerHTML = `<h2>${section.categoria}</h2>
                                    <ul id='${section.categoria}' class="foodList">`

        document.getElementById(`menuContainer`).appendChild(sectionTitle);

        section.items.forEach((comida, cIndex) => {
            let item = document.createElement("li");
            item.className = "food";

            const { nombre, precio, descripcion, img, isVegan } = comida;


            if (isVegan) {
                item.innerHTML = `<div class="foodImg"><img src="${img}" alt=""></div>
                                    <div class="foodInfo">
                                        <div class="mainInfo">
                                            <h3 class="name">${nombre}</h3>
                                            <div class="dotedLine"></div>
                                            <h3 class="price">$${precio}</h3>
                                        </div>
                                        <p>${descripcion}</p>
                                        <h4>VEGAN</h4>
                                    </div>`;
            } else {
                item.innerHTML = `<div class="foodImg"><img src="${img}" alt=""></div>
                                    <div class="foodInfo">
                                        <div class="mainInfo">
                                            <h3 class="name">${nombre}</h3>
                                            <div class="dotedLine"></div>
                                            <h3 class="price">$${precio}</h3>
                                        </div>
                                        <p>${descripcion}</p>
                                        <h4 class="no-Opacity">NOT VEGAN</h4>
                                    </div>`;
            }

            document.getElementById(`${section.categoria}`).appendChild(item);

        });
    });
});


/* <div class="menuCategory">
    <h2>CATEGORY</h2>

    <ul class="foodList">
        <li class="food">
            <div class="foodImg"><img src="./assets/images/Falafel.png" alt=""></div>
            <div class="foodInfo">
                <div class="mainInfo">
                    <h3 class="name">Falafel</h3>
                    <div class="dotedLine"></div>
                    <h3 class="price">$9.99</h3>
                </div>
                <p>This is an item on your menu. Give your item a brief description</p>
                <h4>VEGAN</h4>
            </div>
        </li>
    </ul>
</div> */