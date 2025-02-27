## Bangla Mathematics
Bangla unicode calculation, like as normal calculation.
if you want ot calculate 5+4 in bangla, then you call only a function 
which is bdmath and passes the parameter. (parameter must be as string)
Example:
var result=bdmath('৫+৪');


## Example

<p>include js library file:</p>

<pre><code>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" type="text/javascript"></script>
<script src="/js/unicodemath.js" type="text/javascript"></script>
<script src="/js/avro-v1.1.4.min.js" type="text/javascript"></script>
</code></pre>

<p>Js code:</p>

<pre><code>
    $(function () {
        $('.avro-text').avro();
    });
    function cal() {
        var a = $("#txt1").val();
        var b = $("#txt2").val();
        var c = bdmath(`(((${a})/100)*${b})+${a}`);
        var d = bdmath(`(((${a})/100)*${b})+${a}`, '২');
        $("#lbl1").html('Total+Vat= ' + c);
        $("#lbl2").html('Total+Vat= ' + d);
    }
</code></pre>


[Js fiddle](//jsfiddle.net/mdakhtaruzzaman/515k7a8m/19/embed/)
