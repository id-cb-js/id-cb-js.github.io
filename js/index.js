/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const products = [
    {
      name: `GPS SS / Tee. Cotton Black`,
      brand: `WTAPS`,
      style: `T-Shirts`,
      category: `tshirts`,
      img: `img/1.png`,
      cost: 110.00,
      quantity: 0
    }, {
      name: `Xenox SS / Tee. Cotton Black`,
      brand: `WTAPS`,
      style: `T-Shirts`,
      category: `tshirts`,
      img: `img/2.png`,
      cost: 110.00,
      quantity: 0
    }, {
      name: `Snap Design SS 02 / Tee. Raco Blue`,
      brand: `WTAPS`,
      style: `T-Shirts`,
      category: `tshirts`,
      img: `img/3.png`,
      cost: 230.00,
      quantity: 8
    }, {
      name: `GPS LS / Tee. Cotton White`,
      brand: `WTAPS`,
      style: `Long Sleeves`,
      category: `longsleeves`,
      img: `img/4.png`,
      cost: 120.00,
      quantity: 0
    }, {
      name: `Blank LS 01 / Tee. Copo Gray`,
      brand: `WTAPS`,
      style: `Long Sleeves`,
      category: `longsleeves`,
      img: `img/5.png`,
      cost: 220.00,
      quantity: 2
    }, {
      name: `1984 Screen LS / Tee. Cotton White`,
      brand: `WTAPS`,
      style: `Long Sleeves`,
      category: `longsleeves`,
      img: `img/6.png`,
      cost: 120.00,
      quantity: 4
    }, {
      name: `Smock / Sweatshirt. Copo Gray`,
      brand: `WTAPS`,
      style: `Sweaters`,
      category: `sweaters`,
      img: `img/7.png`,
      cost: 240.00,
      quantity: 0
    }, {
      name: `Urban Territory. Design Hooded / Sweatshirt. Copo Red`,
      brand: `WTAPS`,
      style: `Sweaters`,
      category: `sweaters`,
      img: `img/8.png`,
      cost: 360.00,
      quantity: 5
    }, {
      name: `GPS / Sweatshirt. Cotton Black`,
      brand: `WTAPS`,
      style: `Sweaters`,
      category: `sweaters`,
      img: `img/9.png`,
      cost: 340.00,
      quantity: 4
    }, {
      name: `Tracks Shorts / Shorts. Nylon. Tussah Olive Drab`,
      brand: `WTAPS`,
      style: `Bottoms`,
      category: `bottoms`,
      img: `img/10.png`,
      cost: 320.00,
      quantity: 0
    }, {
      name: `Jungle England Shorts 01 / Shorts. Cotton. Satin Black`,
      brand: `WTAPS`,
      style: `Bottoms`,
      category: `bottoms`,
      img: `img/11.png`,
      cost: 380.00,
      quantity: 0
    }, {
      name: `Academy Trousers / Trousers. Copo Gray`,
      brand: `WTAPS`,
      style: `Bottoms`,
      category: `bottoms`,
      img: `img/12.png`,
      cost: 310.00,
      quantity: 0
    }, {
      name: `Academy / Trousers. Poly. Taffeta Olive Drab`,
      brand: `WTAPS`,
      style: `Bottoms`,
      category: `bottoms`,
      img: `img/13.png`,
      cost: 340.00,
      quantity: 7
    }, {
      name: `Snap Back / Cap. Copo. Twill Navy`,
      brand: `WTAPS`,
      style: `Accessories`,
      category: `accessories`,
      img: `img/14.png`,
      cost: 140.00,
      quantity: 3
    }, {
      name: `Militia 02 / Cap. Copo. Twill Black`,
      brand: `WTAPS`,
      style: `Accessories`,
      category: `accessories`,
      img: `img/15.png`,
      cost: 120.00,
      quantity: 5
    }, {
      name: `Militia 03 / Cap. Cotton. Canvas Navy`,
      brand: `WTAPS`,
      style: `Accessories`,
      category: `accessories`,
      img: `img/16.png`,
      cost: 120.00,
      quantity: 0
    }, {
      name: `Skivvies. Boxer Black`,
      brand: `WTAPS`,
      style: `Accessories`,
      category: `accessories`,
      img: `img/17.png`,
      cost: 105.00,
      quantity: 9
    }, {
      name: `Skivvies. Sox High Black`,
      brand: `WTAPS`,
      style: `Accessories`,
      category: `accessories`,
      img: `img/18.png`,
      cost: 75.00,
      quantity: 10
    }, {
      name: `Incense Chamber / Tray. Kuumba`,
      brand: `WTAPS`,
      style: `Apothecary`,
      category: `apothecary`,
      img: `img/19.png`,
      cost: 40.00,
      quantity: 0
    }, {
      name: `Agape / Incense. Kuumba`,
      brand: `WTAPS`,
      style: `Apothecary`,
      category: `apothecary`,
      img: `img/20.png`,
      cost: 65.00,
      quantity: 0
    }, {
      name: `Breeze / Fragrance Kuumba Purple`,
      brand: `WTAPS`,
      style: `Apothecary`,
      category: `apothecary`,
      img: `img/21.png`,
      cost: 23.00,
      quantity: 10
    }, {
      name: `Breeze / Fragrance Kuumba Yellow`,
      brand: `WTAPS`,
      style: `Apothecary`,
      category: `apothecary`,
      img: `img/22.png`,
      cost: 23.00,
      quantity: 10
    },
    
  ];
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
  
  // Function: getCourseAsHtmlString
  // Parameters: course:Object
  // Return: String of HTML (<article>)
  function getProductAsHtmlString(product) {
  
    let soldOut = ``; // start with blank as default
    if (product.quantity == 0) {
      soldOut = `<small class="callout">SOLD OUT</small>`;
    }
    // Other ways you could use this...
    //    Sales, limited quantity, soldout
  
    return `<article class="product ${product.category}">
      <h3>${product.name} ${soldOut}</h3>
      <img src="${product.img}" alt="Logo for ${product.name}" class="product-img">
      <ul class="product-info">
        <li>Brand: <strong>${product.brand}</strong></li>
        <li>Style: <strong>${product.style}</strong></li>
          </ul>
      </ul>
      <div class="product-cost">${product.cost}</div>
    </article>`;
  }
  
  // Add or remove ("toggle") the .column-view class on the layout
  // Function: switchLayout
  // Parameters: none
  // Return: none
  function switchLayout() {
    document.getElementById('products').classList.toggle('column-view');
  }
  
  // Only include products under 1300
  // Function: filterByPrice
  // Parameters: prod:Object
  // Return: true if less than 1300, false otherwise
  function filterByPrice(prod) {
    return prod.cost < 1500;
  }
  
  
  // Event listener, will run with each keystroke
  function checkInput(event) {
    const userIsLookingFor = event.target.value.toLowerCase();
   
    const onlyMatchingNames = products.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
    renderProducts(onlyMatchingNames);
  }
  
  
  
  
  // Put all items of a supplied Array into the document
  // Function: renderCourses
  // Parameters: arr:Array
  // Return: none
  function renderProducts(arr) {
    // 1. map() the Array through getCourseAsHtmlString into a new Array
    const arrOfHtml = arr.map(getProductAsHtmlString)
  
    // 2. join() the new Array into a single String of HTML
    const strOfHtml = arrOfHtml.join('\n')
  
    // 3. Put the String into the innerHTML of the document's #courses
    document.getElementById('products').innerHTML = strOfHtml;
  }
  
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  
  
  console.table(products);
  
  // Render courses less than 1300
  const affordableProducts = products.filter(filterByPrice);
  renderProducts(affordableProducts);
  
  
  
  function checkCategory(event) {
    const userIsLookingFor = event.target.value;
  
    const onlyMatchingCategories = products.filter(prod => prod.category == userIsLookingFor);
    renderProducts(onlyMatchingCategories);
  }
  
  
  
  // Find the layout <button>, add a "listener" to wait for a click, then call switchLayout()
  document.getElementById('layout').addEventListener('click', event => switchLayout() )
  
  // Find the <input> field, run checkInput when a user changes the 'input'
  document.getElementById('productName').addEventListener('input', event => checkInput(event) )
  
  // Find the <select> field, run checkCategory when there's a 'change' to the drop down value
  document.getElementById('productCategory').addEventListener('change', event => checkCategory(event) )


