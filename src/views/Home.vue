<template>
  <div page>
    <banner
      bg="https://a.cldery.com/d/oss/mcweb/assets/home-bg.png"
      :delay-reveal="true"
      fullscreen
    >
      <template #subtitle>
        <div class="subtitle-wrapper">
          <span class="subtitle-item" style="--sub-i: 0">自由</span>
          <span class="subtitle-divider" style="--sub-i: 1">/</span>
          <span class="subtitle-item" style="--sub-i: 2">民主</span>
          <span class="subtitle-divider" style="--sub-i: 3">/</span>
          <span class="subtitle-item" style="--sub-i: 4">周目制</span>
        </div>
      </template>
      <template #title>
        <div class="big-title">
          <span class="title-char" style="--char-i: 0">从</span>
          <span class="title-char" style="--char-i: 1">头</span>
          <span class="title-char" style="--char-i: 2">到</span>
          <span class="title-char" style="--char-i: 3">脚</span>
          <span class="title-char" style="--char-i: 4">都</span>
          <span class="title-char" style="--char-i: 5">是</span>
          <span class="title-char" style="--char-i: 6">不</span>
          <span class="title-char" style="--char-i: 7">一</span>
          <span class="title-char" style="--char-i: 8">样</span>
          <span class="title-char" style="--char-i: 9">的</span>
          <span class="title-char" style="--char-i: 10">感</span>
          <span class="title-char" style="--char-i: 11">觉</span>
        </div>
      </template>
      <template #text>
        <div class="banner-text-lines">
          <div class="text-line" style="--line-i: 0">
            在竹像素，你能够参与到游戏的整个流程。
          </div>
          <div class="text-line" style="--line-i: 1">
            从周目的建立，到持续的耕耘，再到最终的「周目评定」······
          </div>
          <div class="text-line" style="--line-i: 2">
            在这里探索的你所留下的痕迹，亦将永存于宇宙千垣之间。
          </div>
        </div>
        <div class="server-stats">
          <TransitionGroup
            name="stat-card"
            tag="div"
            class="stat-cards-inner"
            appear
          >
            <div class="stat-card" key="term" style="--i: 0">
              <div class="stat-icon">
                <mdicon name="alpha-n-box-outline" size="24" />
              </div>
              <div class="stat-content">
                <div class="stat-label">当前周目</div>
                <div class="stat-value">BT26-2</div>
              </div>
              <div class="stat-hover-effect"></div>
            </div>
            <div class="stat-card" key="version" style="--i: 1">
              <div class="stat-icon">
                <mdicon name="minecraft" size="24" />
              </div>
              <div class="stat-content">
                <div class="stat-label">游戏版本</div>
                <div class="stat-value">26.2</div>
              </div>
              <div class="stat-hover-effect"></div>
            </div>
            <div class="stat-card" key="whitelist" style="--i: 2">
              <div class="stat-icon">
                <mdicon name="information-outline" size="24" />
              </div>
              <div class="stat-content">
                <div class="stat-label">白名单</div>
                <div class="stat-value">关闭</div>
              </div>
              <div class="stat-hover-effect"></div>
            </div>
          </TransitionGroup>
        </div>
      </template>
      <template #buttons>
        <Transition name="banner-btn-group" appear>
          <div class="banner-buttons-wrapper">
            <Btn
              class="join-btn btn-animated"
              type="primary-a"
              :shadow="true"
              :arrow="true"
              size="large"
              icon="arrow-right"
              to="/join"
            >
              立即加入</Btn>
            <Btn
              href="https://doc.cldery.com/game/mc/"
              class="learnmore-btn btn-animated"
              type="outlined"
              :shadow="true"
              size="large"
              icon="file-document-outline"
            >
              阅读文档
            </Btn>
          </div>
        </Transition>
      </template>
    </banner>
    <div class="sections">
      <Features
        :revealed-cards="revealedCards"
        :register-reveal="registerReveal"
      />

      <Terms
        :revealed-cards="revealedCards"
        :register-reveal="registerReveal"
        :is-mobile="isMobile"
      />
      <Performance
        :performance-items="performanceItems"
        :revealed-cards="revealedCards"
        :register-reveal="registerReveal"
      />
      <Welcome
        :revealed-cards="revealedCards"
        :register-reveal="registerReveal"
        :is-mobile="isMobile"
      />

      <ServerStatus
        :server-status="serverStatus"
        :loading="loading"
        :error="error"
        :duration="duration"
        :revealed-cards="revealedCards"
        :register-reveal="registerReveal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineComponent,
  reactive,
} from "vue";
import Banner from "@/components/Banner.vue";
import Btn from "@/components/Btn.vue";
import Performance from "@/components/Performance.vue";
import Welcome from "@/components/Welcome.vue";
import Features from "@/components/Features.vue";
import Terms from "@/components/Terms.vue";
import ServerStatus from "@/components/ServerStatus.vue";
import { isMobile } from "@/fn";
import { STATUS_API, SERVER } from "@/config";

