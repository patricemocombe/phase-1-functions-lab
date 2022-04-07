// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber >= 43)    
    return streetNumber - hq;

    else if (streetNumber <= 41)
    return hq - streetNumber;
};
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) *264;
};
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
    if (start > destination )
    return (start - destination) *264;

    else if (destination > start)
    return (destination - start) * 264;
};
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400)
    return (distanceTravelledInFeet(start, destination) * 0);
        
    else if (distanceTravelledInFeet(start, destination) > 2500)
    return `cannot travel that far`;
        if (distanceTravelledInFeet(start, destination) > 2000)
        return 25;
            if(distanceTravelledInFeet(start, destination) > 400)
            return ((distanceTravelledInFeet(start, destination) - 400) * .02);
        
};

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice (50, 58);
calculatesFarePrice(34, 24);