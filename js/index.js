const time = 150000;

const minutes = Math.floor(time / 1000 / 60);
console.log('L5 === minutes', minutes);

const seconds = Math.floor(time / 1000) % 60;
console.log('L8 === seconds', seconds);

class CountDown {
  constructor(expiredDate, onRender, onComplete) {
    this.onRender = onRender;
    this.onComplete = onComplete;
    // Todo: Handle expired
  }
}
