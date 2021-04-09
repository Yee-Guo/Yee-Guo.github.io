// 点击图片或播放，获取li索引index
var index = 0; //li初始索引0
// 通过元素获取
var li = $(".banner ul li");
var img = $(".music .m_img img");
var text = $(".music .m_text");
var prev = $(".music .m_btn .m_prev");
var play = $(".music .m_btn .m_play");
var next = $(".music .m_btn .m_next");
var mp3 = $(".music .m_mp3");
var flag = false;//代表歌曲是否播放 true播放
var close = true;//代表播放器是否显示 默认显示

// 获取点击事件的索引
li.click(function () {
    index = $(this).index();

    show();
    // change_bg(index);


});
function show() {//播放歌曲
    //更换背景图  
    // console.log(1);
    change_bg(index + 1);
    change_img_text(index + 1);
    img_rotate();
    play_mp3();
    change_btn_title();
    // play.click();


}
function change_bg(idx) {//更换背景图
    // indx = idx;
    // console.log(indx);
    // console.log(1),
    $("body").css({
        //动态传入图片名称 用数字命名，this.index+1
        "background": "url(/musicdemo/image/" + idx + ".jpg) no-repeat",
        "background-size": "1270px",
        "background-position": "center"

    })
}
//改变播放器图片。文本
function change_img_text(idx) {
    img.attr("src", "image/" + idx + ".jpg");
    text.html(li.eq(index).attr("title"));
    //获取li的title属性 也就是歌名，用html插入进去
}
//让播放按钮变化
function change_btn_title() {

    // a.addClassname("m_pause");
    //通过给类先移除类名，再添加类名，然后添加的类名写对应样式
    play.removeClass("m_play");
    play.addClass("m_pause");
    play.attr("title", "暂停");
}
// 图片旋转
function img_rotate() {
    // console.log(1);
    // li的子节点img 先把所有的都移除这样点完其中一个，
    // 再点另外的，之前的不转了
    //再给点击的加一个动画的类
    li.children().removeClass("img_rotate");
    li.eq(index).children().addClass("img_rotate");
}
function play_mp3() {
    mp3.attr("src", li.eq(index).attr("datasrc"));
    mp3.get(0).play();
    //改变歌曲播放状态
    flag = true;
}
play.click(function () {
    if (flag) {
        //暂停歌曲
        mp3.get(0).pause();
        //让图片旋转动画去除
        li.eq(index).children().removeClass("img_rotate");
        //去除暂停效果，加播放效果
        play.removeClass("m_pause").addClass("m_play").attr("title", "播放")
        // false代表暂停了
        flag = false;
        // console.log("flag");
    }
    else {

        mp3.get(0).play();
        li.eq(index).children().addClass("img_rotate");
        play.removeClass("m_play").addClass("m_pause").attr("title", "暂停")
        flag = true;
        // console.log("flag");
        //解决第一次点播放，背景没变的bug，
        change_bg(index + 1);
    }

});
// 上一首
prev.click(function () {
    index--;
    //如果下边为负数，再重新赋予length-1
    if (index < 0) {
        index = li.length - 1;
    }

    // play.removeClass("m_pause").addClass("m_play").attr("title", "播放")
    show();
});
//下一首
next.click(function () {
    index++;
    if (index > li.length - 1) {
        index = 0;
    }
    show();
})

$(".m_close").click(function () {

    if (close) {
        $(this).addClass("m_open");
        //动画：向左500ms
        $(".music").animate(
            { left: '-530px' }, 500);
        close = false;
    } else {
        $(this).removeClass("m_open");

        $(".music").animate(
            { left: '0px' }, 500);
        close = true;
    }
})