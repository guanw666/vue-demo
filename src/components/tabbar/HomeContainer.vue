<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用key -->
            <mt-swipe-item v-for="item in carouselList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeContainer",
        data() {
            return {
                carouselList: []
            };
        },
        methods: {
            getCarousel() {
                this.carouselList = [
                    {img: "http://pic1.win4000.com/wallpaper/7/57ac360a202c9.jpg", url: ""},
                    {
                        img: "http://www.chinazy88.com/bbs/data/attachment/forum/201502/05/220231p6nuvoa6dynz0tx3.jpg",
                        url: ""
                    },
                    {img: "http://www.agri35.com/UploadFiles/img_2_290093630_3545284536_26.jpg", url: ""}
                ]
            }
        },
        created() {
            // 获取轮播图数据
            this.getCarousel();
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }

    .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }

    .mui-grid-view.mui-grid-9 {
        margin: 0;
        padding: 0;
        border: none;
        background-color: white;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        margin: 0;
        padding: 11px 15px;
        vertical-align: top;
        border: none;
    }

</style>