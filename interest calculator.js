let data = [{principal : 2500, time : 1.8}, {principal : 1000, time : 5}, {principal : 3000, time : 1}, {principal : 2000, time : 3}];

const interestCalculator = (data) => {
for(let i in data){
  if(data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3){
    data[i].rate = 3;
  }
  else if(data[i].principal >= 2500 && data[i].time >= 3){
    data[i].rate = 4;
  }
  else if(data[i].principal < 2500 || data[i].time <= 1){
    data[i].rate = 2;
  }
  else{
    data[i].rate = 1;
  }

  let interest = (data[i].principal * data[i].rate * data[i].time) / 100;
  data[i].interest = interest;
}
let interestData = data;
console.log(interestData);
return interestData;
}
interestCalculator(data);