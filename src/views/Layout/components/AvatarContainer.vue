<script setup>
import { ref } from "vue";
import avatarImg1 from "@/assets/img/bilibili.png";
import avatarHoverImg1 from "@/assets/img/bilibiliActive.png";
import avatarHoverImg2 from "@/assets/img/giteeActive.png";
import avatarImg2 from "@/assets/img/gitee.png";
import avatarImg3 from "@/assets/img/github.png";
import avatarHoverImg3 from "@/assets/img/githubActive.png";

const isHover1 = ref(false);
const isHover2 = ref(false);
const isHover3 = ref(false);
</script>

<template>
      <div
        class="avatarContainer"
        style="
          width: 100%;
          height: 300px;
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          border-radius: 5px;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
          background-color: white;
        "
      >
        <div
          style="
            width: 100%;
            height: 88px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img style="height: 100%" src="@/assets/img/avatar.jpg" />
        </div>
        <div
          style="
            width: 100%;
            height: 30px;
            font-size: 20px;
            color: #475b6d;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          Mc_Cain
        </div>
        <div
          style="
            width: 100%;
            height: 30px;
            color: #475b6d;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
          "
        >
          一位前端学习者
        </div>
        <div
          class="digitalContainer"
          style="
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <div class="digitalItem">
            <div class="textNum">0</div>
            <div class="textNumAll">文章</div>
          </div>
          <div class="digitalItem">
            <div class="textNum">0</div>
            <div class="textNumAll">分类</div>
          </div>
          <div class="digitalItem">
            <div class="textNum">0</div>
            <div class="textNumAll">标签</div>
          </div>
        </div>
        <div
          class="socialMediaContainer"
          style="
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
          "
        >
          <a
            style="
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
            @mouseenter="isHover1 = true"
            @mouseleave="isHover1 = false"
            href="https://space.bilibili.com/257464993?spm_id_from=333.1007.0.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style="height: 20px; width: 20px"
              :src="isHover1 ? avatarHoverImg1 : avatarImg1"
            /> </a
          ><a
            style="
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 20px;
              margin-right: 20px;
            "
            @mouseenter="isHover2 = true"
            @mouseleave="isHover2 = false"
            href="https://gitee.com/cjw32"
            rel="noopener noreferrer"
          >
            <img
              style="height: 20px; width: 20px"
              :src="isHover2 ? avatarHoverImg2 : avatarImg2"
            /> </a
          ><a
            style="
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
            @mouseenter="isHover3 = true"
            @mouseleave="isHover3 = false"
            href="https://github.com/cjw260"
            rel="noopener noreferrer"
          >
            <img
              style="height: 20px; width: 20px"
              :src="isHover3 ? avatarHoverImg3 : avatarImg3"
            />
          </a>
        </div>
      </div>
   
</template>
<style scoped>
.digitalItem {
  height: 100%;
  width: 70px;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0 25px 0;
}
.textNum {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475b6d;
  font-size: 20px;
}
.textNumAll {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475b6d;
}

.digitalItem{
    box-sizing: border-box; 
}
</style>