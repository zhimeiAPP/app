<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/20
 * Time: 21:55
 */
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../css/zcy-search.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="../common/js/common.js"></script>
    <script src="../common/js/jquery.min.js"></script>
    <title>Search</title>
</head>
<body>
    <div class="top">
        <div class="top-top">
            <img src="../img/zcy-img/1.png" alt="">
            <img src="../img/zcy-img/2.png" alt="">
            <div></div>
        </div>
        <form action="" method="post" class="top-bot">
            <input type="text" name="search" class="search" placeholder="请输入搜索内容">
            <img src="../img/zcy-img/3.png" alt="" class="mkf">
        </form>
    </div>
    <div class="hot">
        <div class="hot-top">
            <img src="../img/zcy-img/4.png" alt="" style="width: .5rem">
            <img src="../img/zcy-img/5.png" alt="" style="width: 6.4rem">
        </div>
        <div class="hot-bot">
            <img src="../img/zcy-img/6.png" alt="">
            <img src="../img/zcy-img/7.png" alt="">
            <img src="../img/zcy-img/8.png" alt="">
            <img src="../img/zcy-img/9.png" alt="">
            <img src="../img/zcy-img/10.png" alt="">
            <img src="../img/zcy-img/11.png" alt="">
        </div>
    </div>
    <div class="topic">
        <div class="topic-top">
            <img src="../img/zcy-img/12.png" alt="" style="width: .55rem;margin-left: .2rem">
            <img src="../img/zcy-img/13.png" alt="" style="width: 6.4rem">
        </div>
        <div class="font">
            <p>潮 · 流 · 女 · 装</p>
            <span>羽绒服</span>
            <span>毛呢大衣</span>
            <span>毛衣</span>
            <span>连衣裙</span>
            <span>设计师款</span>
        </div>
        <div class="font">
            <p>时 · 尚 · 男 · 装</p>
            <span>秋冬新品</span>
            <span>毛呢大衣</span>
            <span>夹克</span>
            <span>皮衣</span>
            <span>设计师款</span>
        </div>
        <div class="font">
            <p>针 · 织 · 毛 · 衫</p>
            <span>薄毛衣</span>
            <span>针织毛衣</span>
            <span>圆领毛衣</span>
            <span>民族风</span>
            <span>纯色毛衣</span>
        </div>
    </div>
    <section>
        <div id="sss">
            <p class="p1">长按说出你想搜索的内容</p>
            <p class="p2">LONG PRESS TO SAY WHAT YOU WANT TO SEARCH</p>
            <p class="p3">你可以说衣服种类/季节/性别</p>
            <img src="../img/zcy-img/14.png" alt="" width="90%">
            <img src="../img/zcy-img/15.png" alt="" style="width: 2.4rem;margin-top: -.5rem">
        </div>
    </section>
</body>
</html>
<script>
    $(document).ready(function () {
        $(".mkf").click(function () {
            $("section").show();
        })
    })
</script>