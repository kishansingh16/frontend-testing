const sortbyAge=require("./app")


test("Testing sort feature",()=>{
    const sortedData=sortbyAge();

    expect(sortedData[0].name).toBe("Shikha Singh");
});

test("Testing last user after sorting",()=>{
    const sortedData=sortbyAge();

    expect(sortedData[sortedData.length-1].name).toBe("Juhi");
});
test("Testing  if soted data has undefined ",()=>{
    const sortedData=sortbyAge();

    // expect(sortedData).not.toBe(undefined);
    expect(sortedData).not.toBeUndefined;

});


test("Testing  if soted data has length 4 ",()=>{
    const sortedData=sortbyAge();

    // expect(sortedData.length).toBe(4);
    
    expect(sortedData).toHaveLength(4);
});