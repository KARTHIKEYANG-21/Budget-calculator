var enterMoney=document.getElementById('enter_money');

var money;


var error=document.getElementById('error');
var errorManage=document.getElementById('error_manage');


var RoomRent=document.getElementById('RoomRent');                   //roomrent
var Expenses=document.getElementById('Expenses');                //EMI
var Grocery=document.getElementById('Grocery');                 //grocery
var Bills=document.getElementById('Bills');                     //otherbills
var Date=document.getElementById('date');                       //.value showing nan
console.log(Date);



var showRoomRent=document.getElementById('show_RoomRent');           //budget show
var showExpenses=document.getElementById('show_Expenses');        //EMIshow
var showBalance=document.getElementById('show_Balance');    //balanceshow
var showSaving=document.getElementById('show_save');            //savings show
var showdate=document.getElementById('show_date');              //date show



var loader=document.getElementById('loader');

var evaluate=document.getElementById('evaluate');

var restButton=document.getElementById('reset_button');

var manageDiv=document.getElementById('manage_div');

var resultSection=document.getElementById('result_section');


enterMoney.addEventListener('keyup',showManageMoney);
evaluate.addEventListener('click',showloader);
restButton.addEventListener('click',reload);

function showloader(){
    loader.classList.remove("hidden");
    setTimeout(validateManage,1000);
}



function showManageMoney(e)
{

if(e.keyCode){

    money=e.target.value;

    // validate the input value

    if(isNaN(money) || money==0){

        //dispaly error msg
        error.classList.remove("hidden");
    }
    else{
        //move ahaead and show the manage section div
        error.classList.add("hidden");
        manageDiv.classList.remove("hidden");

}
}

}

function validateManage(){
    
    //hide loader image
   // loader.classList.remove("hidden");
    document.getElementById('loader').style.display='none';
    //validate input fields
    if(RoomRent.value=="" || Expenses.value=="" || Grocery.value=="" || Bills.value==""  || Date.value==""){      //budget,expenses,date
        errorManage.innerHTML="Oops! Value for input fields is not given. please proovide the value for all inputs";
    }else{
        errorManage.innerHTML="";

        //parse the value to integer
        
        var RoomRent_per=parseInt(RoomRent.value);          //budget
        var Expenses_per=parseInt(Expenses.value);          //EMI
        var Grocery_per=parseInt(Grocery.value);
        var Bills_per=parseInt(Bills.value);
        var date_per=Date.value;              //date
        var total = RoomRent_per + Expenses_per +  Grocery_per + Bills_per;   //+ emer_per + save_per

        if(total>money){
            errorManage.innerHTML="Oops! the input values given by you is exceeding your income value. please make sure doesn't exceed incomevalue";
       
        }else{
            //validation is complete now calculate the percentage
            calculate(RoomRent_per,Expenses_per, Grocery_per,Bills_per,date_per);   //emer_per,save_per
        }
    }

}


function calculate(RoomRent,Expenses,Grocery,Bills,Date){          //emergency,saving,
    var RoomRentMoney=money-money*0.2;                  //budget
    var ExpensesMoney=RoomRent+Expenses+Grocery+Bills;                   //expenses
    var BalanceMoney=RoomRentMoney-ExpensesMoney;               //balance
    var savingMoney=BalanceMoney-ExpensesMoney;       //savings
    var dateMoney=Date;                                     //date

    showRoomRent.innerHTML=RoomRentMoney;                       //budget
    showExpenses.innerHTML=ExpensesMoney;                    //expenses
    showBalance.innerHTML=BalanceMoney;                     //balance
    showSaving.innerHTML=savingMoney;                         //savings
    showdate.innerHTML=dateMoney;                               //date
    resultSection.classList.remove("hidden");
}


//reload the page
function reload(){
    location.reload()
}

