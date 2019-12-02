<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data() {
            return {
                newslist: []
            };
        },
        methods: {
            getNewsList() {
                this.newslist = [
                    {
                        add_time: "2019-11-07T04:50:28.000z",
                        click: 1,
                        id: 1,
                        img_url: "https://avatars2.githubusercontent.com/u/42790590?s=400&u=008d775da9b9be6e9715e43821f8e2890ace5b31&v=4",
                        title: 'title1',
                        desc: 'desc desc...'
                    },
                    {
                        add_time: "2019-11-07T04:50:28.000z",
                        click: 2,
                        id: 2,
                        img_url: "https://avatars2.githubusercontent.com/u/42790590?s=400&u=008d775da9b9be6e9715e43821f8e2890ace5b31&v=4",
                        title: 'title2',
                        desc: 'desc2 desc2...'
                    },
                    {
                        add_time: "2019-11-07T04:50:28.000z",
                        click: 3,
                        id: 3,
                        img_url: "https://avatars2.githubusercontent.com/u/42790590?s=400&u=008d775da9b9be6e9715e43821f8e2890ace5b31&v=4",
                        title: 'title3',
                        desc: 'desc3 desc3...'
                    }
                ];
            }
        },
        created() {
            this.getNewsList();
        }
    }
</script>

<style scoped>
    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>