interface ServerStatus {
  status: "online" | "offline";
  host: string;
  motd: string;
  agreement: number;
  version: string;
  online: number;
  max: number;
  level_name: string;
  gamemode: string;
  server_unique_id: string;
  delay: number;
}

export default defineComponent({
  components: {
    Banner,
    Btn,
    ServerStatus,
    Performance,
    Welcome,
    Features,
    Terms,
  },
  setup() {
    const duration = ref("");


    // 滚动显现：记录哪些卡片已经进入视口
    const revealedCards = reactive(new Set<number>());
    const revealObserver = ref<IntersectionObserver | null>(null);
    // 存储 element -> id 的映射，供 observer 使用
    const revealMap = new Map<Element, number>();

    // 在 setup 阶段同步建立观察器，使子组件渲染时 registerReveal 即可 observe，
    // 从而严格做到“滚入视口才显现”（避免观察器建立不及时导致全部提前显示）
    if (typeof IntersectionObserver !== "undefined") {
      revealObserver.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = revealMap.get(entry.target);
              if (id !== undefined) {
                revealedCards.add(id);
                revealObserver.value?.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );
    }

    const registerReveal = (el: Element | null, id: number) => {
      if (!el) return;
      revealMap.set(el, id);
      if (revealObserver.value) {
        revealObserver.value.observe(el);
      } else {
        // 观察器尚未建立（如不支持 IntersectionObserver）：直接显示
        revealedCards.add(id);
      }
    };


    const serverStatus = ref<ServerStatus>({
      status: "offline",
      host: "",
      motd: "",
      agreement: 0,
      version: "",
      online: 0,
      max: 0,
      level_name: "",
      gamemode: "",
      server_unique_id: "",
      delay: 0,
    });
    const loading = ref(true);
    const error = ref(false);

    const performanceItems = [
      {
        img: "https://a.cldery.com/d/oss/mcweb/assets/core-i9.svg",
        value: "Gen 14",
        name: "处理器",
      },
      {
        img: "https://a.cldery.com/d/oss/mcweb/assets/ddr4.svg",
        value: "12 GB",
        name: "分配内存",
      },
      {
        img: "https://a.cldery.com/d/oss/mcweb/assets/earth.png",
        value: "25M",
        name: "峰值带宽",
      },
      {
        img: "https://a.cldery.com/d/oss/mcweb/assets/ti-cube.png",
        value: "1 TB",
        name: "存储空间",
      },
    ];

    const fetchServerStatus = async () => {
      try {
        loading.value = true;
        error.value = false;
        const response = await fetch(
          `${STATUS_API}?host=${SERVER.host}:${SERVER.port}`,
        );
        if (!response.ok) throw new Error("网络请求失败");
        const data = await response.json();
        serverStatus.value = data;
      } catch (err) {
        error.value = true;
        console.error("获取服务器状态失败:", err);
      } finally {
        loading.value = false;
      }
    };






    const getDuration = () => {
      const startDate = new Date("2026-06-10 00:00").getTime();
      const now = new Date().getTime();
      const diffMs = now - startDate;

      if (diffMs < 0) return "00:00:00";

      const totalSeconds = Math.floor(diffMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const pad = (num: number) => num.toString().padStart(2, "0");

      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    onMounted(() => {
      duration.value = getDuration();
      const durationInterval = setInterval(() => {
        duration.value = getDuration();
      }, 1000);

      fetchServerStatus();
      const statusInterval = setInterval(fetchServerStatus, 120000);





      return () => {
        clearInterval(durationInterval);
        clearInterval(statusInterval);
        revealObserver.value?.disconnect();
      };
    });

    onBeforeUnmount(() => {
      revealObserver.value?.disconnect();
    });

    return {
      duration,

      isMobile,
      serverStatus,
      loading,
      error,
      performanceItems,
      revealedCards,
      registerReveal,
    };
  },
});
</script>

<style lang="less" scoped>


.stat-cards-inner {
  display: contents;
}

.learnmore-btn {
  margin-left: 32px;
}

.sections {
  display: flex;
  flex-direction: column;

  // 使被抽离到子组件的区块容器恢复原有的外边距（global.less 的 .container 仅为 2rem）
  :deep(.container) {
    margin: 4rem auto;

    @media (max-width: 1000px) {
      margin: 3rem 2rem;
    }
  }
}

  .join-btn {
    display: block;
    margin: 32px auto;
  }




.server-stats {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: left;
}

.stat-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: default;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    .stat-icon {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    .stat-value {
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    }

    .stat-hover-effect {
      opacity: 1;
      transform: translate(-50%, -50%) scale(2);
    }
  }
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  color: rgba(255, 255, 255, 0.9);

  :deep(.mdi) {
    font-size: 1.5rem;

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
}

.stat-content {
  position: relative;
  z-index: 2;
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.1rem;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    letter-spacing: 0.5px;
  }
}

.stat-value {
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  line-height: 1.2;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
}

.stat-hover-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
  z-index: 1;
}

