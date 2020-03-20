function Alieno(x, y) {
    this.x = x;
    this.y = y;
    this.r = 7.5

    this.xdir = 1;

    this.consuma = function() {
        this.r = this.r - 2;
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.vaiGiu = function() {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.show = function() {
        fill(0 ,255 , 0);
        rect(this.x, this.y, this.r*2, this.r*2);
    }

}