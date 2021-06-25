export default class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.points = 0;
    this.level = 0;
  }
  addPoints(pointAmount){
    this.points += pointAmount;
  }
  addLevel(){
      this.level += 1;
  }
}
