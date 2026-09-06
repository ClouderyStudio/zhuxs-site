<template>
      <section
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/images/1.jpg'"
        class="common-background darken-background darken-2"
      >
        <div class="container">
          <div
            class="scroll-reveal welcome-title"
            :ref="(el) => registerReveal(el, 50)"
            :class="{ revealed: revealedCards.has(50) }"
          >
            <img
              v-if="!isMobile()"
              class="title-img-4"
              :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/欢迎，新船员.svg'"
              draggable="false"
            />
            <img
              v-else
              class="title-img-4-mobile"
              :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/欢迎，新船员.m.svg'"
              draggable="false"
            />
          </div>
          <div class="welcome">
            <TransitionGroup
              name="welcome-para"
              tag="div"
              class="welcome-text typo light"
              appear
            >
              <p key="p1" style="--para-i: 0">
                <strong>我们期待并欢迎每一位新船员的加入。</strong
                >...等等，为什么是「船员」？
              </p>
              <p key="p2" style="--para-i: 1">
                竹像素是云术工作室旗下独立运营的服务器。要加入竹像素，必须先通过白名单审核。而要获取竹像素白名单需要完成相应的问卷。
              </p>
              <p key="p3" style="--para-i: 2">
                <strong
                  >单击按钮可加入我们的交流群，在那里你可以获取最新、最准确的消息。</strong
                >
              </p>
            </TransitionGroup>
            <div
              class="welcome-btns scroll-reveal"
              :ref="(el) => registerReveal(el, 51)"
              :class="{ revealed: revealedCards.has(51) }"
              style="--reveal-delay: 0.35s"
            >
              <btn
                class="primary-a shadow arrow"
                href="https://qm.qq.com/q/ZqrVw1ePU6"
                size="large"
                icon="arrow-right"
              >
                立即加入竹像素讨论群
              </btn>
            </div>
          </div>
        </div>
      </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    revealedCards: { type: Object, required: true },
    registerReveal: { type: Function, required: true },
    isMobile: { type: Function, required: true },
  },
});
</script>

<style lang="less" scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: var(--reveal-delay, 0s);

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-reveal.welcome-title {
  transform: scale(0.92) translateY(20px);

  &.revealed {
    transform: scale(1) translateY(0);
  }
}

[class^="title-img"] {
  display: block;
  height: 180px;

  @media (max-width: 1000px) {
    height: 120px;
  }
}

.title-img-4-mobile {
  height: 250px;
}

.welcome-text {
  font-size: 1.5rem;
  text-shadow: @shadowdark;
  width: 100%;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
}
.welcome {
  display: flex;
  flex-direction: column;
}
.welcome-btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  button {
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
}
.welcome-para-enter-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: calc(var(--para-i) * 0.12s + 0.1s);
}

.welcome-para-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}

.welcome-para-move {
  transition: transform 0.4s ease;
}
</style>
