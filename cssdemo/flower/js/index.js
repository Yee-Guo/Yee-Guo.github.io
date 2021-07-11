
(function () {

    // alert("页面载入时，自动调用js函数。");
    console.log(111);
    tab();
    $("login").onclick = function () {
        $("mask").style.display = "block";
    }
    $("close_btn").onclick = function () {
        $("mask").style.display = "none";
    }

})(window)

function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
};
// console.log($("tab_header"));
function tab() {

    // 获取需要的标签

    var alllist = $("tab_header").getElementsByTagName("li");
    var doms = $("tab_content").getElementsByClassName("dom");
    // console.log(alllist, doms);

    var lastone = 0;
    for (var i = 0; i < alllist.length; i++) {
        var li = alllist[i];
        // console.log(li);
        (function (i) {
            li.onmousedown = function () {
                // 清除样式
                alllist[lastone].className = "";

                doms[lastone].style.display = "none";
                // 添加样式
                this.className = "current";
                doms[i].style.display = "block";
                // console.log(this.className);
                // console.log(i);
                // console.log(1);
                // console.log(doms[i].style.display);
                lastone = i;
            }
        })(i)
    }
};
var json = [
    { txt: '当找们正在为生活疲于奔命的时候，生活口经离我们而去。一—约翰·列依', pic: 'image/b1.webp' },
    { txt: '活在世上、不必什么都知道, 只知道最好的就够', pic: '' },
    { txt: '世界上任何书籍都不能带给你好运，恒是它们能让你悄情变成你自己', pic: 'image/b2.webp' },
    { txt: '很多人不需要再见，只是路过而已。一—《彼岸花》', pic: 'image/b3.webp' },
    { txt: '人生最困难的兰件事:保守秘密，忘掉所受的创伤，充分利用余暇;—一国罗', pic: ' image/b4.webp' },
    { txt: '有些人是离开后，才会发觉那个人是最喜欢的。—一《东邪西毒》', pic: ' image/b5.webp' },
    { txt: '投总是在百裘时分，书影写书影之间,宁静的悲哀里,最想念你。"——赤舒,', pic: ' image/p1.png' },
    { txt: '再长的路，一步步地能走完，再定的路.不迈并双脚也无法到达。', pic: 'image/p2.png' },

]