.subtitle-wrapper {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
}

.subtitle-item,
.subtitle-divider {
  display: inline-block;
  opacity: 0;
  animation: subtitle-slide-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: calc(var(--sub-i) * 0.08s + 0.1s);
}

@keyframes subtitle-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.subtitle-divider {
  animation-name: subtitle-divider-in;
}

@keyframes subtitle-divider-in {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.big-title {
  font-weight: bold;
  position: relative;
  display: inline-block;
  color: #50963d;
}

@keyframes flow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.title-char {
  display: inline-block;
  opacity: 0;
  animation: char-fade-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: calc(var(--char-i) * 0.05s + 0.3s);
}

@keyframes char-fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.banner-text-lines {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.text-line {
  opacity: 0;
  animation: text-line-fade 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: calc(var(--line-i) * 0.12s + 0.9s);
}

@keyframes text-line-fade {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.stat-card-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: calc(var(--i) * 0.12s + 1.3s);
}

.stat-card-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.8) rotateX(-15deg);
}

.stat-card {
  animation: stat-float 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.3s);
}

@keyframes stat-float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }
}

.stat-card:hover {
  animation-play-state: paused;
}

.banner-buttons-wrapper {
  display: flex;
  gap: 0;
  align-items: center;
}

.banner-btn-group-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 1.6s;
}

.banner-btn-group-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.btn-animated {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition:
      width 0.6s ease,
      height 0.6s ease;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }
}

.join-btn.btn-animated {
  animation: btn-pulse 2s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes btn-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(86, 204, 114, 0.4);
  }

  50% {
    box-shadow: 0 0 20px 10px rgba(86, 204, 114, 0);
  }
}

.learnmore-btn.btn-animated {
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    animation: btn-border-flow 3s linear infinite;
    animation-delay: 2.5s;
  }
}

@keyframes btn-border-flow {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(0deg);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(100%) rotate(180deg);
  }
}

banner {
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(86, 204, 114, 0.1) 0%,
      transparent 50%
    );
    animation: bg-pulse 4s ease-in-out infinite;
    pointer-events: none;
  }
}

@keyframes bg-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@media (max-width: 600px) {
  .title-char {
    animation-delay: calc(var(--char-i) * 0.03s + 0.3s);
  }

  .text-line {
    font-size: 0.9rem;
  }

  .stat-card {
    animation: none;
  }
}
</style>
