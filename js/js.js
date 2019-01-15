function pressedForTime() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var time =  [hour, minute, second].join(':')
    var d8 = [year, month, day].join('/')
    alert("Currently: " + [d8, time].join(' '))
}
