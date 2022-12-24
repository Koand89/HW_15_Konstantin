// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    const sliceArr=src.slice(srcPos,srcPos+length);
    return dst.splice(dstPos,0,...sliceArr);
    //TODO implement here
}
function count(array, str){
  return array.reduce((a,v) => (v===str? a+1 : a),0);
    //TODO implement here
}
function displayOccurrences(array){
    const occur= array.reduce(function (count, value) {
            return (count[value] ? ++count[value] : (count[value] = 1), count);
        }, {});
   console.log(occur);
    //TODO implement here
}
function ulSurround(strings){
    let modif=strings.map(function (element) {
        return '<li>'+element+'</li>';
    })
    modif.splice(0,0,'<ul>');
    modif.splice(modif.length,0,'</ul>');
    return modif;
    //TODO implement here
}
function lengthSort(array){
    let sorted=array.sort(function (a,b) {
        return a.length-b.length;
    });
    return sorted;
    //TODO implement here
}
