function bdmath(expression, precision) {
    try {
        let numericExpression = replaceBantoEng(expression);
        let result = eval(numericExpression);

        if (precision !== undefined) {
            result = parseFloat(result).toFixed(parseInt(replaceBantoEng(precision)));
        }

        return replaceEngToBan(result.toString());
    } catch {
        return '<span style="color:red">NaN</span>';
    }
}

function replaceBantoEng(str) {
    return str.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
}

function replaceEngToBan(str) {
    return str.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
}