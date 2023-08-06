const {sum} = require('./app.js')

test('adds 14 + 9 to equal 23',()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})

test('1 Dollar should be 106.58 Yen',function(){
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(5)).toBe(532.92)
})

test('1 Euro is 1.2 dollars',()=>{
    const {fromEuroToDollar} = require('./app.js')
    expect(fromEuroToDollar(11)).toBe(13.2)
})

test('100 Yen should be 0.625 pounds',()=>{
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(350)).toBe(2.19)
})