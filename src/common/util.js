var events = {};

// 时间戳格式化
function timeToYMD(time) {
    var date = new Date(time);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

// 手机号格式化
function handlePassByMobile(phone) {
    var showPhone =  phone.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
    return showPhone
}

// 手机号校验
function checkPhone(phone){  
    if(!(/^1[3456789]\d{9}$/.test(phone))){  
        return false; 
    } else{
        return true
    }
}
 

exports.timeToYMD = timeToYMD;
exports.handlePassByMobile = handlePassByMobile;
exports.checkPhone = checkPhone;