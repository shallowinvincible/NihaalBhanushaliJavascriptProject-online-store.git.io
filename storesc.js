let items = []
let cart = []
let cartlistItems
let i=0

const none = document.querySelector('#nota')


fetch('https://fakestoreapi.in/api/products')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        items = data.products
        console.log(items);
        showNext()
    })
    .catch(function(error){
        console.error(error); 
        
    })

    document.querySelector('#nextbtn').addEventListener('click',showNext)

    function showNext(){
        if(i>=items.length){
            none.innerHTML='END OF LIST'

            
        }
        else{
            i++

            const list = document.querySelector('#listOfItems')
            list.innerHTML=""
            const item = items[i]
            const listItems = document.createElement('li')

            const Title = document.createElement('h3')

            Title.textContent = item.title

            const img = document.createElement('img')

            img.src=item.image
            img.width=200

            const Price = document.createElement('span')

            Price.textContent = `$${item.price}`
           
            listItems.appendChild(Title)
            listItems.appendChild(Price)
            listItems.appendChild(img)
            


            list.appendChild(listItems)
            console.log(i);
            
            
            
        }
        
    }
        
        

        document.querySelector('#prvbtn').addEventListener('click',showprevious)

        function showprevious(){
            if(i<=1){
                none.innerHTML='THIS IS THE FIRST ELEMENT'
            }
            else{
                i--
                
                const previouslist = document.querySelector('#listOfItems')
            previouslist.innerHTML=""
            const item = items[i]
            const listItems = document.createElement('li')

            const Title = document.createElement('h3')

            Title.textContent = item.title

            const img = document.createElement('img')

            img.src=item.image
            img.width=200

            const prevprice= document.createElement('span')

            prevprice.textContent = `$${item.price}`
           
            listItems.appendChild(Title)
            listItems.appendChild(prevprice)
            listItems.appendChild(img)
            


            previouslist.appendChild(listItems)
            
            
        }
        console.log(i);
        
       
       

    }
     document.querySelector('#addtcbtn').addEventListener('click',function(){
            alert('ITEM ADDED TO CART')
        })
    

        // let j=0
        const button = document.querySelector('#addtcbtn')
        const counterDisplay = document.querySelector('#counter')

        button.addEventListener('click',function(){
            // j++
            counterDisplay.innerHTML =cart.length+1
        })
    

        const button2 = document.querySelector('#addtcbtn')
        const cartList = document.querySelector('#cartOfItems');

        button2.addEventListener('click',function(){


        
                // const cartList= document.querySelector('#cartOfItems')
                const item = items[i]
                

                cart.push(item)

            });

            const button3 = document.querySelector('#showCart')
                button3.addEventListener('click',function(){
                    
                    cartList.style.display = "block";
                        cartList.innerHTML = "";

                    if(cart.length===0){
                        cartList.innerHTML = "YOUR CART IS EMPTY"
                        return
                    }
                    cart.forEach(item => {
        const cartlistItems = document.createElement('li');

        const Title = document.createElement('h3');
        Title.textContent = item.title;

        const Price = document.createElement('span');
        Price.textContent = `$${item.price}`;

        const img = document.createElement('img');
        img.src = item.image;
        img.width = 200;

        cartlistItems.appendChild(Title);
        cartlistItems.appendChild(Price);
        cartlistItems.appendChild(img);

        cartList.appendChild(cartlistItems);
    });
});


const hidecart = document.querySelector('#hideCart')

hidecart.addEventListener('click',function(){
    cartList.innerHTML = "";
})
               

                
const remove = document.querySelector('#removecart');

remove.addEventListener('click', function () {
    const currentItem = items[i]; 
    

    // refrence taken from chatgpt
    let found = false;

    for (let k = 0; k < cart.length; k++) {
        if (cart[k].title === currentItem.title) {
            
            cart.splice(k, 1); // Remove item
            found = true;
            break;
        }
    }

    // untill here( did not know what to itterate ,how to find out if the current index item is already in the cart or not and how to remove if found )

    if (found) {
        alert('Item removed from cart!');
        
    } else {
        alert('Item not in cart!');
    }

    
    document.querySelector('#counter').innerHTML = cart.length;

    
    
});

const clearcart = document.querySelector('#clearCart')

clearcart.addEventListener('click',function(){

    cart.length=0
    i=0
    document.querySelector('#cartOfItems').innerHTML='Cart is empty'

    document.querySelector('#counter').innerHTML='0'
    
    alert('ALL ITEMS REMOVED FROM THE CART')
})


            
        
     document.querySelector('#addtcbtn').addEventListener('click',function(){
            alert('ITEM ADDED TO CART')
        })
    
    
