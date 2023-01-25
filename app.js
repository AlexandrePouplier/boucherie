const menu = [
  {
    id: 1,
    title: "Coquille St jacques",
    category: "Traiteur",
    img: "./img/semaine2/coquille2.jpg",
    desc: `Coquille cuite au four avec un sauce au vin blanc`,
  },
  {
    id: 2,
    title: "Croque Monsieur",
    category: "Traiteur",
    img: "./img/semaine2/croque.jpg",
    desc: `Croque monsieur au jambon-fromage`,
  },
  {
    id: 3,
    title: "Viande de boeuf",
    category: "Boucherie",
    img: "./img/boucherie1.jpg",
    desc: `viande de boeuf disponible au magasin`,
  },
  {
    id: 4,
    title: "Saucissons disponible au magasin",
    category: "charcuterie",
    img: "./img/charcuterie1.jpg",
    desc: `Saucisson à l'ail, au jambon, saucisson sec... `,
  },
  {
    id: 5,
    title: "Viande bovine",
    category: "Boucherie",
    img: "./img/charcuterie2.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
   
    return `
            <div class=" menu-item item">
              <div class="image">
                <img src="${item.img}" class="produit" alt="${item.title}" />
              </div>
              <div class="content">
                <h3>${item.title}</h3>
                <div class="category">
                  <div class="cat-item"> ${item.desc}</div>
                </div>
              </div>
            </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Nos produits"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");

  container.innerHTML = categoryBtns;

  const filterBtns = container.querySelectorAll(".filter-btn");

  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuItem);
      if (category === "Nos produits") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
