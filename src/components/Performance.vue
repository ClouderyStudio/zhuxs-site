<template>
      <section
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/comet.jpg'"
        class="common-background darken-background darken-2 performance-section"
      >
        <div class="container">
          <div
            class="title-text scroll-reveal"
            :ref="(el) => registerReveal(el, 40)"
            :class="{ revealed: revealedCards.has(40) }"
          >
            <div>
              <img
                class="title-img-3"
                :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/强劲性能.svg'"
                draggable="false"
              />轻轻松松完成「星际穿越」
            </div>
          </div>
          <div class="performance-information">
            <div
              v-for="(item, idx) in performanceItems"
              :key="item.name"
              class="performance-item scroll-reveal"
              :ref="(el) => registerReveal(el, 20 + idx)"
              :class="{ revealed: revealedCards.has(20 + idx) }"
              :style="`--reveal-delay: ${idx * 0.1}s`"
            >
              <div class="performance-icon">
                <img
                  class="performance-img"
                  :src="item.img"
                  draggable="false"
                />
              </div>
              <div class="performance-value">{{ item.value }}</div>
              <div class="performance-name">{{ item.name }}</div>
              <div class="performance-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    performanceItems: { type: Array, required: true },
    revealedCards: { type: Object, required: true },
    registerReveal: { type: Function, required: true },
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
.title-text {
  font-size: 2.5rem;
  display: flex;
  margin-bottom: 2rem;
  color: white;
  text-shadow: @shadowdark;
  position: relative;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  }

  img {
    display: block;
    margin-top: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media (max-width: 1000px) {
      gap: 1rem;
    }
  }
}
[class^="title-img"] {
  display: block;
  height: 180px;

  @media (max-width: 1000px) {
    height: 120px;
  }
}
.title-text.scroll-reveal {
  transform: translateX(-40px);

  &.revealed {
    transform: translateX(0);
  }
}
.performance-section {
  position: relative;
}

.performance-information {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: "Encode Sans Semi Expanded", "微软雅黑", sans-serif;
  color: white;
  font-size: 2.5rem;
  gap: 2rem;

  @media (max-width: 550px) {
    gap: 1rem;
    font-size: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
}

.performance-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  width: calc(25% - 1.5rem);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px 20px;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  cursor: default;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1000px) {
    width: calc(50% - 0.5rem);
    padding: 20px 16px;

    .performance-img {
      height: 50px !important;
    }

    .performance-value {
      font-size: 1.2rem !important;
    }

    .performance-name {
      font-size: 0.9rem !important;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

    .performance-icon {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }

    .performance-value {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    .performance-hover-effect {
      opacity: 1;
      transform: scale(3);
    }
  }
}

.performance-icon {
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.performance-img {
  height: 80px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));

  @media (max-width: 1000px) {
    height: 60px;
  }
}

.performance-value {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #fff, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: none;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
}

.performance-name {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  z-index: 2;

  @media (max-width: 1000px) {
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
}

.performance-hover-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;
  z-index: 1;
}
</style>
