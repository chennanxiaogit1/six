function ajax(options) {
    //创建ajax对象
    const xhr = new XMLHttpRequest();
    //配置ajax对象 初始化
    xhr.open(options.type, options.url);
    //发送请求
    xhr.send();
    // 监听xhr对象下面的onload事件
    // 当xhr对象接受完响应数据后触发
    xhr.onload = function () {
        console.log(JSON.parse(xhr.responseText));
        // xhr对象申请和发送成功时调用success函数
        options.success(xhr.responseText);
    };
}
ajax({
    type: "get",
    url: "http://musicapi.leanapp.cn/personalized",
    success: function (data) {
        console.log(JSON.parse(data));
    },
});