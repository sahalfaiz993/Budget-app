let totalamount = document.getElementById("total-amount");
let useramount = document.getElementById("user-amount");
const checkamountbutton = document.getElementById("check-amount") ;
const totalamountbutton = document.getElementById("total-amount-button") ;
const producttitle = document.getElementById("product-title") ;
const errormessage = document.getElementById("budget-error") ;
const productitleeror= document.getElementById("product-title-error") ;
const productcosterror = document.getElementById("product-cost-error") ;
const amount = document.getElementById("amount") ;
const expenditurevalue = document.getElementById("expendure-value") ;
const balancevalue = document.getElementById("balance-amount") ;
const list = document.getElementById("list") ;
let tempamount = 0;

totalamountbutton.addEventListener("click",()=>{
    tempamount=totalamount.value;
    if(tempamount===""|| tempamount < 0){
        errormessage.classList.remove("hide")
    }else{
        errormessage.classList.add("hide");
        // set budget
        amount.innerHTML=tempamount;
        // set balance
        balancevalue.innerText=tempamount;
        expenditurevalue.innerText;
        // clear input inbox
        totalamount.value="";
        // function to disable edit and delete button
        const disablebuttons = (bool)=>{
            let aditbuttons =document.getElementById("edit");
            Array.from(editbuttons).forEach((element) =>{
                element.display=bool;
            })
        };
        // function to modify list elem
        const modifyElement = (element,edit=false)=>{
            let parentDiv = element.parentElement;
            let currentBalance = balancevalue.innerText;
            let currentexpennce = expenditurevalue.innerText;
            let parentAmount = parentDiv.queryselector(".amount").innerText;
            if(edit){
                let parentText = parentDiv.queryselector(".product").innerText;
                productTitle.value = parentText;
                useramount.value = parentAmount;
                disableButtons(true); 
            }
            balancevalue.innerText = parseInt
            (currentBalance)+parseInt(parentAmount);
            expenditurevalue.innerText = 
        
            parseInt(currentExpennce) - parseInt(parentAmount);
            parentDiv.remove();  
        };
        const listCreator = (expenseName,expenceValue)=>{
            let sublistContent = document.createElement("div");
            sublistContent.getElementsByClassName.add("sublist-Content", "flex-space");
            list.appendChild(sublistContent);
            sublistContent.innerHTML = `<p class = "product">${expenseName}</p>`;
            let editButton = document.createElement("button");
            editButton.classList.add("fa-solid fa-pen-to-square","edit");
            editButton.style.fontsize = "24px";
            editButton.addEventListener("click",() =>{modifyElement(editButton, true)
            });
            let disableButton = document.createElement("button")
            deleteButton.classList.add("fa-solid fa-trash-slash","delete");
            deleteButton.style.fontsize = "24px";
            deleteButton.addEventListener("click",()=>{
                modifyElement(deleteButton);

            });
            sublistContent.appendChild(editButton);
            sublistContent.appendChild(deleteButton);
           document.getElementById("list").appendChild(sublistContent)
       };
       checkamountbutton.addEventListener("click",() => {
        if(!useramount.value || !productTitle.value){
            producttitleerror.classList.remove("hide");
            return false;
        }
        disablebuttons(false);

        // Expenses


        let expenditure = parseInt(useramount.value);

        // total expensee (existing+new)

        let sum = parseInt(expenditure.innerText)+expenditure;
        expenditure.innerText=sum;

        // total balance (budget-total expenses)

        const  totalbalance = tempamount - sum;
        balancevalue.innerText=totalbalance;

        // Create list

        listCreator(producttitle.value,useramount.value);

        // Empty elementsp
        producttitle.value = "";
        useramount.value = "";

       })

       
    }
})