//to display data


function showInput()
{
     var p = document.getElementById("player_number").value;
     var y=localStorage.getItem("myValue");  

     let p_string=p.toString();
     let y_string=y.toString();

     let data1=[];
     let data2=[];


     
     if (p == "")
     {
          alert("Please enter the number");
          window.location.reload();

     }
    

     for (var i=0; i<p_string.length; i++)
     {
          data1.push(p_string[i]);
     }


     for (var i = 0; i<y_string.length; i++)
     {
          data2.push(y_string[i]);
     }

     let c1=0;
     for(var i=0;i<data1.length;i++)
     {
          if(data1[i]==data2[i]){
           c1++;
          }
     }
     console.log(c1);
         
    document.getElementById("display_data").innerHTML=c1+" "+"correct guesses";

  		  
}