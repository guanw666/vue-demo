<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="content">{{newsInfo.content}}</div>
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue';

    export default {
        name: "NewsInfo",
        components: {
            'comment-box': comment
        },
        data() {
            return {
                id: this.$route.params.id,
                newsInfo: {add_time: '', click: 0}
            }
        },
        methods: {
            getNewsInfo() {
                this.newsInfo = [
                    {
                        add_time: "2019-11-07T04:50:28.000z",
                        click: 1,
                        id: 1,
                        title: 'title1',
                        content: 'content content...'
                    },
                    {
                        add_time: "2019-11-07T04:50:28.000z",
                        click: 2,
                        id: 2,
                        title: 'title2',
                        content: 'content content...'
                    },
                    {
                        add_time: "2019-11-07T04:50:28.000z",
                        click: 3,
                        id: 3,
                        title: 'title3',
                        content: 'content content...'
                    }
                ].find((item, index, arr) => {
                    return String(item.id) === String(this.id);
                });
            }
        },
        created() {
            this.getNewsInfo();
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo-container {
        padding: 0 4px;
    }

    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }

    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }


</style>