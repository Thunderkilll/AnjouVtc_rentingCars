 
var alert = document.getElementById("danger");
var success = document.getElementById("success");

(function($) {

var rent = function() {
    $("#rent_btn").on('click', function(e) {
      var erreurs = 0 ;
        //get today's date value 
        console.log(' renting btn clicked ');
        var today = new Date();
        console.log(today.toTimeString());
       //get the value of the inputs 
        var location_start =  document.getElementById("pich_up").value ;
        var location_drop =  document.getElementById("drop_off").value ;
        var pickup_date =  document.getElementById("book_pick_date").value ;
        var drop_date =  document.getElementById("book_off_date").value ;
        var name_client =  document.getElementById("name_client").value ;
        var phone_numb =  document.getElementById("phone_numb").value ;
        //verification of the values  
        if (location_start =="" || location_drop =="" || pickup_date =="" || drop_date =="" || name_client =="" || phone_numb == ""  ) {
            erreurs += 1 ;
            //all of the inputs are empty 
            if (location_start =="" && location_drop =="" && pickup_date =="" && drop_date =="" && name_client =="" && phone_numb == "") {
                erreurs += 1 ;
                //visibility 
             alert.style.visibility="visible"; ;
             //create alert 
             alert.innerHTML="<strong> Erreur  </strong>   - Tout les champs sont vides  ";
             //show alert 
              window.setTimeout(function() {
                  $("#danger").fadeTo(500, 0).slideUp(500, function(){
                      $(this).remove(); 
                      location.reload();
                  });
              }, 4000);
            } 

                if (location_start =="") {
                    erreurs += 1 ;
                    //show alert visibility 
                     alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de start location est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove();
                            location.reload(); 
                        });
                    }, 4000);
                }
                if (location_drop =="") {
                    erreurs += 1 ;
                    //visibility 
                     alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de drop location est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                            location.reload();
                        });
                    }, 4000);
                }
                if (pickup_date =="") {
                    erreurs += 1 ;
                    //visibility 
                       alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de start date  est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove();
                            location.reload(); 
                        });
                    }, 4000);
                }
                if (drop_date =="") {
                    erreurs += 1 ;
                    //visibility 
                      alert.style.visibility="visible";
                    //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - veuillez saisir une date de depot   ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove();
                            location.reload(); 
                        });
                    }, 4000);
                }
                if (name_client =="") {
                    erreurs += 1 ;
                    //visibility 
                      alert.style.visibility="visible";
                    //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - veuillez saisir votre nom   ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                            location.reload();
                        });
                    }, 4000);
                }
            
                if (phone_numb =="") {
                    erreurs += 1 ;
                    //show alert visibility 
                     alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - veuiller saisir un numero de telephone   ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove();
                            location.reload(); 
                        });
                    }, 4000);
                }
            }
          
           
        
            console.log('pick location :'+ location_start);
            console.log('drop location :'+ location_drop);
            console.log('pick date :'+ pickup_date);
            console.log('drop date :'+ drop_date);
            console.log('date on calender :'+ name_client);
 
        
        if (location_start.length < 2 ) {
            erreurs += 1 ;
            //visibility 
              alert.style.visibility="visible";
            //create alert 
            alert.innerHTML="<strong> Erreur  </strong>   -  le champ de location start doit avoir plus que 2 lettres et pas d'espaces  ";
            //show alert 
             window.setTimeout(function() {
                 $("#danger").fadeTo(500, 0).slideUp(500, function(){
                     $(this).remove(); 
                     location.reload();
                 });
             }, 4000);
        }
        if (location_drop.length < 2 ) {
            erreurs += 1 ;
            //visibility 
             alert.style.visibility="visible"; ;
            //create alert 
            alert.innerHTML="<strong> Erreur  </strong>   - le champ de location drop doit avoir plus que 2 lettres et pas d'espaces   ";
            //show alert 
             window.setTimeout(function() {
                 $("#danger").fadeTo(500, 0).slideUp(500, function(){
                     $(this).remove(); 
                     location.reload();
                 });
             }, 4000);
        }

        var date1 = $("#book_pick_date").datepicker('getDate').getTime(); 
        var date2 = $("#book_off_date").datepicker('getDate').getTime(); 
       
        var same = today.getTime() === date1 ; //compare 2 dates 
        var notSame = today.getTime() !== date1 ; //compare 2 dates 
        var before = today.getTime() <= date1 ;//compare 2 dates 
 
        
        if (dates.compare(date1 , date2) == 1) {
            erreurs += 1 ;
            //visibility 
              alert.style.visibility="visible"; ;  
           //create alert 
           alert.innerHTML="<strong> Erreur  </strong>   - la date de départ : "+ pickup_date +" dépasse la date :"+ drop_date + "de fin  ";
           //show alert 
            window.setTimeout(function() {
                $("#danger").fadeTo(500, 0).slideUp(500, function(){
                    $(this).remove();
                    location.reload(); 
                });
            }, 4000);
            
        }
        if (erreurs == 0) {
             
            //visibility 
              success.style.visibility="visible"; ;  
           //create alert 
           success.innerHTML="<strong> Success  </strong>   - vous avez bien remplis la form de reservation merci pour votre attention   ";
           //show alert 
            window.setTimeout(function() {
                $("#success").fadeTo(500, 0).slideUp(500, function(){
                    $(this).remove(); 
                    location.reload();
                });
            }, 4000);
            
        }


    } );
    };
    rent();
 
      
})(jQuery);
        /*
 //visibility 
   success.style.visibility =  "visible" ;
   //create alert 
   success.innerHTML=" <strong>Yeppi</strong> - vous avez réserver avec success  ";
   //show alert 
    window.setTimeout(function() {
        $("#success").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 4000);
        */
        //var dd = String(today.getDate()).padStart(2, '0');
       // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        //var yyyy = today.getFullYear();
        
        //today = mm + '/' + dd + '/' + yyyy;
        //console.log("local date : " + today);
      
      // var same = today.getTime() === pickup_date.getTime();
       //var notSame = today.getTime() !== pickup_date.getTime();

       //console.log("the same date : " + same);
       //console.log("not the same date : " + notSame);
        

 
    var dates = {
        convert:function(d) {
            // Converts the date in d to a date-object. The input can be:
            //   a date object: returned without modification
            //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
            //   a number     : Interpreted as number of milliseconds
            //                  since 1 Jan 1970 (a timestamp) 
            //   a string     : Any format supported by the javascript engine, like
            //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
            //  an object     : Interpreted as an object with year, month and date
            //                  attributes.  **NOTE** month is 0-11.
            return (
                d.constructor === Date ? d :
                d.constructor === Array ? new Date(d[0],d[1],d[2]) :
                d.constructor === Number ? new Date(d) :
                d.constructor === String ? new Date(d) :
                typeof d === "object" ? new Date(d.year,d.month,d.date) :
                NaN
            );
        },
        compare:function(a,b) {
            // Compare two dates (could be of any type supported by the convert
            // function above) and returns:
            //  -1 : if a < b
            //   0 : if a = b
            //   1 : if a > b
            // NaN : if a or b is an illegal date
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(a=this.convert(a).valueOf()) &&
                isFinite(b=this.convert(b).valueOf()) ?
                (a>b)-(a<b) :
                NaN
            );
        },
        inRange:function(d,start,end) {
            // Checks if date in d is between dates in start and end.
            // Returns a boolean or NaN:
            //    true  : if d is between start and end (inclusive)
            //    false : if d is before start or after end
            //    NaN   : if one or more of the dates is illegal.
            // NOTE: The code inside isFinite does an assignment (=).
           return (
                isFinite(d=this.convert(d).valueOf()) &&
                isFinite(start=this.convert(start).valueOf()) &&
                isFinite(end=this.convert(end).valueOf()) ?
                start <= d && d <= end :
                NaN
            );
        }
    }
 