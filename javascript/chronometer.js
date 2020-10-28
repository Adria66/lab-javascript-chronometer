class Chronometer {

  currentTime = 0;
  intervalId = 0;
  
  constructor() {
    // ... your code goes here

  }
  startClick(callback) {
    // ... your code goes here
    setInterval (() => {
      this.currentTime +=1; 
    }, 1000);
      
  }
  getMinutes() {
    // ... your code goes here
    
    const min = Math.trunc(this.currentTime / 60)
    
    return min;
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0){
      
    return 0;

    } else {
      const sec = Math.trunc(this.currentTime % 60)

      return sec;
    }
      
  }
  twoDigitsNumber() {
    // ... your code goes here
    return ("0" + this.getMinutes())
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return '00:00'
  }
}
