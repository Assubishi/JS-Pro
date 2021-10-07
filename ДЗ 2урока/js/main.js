class ProductList {
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.sumPrice = 0;
        this._fetchProducts();
        this.render();
        this.calcPrice();
        
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
//            block.innerHTML+=item.render();
        }
    }

    calcPrice(){
        for(let good of this.goods){
            this.sumPrice+= Number(good.price);
        }
        console.log(this.sumPrice);
    }
}

class ProductItem{
    constructor(product, img='https://via.placeholder.com/200x150'){
        this.title= product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return   `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>` 
    }
}

class Cart{
    addProduct(){

    }
    deleteProduct(){

    }
    calcTotalPrice(){
        
    }
  
}

class CartProducts{
    editProduct(){

    }
}

let list = new ProductList();



