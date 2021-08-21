var btn=document.getElementById("btn23")
  function fullnames(){ 
  var name1=document.getElementById("inputText").value
  if(name1.length==0){
    document.getElementById("vali1").style.visibility="visible"
    document.getElementById("vali1").style.color="red"
   
  }
  else{
    document.getElementById("vali1").style.visibility="hidden"
 
  }


}

function days(){
var date1=document.getElementById("inputNumber1").value
   uday=date1
  if(date1.length==0 || date1>=32)
  {
    document.getElementById("vali2").style.visibility="visible"
    document.getElementById("vali2").style.color="red"
  }
  else{
    document.getElementById("vali2").style.visibility="hidden"
  }
}
function months(){
  var month1=document.getElementById("inputNumber2").value
     uumonth=month1
  if(month1.length==0 || month1>=13)
  {
    document.getElementById("vali3").style.visibility="visible"
    document.getElementById("vali3").style.color="red"
  }
  else{
    document.getElementById("vali3").style.visibility="hidden"
  }

}
function years(){
  var year1=document.getElementById("inputNumber3").value
  
  if(year1.length==0 || year1.length>=5)
  {
    document.getElementById("vali4").style.visibility="visible"
    document.getElementById("vali4").style.color="red"
  }
  else{
    document.getElementById("vali4").style.visibility="hidden"
  }
}


btn.addEventListener('click',function(e){
    e.preventDefault()
     var name2=document.getElementById("inputText").value
    var date2=document.getElementById("inputNumber1").value
    var month2=document.getElementById("inputNumber2").value
    var year2=document.getElementById("inputNumber3").value
     
    //********validation check
   let valit=inputvalidation(name2,date2,month2,year2);

     if(valit==true){

        agecalculator(name2,date2,month2,year2)
        daydate()

         console.log("ture")
         
     }
     else{
        console.log("false")
     }
     // ********validation check

  });

   
 function agecalculator(n2,d2,m2,y2){
  
    var today = new Date();
    var yy = today.getFullYear();
    var mm = today.getMonth()+1;
    var dd = today.getDate();

    var year;
    var month;
    var day;
    var y = parseInt(y2);
      var year=yy-y;
      var m =parseInt(m2);
      if(m>0 && m<13){
       month = mm-m;;
         if (month<0)
         {
            month = m-mm;
         }
       else{
        month = mm-m;
           }    
          
           }
      else{
          alert("Sorry Your Birthday is not found MONTH ERROR");
          month=" {MONTH ERROR} ";
      }  
      
      var d =parseInt(d2);     
      if(d>0 && d<32){
        day = dd-d;
         if (day<0)
         {
          day = d-dd;
         }
       else{
         day = dd-d;
           }    
          
           }
      else{
          alert("Sorry Your Birthday is not found DAY ERROR" );
          day=" {DAY ERROR}";
      }  
      if(month==month || day==day){
        localStorage.setItem("name",n2)
        localStorage.setItem("yy",year)
        localStorage.setItem("mm",month)
        localStorage.setItem("dd",day)


        if(month==0)
          {
         mon(mm);
         if(day==0)
           {
            document.getElementById("text5").style.color="rgba(4, 241, 115, 0.801)"
            document.getElementById("text4").style.color="rgba(4, 241, 115, 0.801)"
            document.getElementById("text4").innerHTML=" Today Your Age is "
            var age=document.getElementById("text5").innerHTML=(year +" Year ")+(month+" Month " )+(day+" Days")+"";
            document.getElementById("text6").style.visibility="visible"
            document.getElementById("text6").innerHTML=" HAPPY BIRTHDAY TO YOU "
             
         }
         else{
          var age=document.getElementById("text5").innerHTML=(year +" Year ")+(month+" Month " )+(day+" Days");
          document.getElementById("text6").style.visibility="hidden"
        }
      // var age1=document.getElementById("na").innerHTML=" Today Your Age is " 
      // var age=document.getElementById("ma").innerHTML=(year +" Year ")+("Running Month")+(day+" Days");
    } else{
      var age=document.getElementById("text5").innerHTML=(year +" Year ")+(month+" Month " )+(day+" Days");
      document.getElementById("text6").style.visibility="hidden"
    }

      }
     else{
        var age=document.getElementById("text5").innerHTML=("SORRY");
        document.getElementById("text6").style.visibility="hidden"
     }
      // var age =parseInt(document.getElementById("int4").value=(y-yy+" Year")+(m-mm+" Month")+(dd-d+" Days"));
     




}
function mon(na){
if(na==1){
console.log("January");  
}
else if(na==2)
{
console.log("February");  
}
else if(na==3)
{
console.log("March");  
}
else if(na==4)
{
console.log("April");  
}
else if(na==5)
{
console.log("May");  
}
else if(na==6)
{
console.log("June");  
}
else if(na==7)
{
console.log("July");  
}
else if(na==8)
{
console.log("August");  
}
else if(na==9)
{
console.log("September");  
}
else if(na==10)
{
console.log("October");  
}
else if(na==11)
{
console.log("November");  
}
else if(na==12)
{
console.log("December");  
}

}




  function inputvalidation(n,d,m,y){
   if(n==""){
     alert("Enter all input fill")
     return false;
   } 
  if(d==0 || d>=32){
    alert("Enter all input fill")
    return false;
  }
 if(m==0 || m>=13){
  alert("Enter all input fill")
    return false;
  }
  if(y==0){
    alert("Enter all input fill")
    return false;
   }
 else{
  return true
 }


  }

