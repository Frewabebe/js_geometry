class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
    isSquare(){
      if(this.length === this.width){
        return true
      }
      else {
        return false
      }
    }
    area(){
      return this.length * this.width
    }
    perimeter(){
      return (this.length + this.width)*2
    }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA === this.sideB && this.sideA=== this.sideC){
    return true
  }
  else {
    return false
  }
}
 isIsosceles(){
   if(this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
     return true
   }
   else{
     return false
   }
 }
 isObtuse(){
   if(this.sideA !== this.sideB && this.sideA!== this.sideC){
   return true
 }
 else {
   return false
 }
}
area(){
  let p = (this.sideA + this.sideB + this.sideC)/2
  let myArea = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))
  return myArea
}
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length (){
    let ab = Math.sqrt(Math.pow(this.x1 - this.x2) + Math.pow(this.y1 - this.y2))
    return (ab)
  }
}
// need to try again..



// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
