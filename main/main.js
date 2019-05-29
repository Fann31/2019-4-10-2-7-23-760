module.exports = function main(inputs) {
    var {distance,parkTime} = inputs;

    let price = parkTime*0.25;
    if(distance > 8){
        price += (distance-8) * 1.2;
        distance = 8;
    }
    price += ((distance -= 2) > 0) ? (distance * 0.8) +6 : 6;
    price = (price%1 >= 0.5) ? Math.ceil(price) : Math.floor(price);
    return price;
};
