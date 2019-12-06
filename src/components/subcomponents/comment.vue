<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多200字)" maxlength="200"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content?item.content:"此用户很懒..."}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data() {
            return {
                pageIndex: 1,
                comments: []
            }
        },
        methods: {
            getComments() {
                console.log("newInfo id:" + this.id);
                console.log("pageIndex:" + this.pageIndex);
                this.comments = this.comments.concat([
                    {user_name: "匿名用户", add_time: "2019-04-19T20:09:30.000Z", content: "我来评论啦"},
                    {user_name: "匿名用户", add_time: "2019-04-19T20:09:30.000Z", content: "aaaa"},
                    {user_name: "匿名用户", add_time: "2019-04-19T20:09:30.000Z", content: ""},
                    {user_name: "匿名用户", add_time: "2019-04-19T20:09:30.000Z", content: "12345"}
                ]);
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            }
        },
        created() {
            this.getComments();
        },
        props: ["id"]
    }
</script>

<style scoped lang="scss">
    .cmt-container {
        h3 {
            font-size: 18px;

            textarea {
                font-size: 14px;
                margin: 0;
            }
        }

        .cmt-list {
            margin: 5px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }

                .cmt-body {
                    line-height: 35px;
                    /*缩进*/
                    text-indent: 2em;
                }
            }
        }
    }
</style>