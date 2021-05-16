var input1PN = document.getElementById("pname"); //input
var input1PP = document.getElementById("pprice"); //input
var input1PC = document.getElementById("pcateg"); //input
var input1PD = document.getElementById("pdesc"); //input

var myStore=[] ;
var index;
//======================1================
if( localStorage.getItem("myStoreStorage" ) ==null   )
{
    myStore = [];
    console.log("mafiiii4 data to run")
}
else
{               // string ---> array of object --> JSON.parse()
    myStore = JSON.parse(localStorage.getItem("myStoreStorage"));
    displayProducts();
}









function addProduct()
{
    
    var regex= /^[A-Z][a-z]+[0-9]$/;

    var pNameValue =     input1PN.value; // value;
    if(regex.test(pNameValue))
    {
        var oneProduct = { name : pNameValue , price : pPriceValue , Cat :  pCatValue , Desc : pDescValue }

        myStore.push(  oneProduct  );
    
        // localStorage
        // JSON-----> String ---> JSON.stringify
        localStorage.setItem( "myStoreStorage" ,  JSON.stringify(myStore)  )
    
        // display products
        displayProducts();
    
        //clear Inputs
        clearInputs()

    }
    else
    {


       
    }
    var pPriceValue =     input1PP.value; // value;
    var pCatValue =     input1PC.value; // value;
    var pDescValue =     input1PD.value; // value;

    


}


function clearInputs()
{
    input1PN.value ="";
    input1PP.value ="";
    input1PC.value ="";
    input1PD.value ="";
}





function displayProducts()
{
    var AllTrs =``;
    
    for(var i=0 ;i< myStore.length ;i++  ) // product
    {
        AllTrs += `
                    <tr> 
                        <td>` +  myStore[i].name +`</td>
                        <td>` +  myStore[i].price +`</td>
                        <td>` +  myStore[i].Cat +`</td>
                        <td>` +  myStore[i].Desc +`</td>
                        <td> <button onclick="deleteproduct(`+i+`)" class="btn btn-danger ">Delete </button>     </td>
                        <td> <button onclick="showupdate(`+i+`)" class="btn btn-warning ">UpDate </button>     </td>
                    </tr>
                    `
    }

    document.getElementById("tbody").innerHTML = AllTrs;

}

function deleteproduct(productindex)
{

   myStore.splice(productindex,1);
   displayProducts();
   localStorage.setItem("myStoreStorage",JSON.stringify(myStore));




}

function search()
{
   var searchstore=[];
   for(var i=0;i<myStore.length;i++)
   {
      var now=document.getElementById("searcho").value;
      if (myStore[i].name.includes(now))
      {
         searchstore.push(myStore[i])


      }



   }
   var AllTrs =``;
    
    for(var i=0 ;i< searchstore.length ;i++  ) // product
    {
        AllTrs += `
                    <tr> 
                        <td>` +  searchstore[i].name +`</td>
                        <td>` +  searchstore[i].price +`</td>
                        <td>` +  searchstore[i].Cat +`</td>
                        <td>` +  searchstore[i].Desc +`</td>
                    </tr>
                    `
    }

    document.getElementById("tbody").innerHTML = AllTrs;

}

document.getElementById("upd").style.display="none";
function showupdate(productindex1)
{

    index=productindex1;
    input1PN.value=myStore[productindex1].name;
    input1PP.value=myStore[productindex1].price;
    input1PC.value=myStore[productindex1].Cat;
    input1PD.value=myStore[productindex1].Desc;
    document.getElementById("addo").style.display="none"
    document.getElementById("upd").style.display="inline-block"



}





function update(pro)
{


   myStore[index].name = input1PN.value;
   myStore[index].price= input1PP.value;
   myStore[index].Cat= input1PC.value;
   myStore[index].Desc= input1PD.value;
   localStorage.setItem("myStoreStorage",JSON.stringify(myStore));
   displayProducts();
  
}
