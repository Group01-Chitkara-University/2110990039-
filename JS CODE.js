< !DOCTYPE html >
    <
    html >
    <
    body >

    <
    h2 > Make a table based on the value of a drop down menu. < /h2>

<
select id = "myselect"
onchange = "change_myselect(this.value)" >
    <
    option value = "" > Choose an option: < /option> <
option value = "customers" > Customers < /option> <
option value = "products" > Products < /option> <
option value = "suppliers" > Suppliers < /option> < /
select >

    <
    p id = "demo" > < /p>

<
script >
    function change_myselect(sel) {
        const dbParam = JSON.stringify({ table: sel, limit: 20 });
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            myObj = JSON.parse(this.responseText);
            text = "<table border='1'>"
            for (x in myObj) {
                text += "<tr><td>" + myObj[x].name + "</td></tr>";
            }
            text += "</table>"
            document.getElementById("demo").innerHTML = text;
        }
        xmlhttp.open("POST", "json_demo_html_table.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    } <
    /script>

<
/body> < /
html >