export default function ajax(url,fx){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
        xhr.onload = function () {
            try {
                fx(xhr.responseText);
            } catch (e) {
                throw new Error("数据处理失败：" + e.message + "，匿名函数接收到错误格式的数据");
            }

        }.bind(this);
    
    
    xhr.send();
}