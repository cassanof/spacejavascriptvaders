function Sparo(x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
    this.daRimuovere = false;

    this.show = function() {
        fill(0 ,0 , 0);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.rimuovi = function() {
        this.daRimuovere = true;
    }

    this.colpisce = function(alieno) {
        var d = dist(this.x, this.y, alieno.x, alieno.y);
        if (d < this.r + alieno.r) {
            return true;
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y - 1;
    }

}