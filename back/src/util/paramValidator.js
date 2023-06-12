// 맵 자료형을 인자로 받아 params에
// 정의되어 있는지 확인한 후 배열로 반환 

/**
 * @param {*} data 
 * @param {*} params 
 * @returns 
 */
function parameterValidator(data,params){
    let param = [];
    try{
        for (let p of params){
            if( !d[p] ){
                return false;
            }
            param.push(d[p]);
        }
        return param;
    }catch(e){
        console.log(e);
    }
}
