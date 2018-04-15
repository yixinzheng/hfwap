/**
 * Created by Administrator on 2018/4/8.
 */
$(function () {
    //关闭modal
    $(".modal-bg").on("click", function () {
        $(".modal").hide();
    });
    //开启导航
    $(".head-btn").on("click", function () {
        $(".sider-box").animate({left: "0"});
    })
    //关闭导航
    $(".sider-left").on("click", function () {
        $(".sider-box").animate({left: "100%"});
    })
});