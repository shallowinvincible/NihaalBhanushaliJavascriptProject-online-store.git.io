let items = []
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

            Price.textContent = item.price
           
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
            const listItems = document.createElement('pli')

            const Title = document.createElement('h3')

            Title.textContent = item.title

            const img = document.createElement('img')

            img.src=item.image
            img.width=200

            const prevprice= document.createElement('span')

            prevprice.textContent = item.price
           
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
    
    