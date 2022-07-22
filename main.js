// tính phương trình bậc 2
// ax2+bx+c=0

function giai(form) {
    var x1, x2;
    var x, y, z, delta;

    x = parseInt(form.a.value);
    y = parseInt(form.b.value);
    z = parseInt(form.c.value);

    delta = (y * y - 4 * x  *z)
    if (delta ==0) {
        alert("Phương trình có nghiệm kép!");
        x1 = -y / (2 * x);
        x2 = -y / (2 * x);
        form.x.value = eval(x1);
        form.y.value = eval(x2);
    }else if (delta < 0) {
        alert("Phương trình vô nghiệm!");
    }else{
        alert("Phương trình có hai nghiệm phân biệt!");
        x1 = (-y - Math.sqrt(delta)) / (2 * x);
        x2 = (-y + Math.sqrt(delta)) / (2 * x);
        form.x.value = eval(x1);
        form.y.value = eval(x2);
    }
}