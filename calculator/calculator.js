var btn_clear = document.getElementById("clear");
var btn_brackets_open = document.getElementById("brackets_open");
var btn_brackets_close = document.getElementById("brackets_close");
var btn_percentage = document.getElementById("percentage");
var btn_divide = document.getElementById("divide");
var btn_seven = document.getElementById("seven");
var btn_eight = document.getElementById("eight");
var btn_nine = document.getElementById("nine");
var btn_multiply = document.getElementById("multiply");
var btn_four = document.getElementById("four");
var btn_five = document.getElementById("five");
var btn_six = document.getElementById("six");
var btn_minus = document.getElementById("minus");
var btn_one = document.getElementById("one");
var btn_two = document.getElementById("two");
var btn_three = document.getElementById("three");
var btn_addition = document.getElementById("addition");
var btn_zero = document.getElementById("zero");
var btn_decimal = document.getElementById("decimal");
var btn_delete = document.getElementById("delete");
var btn_answer = document.getElementById("answer");
var text_display = document.getElementById("display");

btn_clear.onclick = function clear() { text_display.innerHTML = "0"; }

btn_one.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "1";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "1";
    }
}

btn_two.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "2";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "2";
    }
}

btn_three.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "3";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "3";
    }
}

btn_four.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "4";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "4";
    }
}

btn_five.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "5";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "5";
    }
}

btn_six.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "6";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "6";
    }
}

btn_seven.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "7";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "7";
    }
}

btn_eight.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "8";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "8";
    }
}

btn_nine.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "9";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "9";
    }
}

btn_zero.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "0";
        text_display.innerHTML = new_text;
    } else {
        text_display.innerHTML = "0";
    }
}
btn_decimal.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + ".";
        text_display.innerHTML = new_text;
    }
}

btn_divide.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "/";
        text_display.innerHTML = new_text;
    }
}

btn_multiply.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "*";
        text_display.innerHTML = new_text;
    }
}

btn_addition.onclick = function insertOne() {
    var current_text = text_display.textContent;
    if (current_text != "0") {
        var new_text = current_text + "+";
        text_display.innerHTML = new_text;
    }
}

btn_minus.onclick = function insertOne() {

    var current_text = text_display.textContent;

    if (current_text != "0") {
        var new_text = current_text + "-";
        text_display.innerHTML = new_text;
    }
}

btn_answer.onclick = function ans() {
    var current_text = text_display.textContent;
    // alert(current_text);
    var ans = eval(current_text);
    text_display.innerHTML = ans;
}

btn_brackets_open.onclick = function putBracket() {
    var current_text = text_display.textContent;
    //var check_text = current_text.charAt(current_text.length - 1);
    //alert(check_text);
    // if (check_text != "0" || check_text != ")" || check_text != "+" || check_text != "-" || check_text != "*" || check_text != "/") {//or ( or any arithmetic sign
    var new_text = current_text + "(";
    text_display.innerHTML = new_text;
    btn_brackets_open.style.display = "none";
    btn_brackets_close.style.display = "inline";
    // }
}

btn_brackets_close.onclick = function putBracket() {
    var current_text = text_display.textContent;
    //var check_text = current_text.charAt(current_text.length - 1);
    //alert(check_text);
    //if (check_text != "0" || check_text != ")" || check_text != "+" || check_text != "-" || check_text != "*" || check_text != "/") {//or ( or any arithmetic sign
    var new_text = current_text + ")";
    text_display.innerHTML = new_text;
    btn_brackets_close.style.display = "none";
    btn_brackets_open.style.display = "inline";
    //}
}

btn_percentage.onclick = function percentage() {
    var current_text = text_display.textContent;
    var ans = eval(current_text / 100);
    text_display.innerHTML = ans;
}

btn_delete.onclick = function deleteChar() {
    var current_text = text_display.textContent;
    var new_text = current_text.substring(0, current_text.length - 1);
    text_display.innerHTML = new_text;
}

