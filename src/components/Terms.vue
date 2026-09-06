<template>
      <section
        class="with-video-background"
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/moon-on-the-sea.png'"
      >
        <video ref="moonvideo" id="moon-video" muted loop autoplay>
          <source
            :src="'https://a.cldery.com/d/oss/mcweb/assets/moon.mp4'"
            type="video/mp4"
          />
        </video>
        <div class="container">
          <div class="section-header">
            <Transition name="fade-up" appear>
              <div class="title-wrapper">
                <div style="align-items: center">
                  <span class="title-prefix">不太一样的</span>
                  <img
                    class="title-img-2"
                    style="padding-top: 20px"
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/周目制.svg'"
                    draggable="false"
                  />
                </div>
              </div>
            </Transition>
            <Transition name="fade-up" appear>
              <p class="section-subtitle" style="transition-delay: 0.15s">
                每个周目都是一次全新的冒险，玩家的选择决定服务器的未来
              </p>
            </Transition>
          </div>

          <div class="term-cards">
            <div
              class="term-card scroll-reveal-slide"
              :ref="(el) => registerReveal(el, 10)"
              :class="{ revealed: revealedCards.has(10) }"
              style="--reveal-delay: 0s"
            >
              <div class="card-header">
                <div class="card-icon-large">
                  <img
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/votes.png'"
                    alt="投票"
                  />
                </div>
                <div class="card-title-img">
                  <img
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/投票.svg'"
                    alt="投票"
                  />
                </div>
              </div>
              <div class="card-body">
                <p>
                  每个周目的主题或整合包候选项由管理员确定，玩家则进行决定性的一步——投票。<strong>最终所得票数最多的会成为本周目的主要游玩对象。</strong>遵从少数服从多数的原则。
                </p>
                <p class="highlight">
                  你知道吗？<strong>投票</strong>是竹像素长期以来（包含其前身「云竹互通」）所盛行的制度，旨在从玩家处选取本周目最适合的主题——Minecraft
                  实在是太多元了!
                </p>
              </div>
              <div class="card-glow"></div>
            </div>

            <div
              class="term-card scroll-reveal-slide"
              :ref="(el) => registerReveal(el, 11)"
              :class="{ revealed: revealedCards.has(11) }"
              style="--reveal-delay: 0.1s"
            >
              <div class="card-header">
                <div class="card-icon-large">
                  <img
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/write.png'"
                    alt="记录"
                  />
                </div>
                <div class="card-title-img">
                  <img
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/记录.svg'"
                    alt="记录"
                  />
                </div>
              </div>
              <div class="card-body">
                <p>
                  <strong>担心周目匆匆逝去，没有耐心进行建筑？</strong
                  >我们为玩家提供了专用的平台，玩家在上面可以记录和展示自己在每个周目中的经历和创作。
                </p>
                <p>
                  我们相信，正是记录才使得每个周目都有它自身的独特性和意义，而非匆匆飘过的...呃...不知道是什么东西。<strong>我们鼓励所有玩家在平台上记录自己的游戏体验。</strong>不久后，我们亦会将平台的部分功能与服务器建立联系。
                </p>
              </div>
              <div class="card-glow"></div>
            </div>

            <div
              class="term-card scroll-reveal-slide"
              :ref="(el) => registerReveal(el, 12)"
              :class="{ revealed: revealedCards.has(12) }"
              style="--reveal-delay: 0.2s"
            >
              <div class="card-header">
                <div class="card-icon-large">
                  <img
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/review.png'"
                    alt="评价"
                  />
                </div>
                <div class="card-title-img">
                  <img
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/评价.svg'"
                    alt="评价"
                  />
                </div>
              </div>
              <div class="card-body">
                <p>
                  <strong>Minecraft 之多元，带来玩法搭配之复杂。</strong
                  >每个周目之后，我们都会提供专用的渠道来获取本周目游玩体验的信息。
                </p>
                <p>
                  这些玩法的搭配合理吗？所用的插件、数据包或模组是否真正符合了周目主题？稳定吗？<strong>或者...最为简单的——玩得开心吗？</strong>还是肝到爆了？！这些评价维度会成为每个周目的独特象征，同时大大帮助我们后续做得更好。更重要的是，这亦是你在竹像素留下的宝贵痕迹。
                </p>
              </div>
              <div class="card-glow"></div>
            </div>
          </div>
        </div>
      </section>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";

export default defineComponent({
  props: {
    revealedCards: { type: Object, required: true },
    registerReveal: { type: Function, required: true },
    isMobile: { type: Function, required: true },
  },
  setup(props: any) {
    const moonvideo = ref();
    onMounted(() => {
      if (typeof props.isMobile === "function" && !props.isMobile() && moonvideo.value) {
        moonvideo.value.play().catch(() => {});
      }
    });
    return { moonvideo };
  },
});
</script>

<style lang="less" scoped>
.with-video-background {
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#moon-video {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.term-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    gap: 1.5rem;
  }
}

.term-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateX(8px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 1000px) {
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }

  .card-icon-large {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    transition: transform 0.3s ease;

    @media (max-width: 1000px) {
      width: 55px;
      height: 55px;
    }

    img {
      max-width: 80%;
      max-height: 80%;

      @media (max-width: 1000px) {
        transform: scale(0.9);
      }
    }
  }

  &:hover .card-icon-large {
    transform: scale(1.05);
  }

  .card-title-img {
    img {
      height: 55px;
      display: block;

      @media (max-width: 1000px) {
        height: 40px;
      }
    }
  }

  .card-body {
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 1rem;

      @media (max-width: 1000px) {
        font-size: 0.95rem;
      }

      strong {
        color: #50963d;
        font-weight: 600;
      }
    }

    .highlight {
      background: rgba(135, 250, 21, 0.1);
      padding: 1rem;
      border-radius: 0.75rem;
      border-left: 3px solid #50963d;
      margin-top: 1rem;
      margin-bottom: 0;

      @media (max-width: 1000px) {
        padding: 0.75rem;
      }
    }
  }

  .card-glow {
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(97, 250, 21, 0.023) 0%,
      transparent 70%
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover .card-glow {
    opacity: 1;
  }
}
</style>
