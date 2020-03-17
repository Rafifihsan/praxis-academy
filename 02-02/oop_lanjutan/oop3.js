class point{
    variable(x,y){
        this.x =x;
        this.y =y;

    }
    static variable1(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }
}

const p1 = new point(4,3);
const p2 = new point(5,6);

console.log(point.variable1(p1,p2));