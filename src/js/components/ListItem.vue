<template>
    <div class="col-12 listItem">
        <div class="listItem__wrap">
            <header class="listItem__header">
                <figure>
                    <img src="" alt="">
                </figure>
                <div class="listItem__header__info">
                    <div class="listItem__header__info__name listItem__main_color listItem__hover_color">
                        <a href="#">{{ item.userName || 'Anonimous' }}</a>
                    </div>
                    <div class="listItem__header__info__last">
                        {{ item.title }}
                    </div>
                </div>
            </header>
            <div class="listItem__body">
                {{ item.body }}
            </div>
            <footer class="listItem__socialBtn">
                <i class="icon-thumbs-up-1">0</i>
                <i class="icon-thumbs-down-1">0</i>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListItem",
        props: ['item']
    }
</script>

<style>
    .listItem .listItem__main_color {
        color: #515365;
    }
    .listItem .listItem__hover_color:hover {
        color: #ff5e3a;
    }
    .listItem {
        background-color: rgb(250, 251, 252);
        margin-top: 7.5px;
        margin-bottom: 7.5px;
        border-radius: 4px;
        border: 1px solid #e6ecf5;
    }
    .listItem:first-child {
        margin-top: 15px;
    }
    .listItem:last-child {
        margin-bottom: 15px;
    }
    .listItem__wrap {
        
    }
    .listItem__wrap >* {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .listItem__header {
        display: flex;
        align-items: center;
    }
    .listItem__header figure {
        margin-right: 15px;
        margin-bottom: 0;
        height: 40px;
        width: 40px;
        overflow: hidden;
        border-radius: 20px;
        border: none;
    }
    .listItem__header figure img {
        height: 100%;
        width: 100%;
        display: block;
        background-color: lightgray;
    }
    .listItem__header__info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        align-items: flex-start;
    }
    .listItem__header__info__name {
        font-weight: 700;
    }
    .listItem__body {

    }
    .listItem__socialBtn {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
    }
    .listItem__socialBtn > i {
        flex-basis: 50px;
    }
    .listItem__socialBtn:before {
        content: '';
        position: absolute;
        top: 0;
        height: 1px;
        right: 0;
        left: 0;
        background-color: #e6ecf5;
        z-index: 2;
    }
</style>