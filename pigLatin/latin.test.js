let main = require("./latin")

test ('apple should return appleway', () => {
 
    let test = main.translate('apple');
    expect(test).toEqual('appleway');
})

test ('else should return elseway', () => {
 
    let test = main.translate('else');
    expect(test).toEqual('elseway');
})

test ('giraffe should return iraffegay', () => {
 
    let test = main.translate('giraffe');
    expect(test).toEqual('iraffeway');
})
test(`oval should return ovalway`, () => {
    let test = main.translate('oval');
    expect(test).toEqual('ovalway');
})
