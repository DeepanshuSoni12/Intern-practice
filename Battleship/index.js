function createMatrix(n)
{
    let battles=n,nonBattles=(n*n)-n
    let cardMatrix=new Array(n)


    for(let i=0;i<n;i++)
    {
        cardMatrix[i]= new Array(n)
    }

    for(let i=0;i<n;i++)
    {
    
        for(let j=0;j<n;j++)
        {
            let temp= Math.random()*10
            if(temp<=5.0)
            {
                if(nonBattles>0)
                {
                    cardMatrix[i][j]=0;
                    nonBattles--
                }
                else{
                    cardMatrix[i][j]=1;
                    battles--
                }
                
            }
            else if(temp>5.0)
            {
                if(battles>0)
                {
                    cardMatrix[i][j]=1;
                    battles--
                }
                else{
                    cardMatrix[i][j]=0;
                    nonBattles--
                }
            }

        }
    }

    console.log(cardMatrix)

    return cardMatrix

}

function displayCards(){

    document.getElementById("head").style.display="none";
    const n=document.getElementById("battlesNumbers").value

    let calculatedWidth = 260*n+150
    document.getElementById("container").style.maxWidth=calculatedWidth+"px";

    const gameMatrix=createMatrix(n)

    gameMatrix.map(function (cardNumber){

        cardNumber.map(
            function(card){
                let divName=document.createElement('div')
                divName.classList.add("cards")
                
                let divFront=document.createElement('div')
                divFront.classList.add("front")
                let frontImg=document.createElement('img')
                frontImg.src="images/front.webp"
                divFront.appendChild(frontImg)
                let img1= document.createElement('img')
                if(card==0)
                {
                    img1.alt="0"
                    img1.src="images/betterLuck.gif"
                }
                else{
                    img1.alt="1"
                    img1.src='images/ship.jpeg'
                }    
                let divBack=document.createElement('div')
                divBack.classList.add("back")
                divBack.appendChild(img1)
        
                divName.appendChild(divFront)
                divName.appendChild(divBack)
        
                document.getElementById("container").appendChild(divName)

            }
        )

       


        
        
    })
    document.getElementById("restart").addEventListener("click", function(){
        window.location.reload()
    });

    var cardArr=document.querySelectorAll(".cards")

    cardArr.forEach((card)=>{
        turns=document.getElementById("battlesNumbers").value;
        card.addEventListener("click", function(){

            
            card.classList.toggle("flipCards")
            let childNodes = card.children;
            let imgChild = childNodes[1].firstChild
            turns--;
      
            if(imgChild.alt==="0")
            {
                if(turns<=0)
                {
                    document.getElementById("output").innerText="Game Over"
                    document.getElementById("restart").style.display="block";
                   

                }
                else
                document.getElementById("output").innerText=turns + " more tries left"

            setTimeout(function(){
                card.classList.toggle("flipCards")
            }, 2000)


            }
            else
            {
                document.getElementById("output").innerText="Congrats you found the battleship!!"
                document.getElementById("restart").style.display="block";
                
            }


        })
    })


}
