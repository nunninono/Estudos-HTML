function sleepIn (weekday, vacation) {
    if (weekday == false && vacation == false) {
        return true;
    }
    else if (weekday == true && vacation == false) {
        return false;
    }
    else if (weekday == false && vacation == true) {
        return true;
    }
}

function monkeyTruble (aSmile, bSmile) {
    if (aSmile == true && bSmile == true) {
        return true;
    }
    else if (aSmile == false && bSmile == true) {
        return true;
    }
    else if (aSmile == true && bSmile == false) {
        return false;
    }
}

function stringTimes (str, n) {
    var returnString = "";
    for (var i = 0; i < n; i++) {
        returnString += str;
    }
    return returnString;
}

function luckySum (a, b, c) {
    var som = 0;
    if (a != 13) {
        som += a;
    }
    if (b != 13) {
        som += b;
    }
    if (c != 13) {
        som += c;
    }
    return som;
}

function caught_speeding (speed, is_birthday) {
    if (is_birthday == true) {
        speed += 5;
    }
    if (speed > 60 && speed <= 80) {
        return 1;
    }
    if (speed <= 60 && speed > 80) {
        return 0;
    }
}