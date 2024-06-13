// script.js

// 获取按钮元素
var button = document.getElementById('ARK001');

// 添加点击事件监听器
button.addEventListener('click', function() {
    // 在这里指定要跳转的 URL
    var destinationURL = 'ceshi.html';

    // 执行页面跳转
    window.location.href = destinationURL;
});

// 获取按钮元素
var button = document.getElementById('ARK002');

// 添加点击事件监听器
button.addEventListener('click', function() {
    // 在这里指定要跳转的 URL
    var destinationURL = 'ceshi.html';

    // 执行页面跳转
    window.location.href = destinationURL;
});

function addQQFriend() {
    var qqNumber = '2012390487'; // 替换成你的 QQ 号码
    var addUrl = 'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=' + qqNumber;
    window.location.href = addUrl;
}

// 绑定按钮点击事件
document.getElementById('QQ').addEventListener('click', addQQFriend);
