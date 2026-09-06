<template>
      <section
        class="common-background darken-background darken-2 features-showcase"
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/tower.png'"
      >
        <div class="container">
          <div class="section-header" style="justify-content: left">
            <Transition name="fade-up" appear>
              <div class="title-wrapper">
                <div>
                  <span class="title-prefix">带你领略 MC 的</span>
                  <img
                    class="title-img-1"
                    style="padding-top: 20px"
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/大千世界.svg'"
                    draggable="false"
                  />
                </div>
              </div>
            </Transition>
            <Transition name="fade-up" appear>
              <p class="section-subtitle" style="transition-delay: 0.15s">
                我们精心打造了每一个细节，只为提供最舒适的多人游戏体验
              </p>
            </Transition>
          </div>
          <div class="cards-grid">
            <div
              class="feature-card card-large scroll-reveal"
              ref="el => registerReveal(el, 0)"
              :class="{ revealed: revealedCards.has(1) }"
            >
              <div class="card-bg">
                <img
                  src="https://a.cldery.com/d/oss/mcweb/assets/slimefun-base.png"
                  alt="Survival"
                  class="bg-img"
                />
                <div class="bg-overlay"></div>
              </div>
              <div class="card-content">
                <div class="card-icon orange">
                  <mdicon name="information-outline" size="28" />
                </div>
                <h3 class="card-title">纯净生存体验</h3>
                <p class="card-text">
                  作为一个公益生存服，我们没有花里胡哨的付费道具，没有破坏平衡的特权。回归最本质的
                  Minecraft 乐趣，与好友一起从零开始。
                  <span class="text-small"
                    >我们致力于维护一个公平、公正的游戏环境，让每一次挖掘和建造都充满意义。</span
                  >
                </p>
              </div>
            </div>

            <div
              class="feature-card scroll-reveal"
              :ref="(el) => registerReveal(el, 1)"
              :class="{ revealed: revealedCards.has(1) }"
              style="--reveal-delay: 0.1s"
            >
              <div class="card-icon blue">
                <mdicon name="shield-home-outline" size="24" />
              </div>
              <h3 class="card-title">领地保护</h3>
              <p class="card-text">
                强大的领地插件，保护你的建筑不受破坏，让你安心建造宏伟奇观。
              </p>
              <div class="card-bg-glow blue-glow"></div>
            </div>

            <div
              class="feature-card scroll-reveal"
              :ref="(el) => registerReveal(el, 2)"
              :class="{ revealed: revealedCards.has(2) }"
              style="--reveal-delay: 0.2s"
            >
              <div class="card-icon green">
                <mdicon name="cube-outline" size="24" />
              </div>
              <h3 class="card-title">高版本特性</h3>
              <p class="card-text">
                紧跟 Minecraft 最新版本，体验最新的生物、方块和游戏机制。
              </p>
              <div class="card-bg-glow green-glow"></div>
            </div>

            <div
              class="feature-card banner-card scroll-reveal"
              :ref="(el) => registerReveal(el, 3)"
              :class="{ revealed: revealedCards.has(3) }"
              style="--reveal-delay: 0.1s"
            >
              <div class="banner-bg">
                <img
                  src="https://a.cldery.com/d/oss/mcweb/assets/moon-on-the-sea.png"
                  alt="Community"
                  class="bg-img"
                />
                <div class="banner-overlay"></div>
              </div>
              <div class="banner-content">
                <div class="banner-tag banner-child" style="--child-i: 0">
                  <span class="hot-tag">Hot</span>
                  <span class="tag-text">红石 / 粘液 / 交流</span>
                </div>
                <h3 class="banner-title banner-child" style="--child-i: 1">
                  加入我们的社区
                </h3>
                <p class="banner-text banner-child" style="--child-i: 2">
                  无论你是小白还是大神，这里都有你的位置。交流技术，展示机器，共同进步。我们的玩家社区活跃且友好。
                </p>
                <btn
                  href="https://qm.qq.com/q/heN4b5JkRi"
                  class="banner-btn banner-child"
                  style="--child-i: 3"
                  type="secondary"
                  size="medium"
                  icon="arrow-right"
                >
                  前往 QQ 群
                </btn>
              </div>
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
  },
});
</script>

<style lang="less" scoped>
.features-showcase {
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 2rem 0;
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  grid-auto-rows: auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
}

.card-large {
  grid-column: span 2;
  grid-row: span 2;
  padding: 0;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    grid-column: span 1;
    min-height: 350px;
  }

  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .bg-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 100%
      );

      @media (max-width: 800px) {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.7) 0%,
          rgba(0, 0, 0, 0.8) 100%
        );
      }
    }
  }

  &:hover .card-bg .bg-img {
    transform: scale(1.05);
  }

  .card-content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    max-width: 70%;

    @media (max-width: 800px) {
      max-width: 100%;
      padding: 1.5rem;
    }
  }

  .card-text {
    .text-small {
      display: block;
      font-size: 0.85rem;
      opacity: 0.7;
      margin-top: 0.5rem;
    }
  }
}

.card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.2s ease;

  &.orange {
    background: rgba(249, 115, 22, 0.2);
    color: #f97316;
  }

  &.blue {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
  }

  &.green {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  }
}

.feature-card:hover .card-icon {
  transform: rotate(12deg);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
}

.card-bg-glow {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;

  &.blue-glow {
    background: #3b82f6;
  }

  &.green-glow {
    background: #22c55e;
  }
}

.banner-card {
  grid-column: span 3;
  padding: 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    grid-column: span 1;
  }

  .banner-bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .banner-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }
  }

  &:hover .banner-bg .bg-img {
    transform: scale(1.05);
  }

  .banner-content {
    position: relative;
    z-index: 1;
    padding: 2rem;
  }

  .banner-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .hot-tag {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.7rem;
      font-weight: bold;
      text-transform: uppercase;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }

    .tag-text {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.8rem;
    }
  }

  .banner-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;

    @media (max-width: 1000px) {
      font-size: 1.4rem;
    }
  }

  .banner-text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    max-width: 500px;
    margin-bottom: 1rem;
  }

  .banner-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    transition: all 0.2s ease;

    &:hover {
      background: white;
      color: black;
      border-color: white;
    }
  }
}

.feature-card.banner-card .banner-child {
  opacity: 0;
  transform: translateY(16px);
}

.feature-card.banner-card.revealed .banner-child {
  animation: banner-child-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: calc(var(--child-i) * 0.1s + 0.2s);
}

@keyframes banner-child-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
