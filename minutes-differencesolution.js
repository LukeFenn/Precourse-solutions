function minutesDifference (prevTime, now) {

let prevIntTime = prevTime.split(':')
let nowIntTime = now.split(':');

let prevMin = (parseInt(prevIntTime[0])) * 60
let prevMin +=parseInt(prevIntTime[1]);
    
let nowMin = (parseInt(nowIntTime[0])) * 60
let nowMin +=parseInt(nowIntTime[1]);    

var minDifference = nowMin - prevMin;

if(minDifference === 1) {
minDifference += " minute";
return minDifference;
} else {
minDifference += " minutes";
return minDifference;
}

return minDifference;
}