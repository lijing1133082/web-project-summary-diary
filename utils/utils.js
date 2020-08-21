//生成随机字符串
let randomString = (len) => {
    if (!len) {
        len = 32;
    }
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    var size = $chars.length;
    var str = '';
    for (var i = 0; i < size; i++) {
        str += $chars.charAt(Math.floor(Math.random() * size));
    }
    return str;
}

//获取地址栏参数
let getParameter = (param) => {
    var re = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(re);
    return (result == null) ? null : unescape(result[2]);
}

export {
    randomString,
    getParameter
}
