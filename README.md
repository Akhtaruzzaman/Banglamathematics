## Bangla Mathematics
Bangla unicode calculation, like as normal calculation.
if you want ot calculate 5+4 in bangla, then you call only a function 
which is bdmath and passes the parameter. (parameter must be as string)
Example:
var result=bdmath('৫+৪');


## Example

<p>include js library file:</p>

<pre><code>
<script src="unicodemath.js" type="text/javascript"></script> 
</code></pre>

<p>Js code:</p>

<pre><code>
function call() {
        var a = document.getElementById("txt1").value;
        var b = document.getElementById("txt2").value;
        c = bdmath('(((' + a + ')/100)*' + b + ')+' + a);
        d = bdmath('(((' + a + ')/100)*' + b + ')+' + a,'২');
        document.getElementById("lbl1").innerHTML = 'Total+Vat= '+c;
        document.getElementById("lbl2").innerHTML = 'Total+Vat= '+d;
    }  
</code></pre>
