Number.constrain = function(x,a,b) {
    if (x < a) return a;
    else if (x > b) return b;
    else return x;
}
