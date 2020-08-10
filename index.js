var data=require('./data')
function getjoke(){
    var random=Math.random()
    var res=Math.floor(random*100)
    if(res>56) res=res-56;
    return data[res];
}
module.exports={getjoke:getjoke}
