class Timetable{
    constructor(){

    }

    display(){
//creating  the student object and calling hide function 
 if (gameState ===2 ){
     
    
    inp1=createInput();
    inp1.position(60,200);
    
    inp2=createInput();
    inp2.position(60,100);
    
    inp3=createInput();
    inp3.position(260,100);
    
    inp4=createInput();
    inp4.position(460,100);
    
    inp5=createInput();
    inp5.position(60,200);
    
    inp6=createInput();
    inp6.position(260,200);
    
    inp5=createInput();
    inp5.position(460,200);
    
    inp6=createInput();
    inp6.position(60,300);
    
    inp7=createInput();
    inp7.position(260,300);
    
    inp8=createInput();
    inp8.position(460,300);
    
    inp9=createInput();
    inp9.position(60,400);
    
     inp10=createInput();
    inp10.position(260,400);
    
    inp5=createInput();
    inp5.position(460,400);
          background("yellow");
           //st=new Student();
           //st.hide();
           for(var i=50;i<300;i=i+100){
              for(var j=50;j<500;j=j+100 )
                       line(i, j, i+400, j);
                   }
         
                   for(var i=50;i<700;i=i+200){
                      for(j=50;j<400;j=j+200 )
                               line(i, j, i, j+200);
                           }
  
      }
  }}
  