function daydate(){
  ///////////////////////////////////////////////////
var year1=document.getElementById("inputNumber3").value
var date1=document.getElementById("inputNumber1").value
var month1=document.getElementById("inputNumber2").value

let date12=parseInt(date1)
let month12=parseInt(month1)
  let useryear=parseInt(year1)
  console.log(useryear)
  const commonyear=1900
 let usco=useryear-commonyear
 //=============================
 let allMonth=[
    {
      month:1,
      value:1
    },
    {
      month:2,
      value:4
    }
    ,
    {
      month:3,
      value:4
    },
    {
      month:4,
      value:0
    },
    {
      month:5,
      value:2
    },
    {
      month:6,
      value:5
    },
    {
      month:7,
      value:0
    },
    {
      month:8,
      value:3
    },
    {
      month:9,
      value:6
    },
    {
      month:10,
      value:1
    },
    {
      month:11,
      value:4
    },
    {
      month:12,
      value:6
    }
  ]
 //=============================
 //=============================
 let allday=[
   {
    dayname:"Saturday" ,
    dayvalue:0
   },
   {
    dayname:"Sunday" ,
    dayvalue:1
   },
   {
    dayname:"Monday" ,
    dayvalue:2
   },
   {
    dayname:"tusday" ,
    dayvalue:3
   },
   {
    dayname:"Wednesday" ,
    dayvalue:4
   }
   ,{
    dayname:"Thursday" ,
    dayvalue:5
   },{
    dayname:"Friday" ,
    dayvalue:6
   }
 ]
//==============================
 let bdlip= lipyear(usco);
function lipyear(usco){
  let checklipyear=usco%4
    if(checklipyear==0){
      console.log("lipyear")
      return usco/4
    }
    else{
      console.log(" not lipyear")
      return usco/4
     
    }
  }
  

  let totaltime= allsum(date12,month12,bdlip,usco)
  // userday,usermonth,bdlip,cucoyear total sum
  console.log(date1,month1)
  function allsum(uday,umonth,bdlip,usco){
      let mom=0
      let checkyear=usco%4
    if(checkyear==0){
        allMonth.forEach(evalue=>{
          if(evalue.month==umonth)
          {
              if(evalue.month==1||evalue.month==2){
                  let newbdlip=bdlip-1
                  let tosan=uday+evalue.value+newbdlip+usco  
                  mom=tosan
                }
                else{
                     let tosam=uday+evalue.value+bdlip+usco
                     mom=tosam
                   }
              }
            })
            console.log(mom)
         return mom
         }
   
         else{
      allMonth.forEach(e=>{
        if(e.month==umonth){
        let sum = uday+bdlip+e.value+usco
          mom+=sum
         console.log(uday,bdlip,e.value,usco)
        }
      })
      return mom
   }
     
  }
 
 
  

 let day =findday(totaltime)
function findday(totaltime){
    let bad=0
    let inttotaltime=parseInt(totaltime)  
    console.log(inttotaltime)
    let day=inttotaltime%7
    allday.forEach(ev=>{
     if(ev.dayvalue==day){
        localStorage.setItem("dayname",ev.dayname)
     }
    })
 }


///////////////////////////////////////////////////////

}

var getname=localStorage.getItem("name") 
var getyear= localStorage.getItem("yy") 
var getmonth= localStorage.getItem("mm") 
var getday= localStorage.getItem("dd") 
var getdayname=localStorage.getItem("dayname")
document.getElementById("text7").innerText=getname  
document.getElementById("text8").innerHTML=(getyear +" Year ")+(getmonth+" Month " )+(getday+" Days ")+getdayname;


/////////////////////////////////////////////////



/////////////////////////////////////////////////////


  const btntask=document.getElementById("join")
  let list= document.getElementById("out")
  let todoo=[]
  printitem()
  function addname(){
   let getlocalstorage=localStorage.getItem("todo")
    let name=document.getElementById("inputbox").value 
    let timepicker =document.getElementById("timepicker").value 
     
    if(getlocalstorage==null){
     todoo=[]
      alert("Enter tasks")
    }  
    else{
      todoo=JSON.parse(getlocalstorage)
       }

    todoo.push(name+" "+timepicker)

    let setlocalhost=localStorage.setItem("todo",JSON.stringify(todoo))
        printitem()
  }
  
  function printitem(){
   let getlocalstorage=localStorage.getItem("todo")
   let name=document.getElementById("inputbox").value 
    if(getlocalstorage==null){
      todoo=[]
      alert("enter all files")
    }  
    else{
      todoo=JSON.parse(getlocalstorage)
    }
    let newtag=``
    todoo.forEach((element,index) => {
       let time =new Date()
       var timeyear=time.getFullYear()
       var timemonth=time.getMonth()+1;
       var timeday=time.getDate()
       newtag +=` <ul class="hi-out">${element}<span id="data">${timeday}/${timemonth}/${timeyear}</span><span class="hi-out-fornt" onclick="deleteTasks(${index})" ><i class="fas fa-trash-alt"></i></span></ul>`
    });
   list.innerHTML=newtag
   document.getElementById("inputbox").value =""
    
  
  }
  
  
  function deleteTasks(index){
    let getlocalstorage=localStorage.getItem("todo")
    todoo=JSON.parse(getlocalstorage)
    todoo.splice(index,1)
    let setlocalhost=localStorage.setItem("todo",JSON.stringify(todoo))
    printitem()
  }
  
  btntask.addEventListener('click',addname)
  
//////////////////////////////////////////////

