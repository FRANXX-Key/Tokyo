// script.js

// 获取按钮元素
var button = document.getElementById('redirectButton');

// 添加点击事件监听器
button.addEventListener('click', function() {
    // 在这里指定要跳转的 URL
    var destinationURL = 'ceshi.html';

    // 执行页面跳转
    window.location.href = destinationURL;
});
