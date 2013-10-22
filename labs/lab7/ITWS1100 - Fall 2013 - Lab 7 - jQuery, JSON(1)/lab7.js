$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "lab7.json",
        dataType: "json"
        success: function(responseData, status){
            var output = "";
            var lab-stuff = "";
            $.each(responseData.menuItem, function(i, item) {
                /* I want to mimic the following structure:
                  <li><a href="projects/lab4/rss.xml" target="_newtab">Lab 4: Create an rss feed </a></li>
                  menuNum is for reference in future choices to allow css styling of specific li elements
                */
                lab-stuff += '<li id="lab' + item.menuNum + '"><a href="' + item.menuURL + '" target="_newtab">' + item.menuName + ': ' + item.menuDesc + '</a></li>';
                output += lab-stuff;
            });
            $("#lab-content").html(output);  //this will append the li elements stored in output to the current ul
        }, error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
});