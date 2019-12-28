 
var alert = document.getElementById("danger");
var success = document.getElementById("success");

(function($) {

var rent = function() {
    $("#rent_btn").on('click', function(e) {
      

        console.log(' renting btn clicked ');
        var today = new Date();
        console.log(today.toTimeString());
        var location_start =  document.getElementById("pich_up").value ;
        var location_drop =  document.getElementById("drop_off").value ;
        var pickup_date =  document.getElementById("book_pick_date").value ;
        var drop_date =  document.getElementById("book_off_date").value ;
        var time_calender =  document.getElementById("time_pick").value ;

        if (location_start =="" || location_drop =="" || pickup_date =="" || drop_date =="" || time_calender ==""  ) {
            if (location_start =="" && location_drop =="" && pickup_date =="" && drop_date =="" && time_calender =="" ) {
                alert('please complete the informations in the form');
            }else{
                if (location_start =="") {
                    //show alert visibility 
                     alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de start location est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                        });
                    }, 4000);
                }
                if (location_drop =="") {
                    //visibility 
                     alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de drop location est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                        });
                    }, 4000);
                }
                if (pickup_date =="") {
                    //visibility 
                       alert.style.visibility="visible";
                   //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de start date  est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                        });
                    }, 4000);
                }
                if (drop_date =="") {
                    //visibility 
                      alert.style.visibility="visible";
                    //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de drop date  est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                        });
                    }, 4000);
                }
                if (time_calender =="") {
                    //visibility 
                      alert.style.visibility="visible";
                    //create alert 
                   alert.innerHTML="<strong> Erreur  </strong>   - Champ de calendrier est vide  ";
                   //show alert 
                    window.setTimeout(function() {
                        $("#danger").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                        });
                    }, 4000);
                }
            }
           
        }else{
            console.log('pick location :'+ location_start);
            console.log('drop location :'+ location_drop);
            console.log('pick date :'+ pickup_date);
            console.log('drop date :'+ drop_date);
            console.log('date on calender :'+ time_calender);
 
        
        if (location_start.length < 2 ) {
            //visibility 
              alert.style.visibility="visible";
            //create alert 
            alert.innerHTML="<strong> Erreur  </strong>   -  le champ de location start doit avoir plus que 2 lettres et pas d'espaces  ";
            //show alert 
             window.setTimeout(function() {
                 $("#danger").fadeTo(500, 0).slideUp(500, function(){
                     $(this).remove(); 
                 });
             }, 4000);
        }
        if (location_drop.length < 2 ) {
            //visibility 
             alert.style.visibility="visible"; ;
            //create alert 
            alert.innerHTML="<strong> Erreur  </strong>   - le champ de location drop doit avoir plus que 2 lettres et pas d'espaces   ";
            //show alert 
             window.setTimeout(function() {
                 $("#danger").fadeTo(500, 0).slideUp(500, function(){
                     $(this).remove(); 
                 });
             }, 4000);
        }

        var date1 = $("#book_pick_date").datepicker('getDate').getTime(); 
        var date2 = $("#book_off_date").datepicker('getDate').getTime(); 
       
        var same = today.getTime() === date1 ;
        var notSame = today.getTime() !== date1 ;
        var before = today.getTime() <= date1 ;
        console.log("today and start day are the same : " + same);
        console.log("today and start day aren't the same   : " + notSame);

        console.log(dates.compare(date1 , date2));
        
        if (dates.compare(date1 , date2) == 1) {
            //visibility 
              alert.style.visibility="visible"; ;  
           //create alert 
           alert.innerHTML="<strong> Erreur  </strong>   - la date de départ depasse la date de fin  ";
           //show alert 
            window.setTimeout(function() {
                $("#danger").fadeTo(500, 0).slideUp(500, function(){
                    $(this).remove(); 
                });
            }, 4000);
        }
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

    }


    });
    };
    rent();
 
      
})(jQuery);
        
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
 