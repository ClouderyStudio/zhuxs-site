<template>
  <div page>
    <banner
      bg="https://a.cldery.com/d/oss/mcweb/assets/home-bg.png"
      :delay-reveal="true"
      fullscreen
    >
      <template #subtitle>
        <div class="subtitle-wrapper">
          <span class="subtitle-item" style="--sub-i: 0">高自由度</span>
          <span class="subtitle-divider" style="--sub-i: 1">/</span>
          <span class="subtitle-item" style="--sub-i: 2">民主决议</span>
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
            <btn
              class="join-btn btn-animated"
              type="primary-a shadow arrow"
              size="large"
              icon="arrow-right"
              to="/join"
            >
              立即加入</btn
            >
            <btn
              href="https://doc.cldery.com/game/mc/"
              class="learnmore-btn btn-animated"
              type="outlined shadow hover-light"
              size="large"
              icon="file-document-outline"
              >阅读文档
            </btn>
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
import MetaBar from "@/components/MetaBar.vue";
import MetaItem from "@/components/MetaItem.vue";
import Status from "@/components/Status.vue";
import Performance from "@/components/Performance.vue";
import Welcome from "@/components/Welcome.vue";
import Features from "@/components/Features.vue";
import Terms from "@/components/Terms.vue";
import ServerStatus from "@/components/ServerStatus.vue";
import Logo from "@/components/Logo.vue";
import { isPCSize, isMobile, isPhoneSize } from "@/fn";
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
    Logo,
    MetaBar,
    MetaItem,
    Status,
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

    // 兜底：为任何因观察器异常而始终未显露的元素强制显示
    const revealFallbackTimer = ref<number | null>(null);
    const revealAll = () => {
      revealMap.forEach((id) => revealedCards.add(id));
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



    const isIOS = () => {
      const nav = window.navigator;
      if (/iPad|iPhone|iPod/.test(nav.platform)) {
        return true;
      }
      return (
        nav.maxTouchPoints &&
        nav.maxTouchPoints > 2 &&
        /MacIntel/.test(nav.platform)
      );
    };

    const getDepNames = (mod: any[]) => {
      const names: string[] = [];
      if (!mod) return [];
      mod.forEach((e) => {
        if (e.type === "dep") names.push(e.name.toLowerCase());
      });
      return names;
    };

    const getModCount = (mod: any[]) => {
      let count = mod.length;
      mod.forEach((e) => {
        if (e.type === "set" && e.count) count += e.count - 1;
      });
      return count;
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



      // 创建 Intersection Observer 用于滚动显现动画
      // 部分旧浏览器不支持 IntersectionObserver，此时直接全部显示
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
          {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
          },
        );
      } else {
        revealAll();
      }

      // 兜底：观察器建立后再等 4s，仍未显露的元素强制显示，避免内容永久隐藏
      revealFallbackTimer.value = window.setTimeout(revealAll, 4000);

      return () => {
        clearInterval(durationInterval);
        clearInterval(statusInterval);
        if (revealFallbackTimer.value !== null) {
          window.clearTimeout(revealFallbackTimer.value);
        }
        revealObserver.value?.disconnect();
      };
    });

    onBeforeUnmount(() => {
      if (revealFallbackTimer.value !== null) {
        window.clearTimeout(revealFallbackTimer.value);
      }
      revealObserver.value?.disconnect();
    });

    return {
      duration,

      isPCSize,
      isMobile,
      isIOS,
      isPhoneSize,
      getDepNames,
      getModCount,
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

.stat-card-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: calc(var(--i) * 0.1s);
}

.stat-card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}





.status-fade-enter-active,
.status-fade-leave-active {
  transition: opacity 0.3s ease;
}

.status-fade-enter-from,
.status-fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.info-item-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: calc(var(--item-i) * 0.08s + 0.3s);
}

.info-item-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.info-item-move {
  transition: transform 0.4s ease;
}

.background-darkener::before {
  content: " ";
  display: block;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
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

.buyiyang {
  height: 120px;
  display: inline-block;
  margin: 0 -0.5ex;
  transform: translateY(45px);
}

.more-information {
  padding: 96px 0;
  text-shadow: @shadowlight;

  .hero {
    margin-bottom: 64px;
  }

  p,
  button,
  .hero,
  h1 {
    opacity: 0;
  }

  h1,
  p {
    display: block;
    margin: auto;
  }

  h1 {
    font-size: 56px;
    text-align: center;
    margin-bottom: 32px;
    color: white;

    @media screen and (max-width: 1000px) {
      font-size: 32px;
    }
  }

  p {
    @media screen and (max-width: 1000px) {
      font-size: 18px;
    }

    font-size: 26px;
    line-height: 1.8;
    color: @textmidwhite;
    max-width: 700px;
    margin: 16px auto;

    &::before {
      content: "";
      margin-left: 2em;
    }

    strong {
      color: white;
    }
  }

  .join-btn {
    display: block;
    margin: 32px auto;
  }
}



.features-container {
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  flex-direction: row;
  gap: 32px;

  img {
    height: 300px;
  }
}

.container {
  > h1 {
    color: @textgray;
  }

  max-width: 1000px;
  margin: 4rem auto;

  @media (max-width: 1000px) {
    margin: 3rem 2rem;
  }

  #features-title {
    opacity: 0;
    text-align: center;
    font-size: 48px;
    margin-bottom: 32px;
    margin-top: 0;

    &::after {
      content: "";
      display: block;
      background: @primary;
      height: 20px;
      position: absolute;
      width: 45%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 4px;
      z-index: -2;
    }
  }
}

.feature-section,
.more-information-section {
  background-position: center;
  background-size: cover;
}

.more-information-section {
  background-blend-mode: darken;
}

.feature-section {
  .single-features {
    display: flex;
    flex-direction: column;
    align-items: center;

    .single-feature {
      width: 90%;
      opacity: 0;

      @media screen and (min-width: 1000px) {
        margin: 72px 0;
        padding: 32px;
      }

      &:not(.light) {
        background: rgba(0, 0, 0, 0.4);
      }

      &.light {
        background: rgba(255, 255, 255, 0.3);

        .typo p {
          color: @textlightwhite;
        }
      }

      display: flex;

      @media (max-width: 1000px) {
        flex-direction: column;
        padding: 56px 16px;
        margin: 32px 0;
        width: 100%;
      }

      @media (max-width: 1200px) {
        > svg:first-child,
        > svg:last-child {
          display: none;
        }
      }

      align-items: center;

      svg {
        transform: scale(0.7);
      }

      .typo {
        @media screen and (min-width: 1000px) {
          width: 75%;
        }

        @media screen and (max-width: 1000px) {
          text-align: center;

          button {
            margin: auto;
          }
        }

        color: white;
        text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);

        @media screen and (min-width: 1310px) {
          h1,
          h2 {
            white-space: nowrap;
          }
        }

        h2 {
          font-weight: normal;
          margin-top: 0;
          margin-bottom: 8px;
          font-size: 32px;

          @media screen and (max-width: 1000px) {
            font-size: 22.4px;

            svg {
              transform: scale(1.4) !important;
            }
          }

          svg {
            transform: scale(1.2);
            margin-right: 0.5em;
          }
        }

        h1 {
          font-size: 48px;

          @media screen and (max-width: 1000px) {
            font-size: 30px;
          }

          margin: 0;
        }

        p {
          font-size: 18px;
          color: @textmidwhite;

          @media screen and (max-width: 1000px) {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.stroke {
  position: relative;
  display: inline-block;

  &::after {
    @media screen and (max-width: 1000px) {
      height: 0;
    }

    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -100%;
    position: absolute;
    filter: drop-shadow(0px 2px 4px #00000050);
  }

  &.stroke-1::after {
    background: url(https://a.cldery.com/d/oss/mcweb/assets/stroke.svg)
      no-repeat;
  }

  &.stroke-2::after {
    background: url(https://a.cldery.com/d/oss/mcweb/assets/stroke2.svg)
      no-repeat;
  }

  &.stroke-3::after {
    background: url(https://a.cldery.com/d/oss/mcweb/assets/stroke3.svg)
      no-repeat;
  }
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

.server-status {
  small {
    color: @textlightgray;
    padding: 0 8px;
  }

  .mods {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .mod {
    opacity: 0;
    margin: 8px;
    position: relative;

    &::after {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      content: " ";
      left: 0;
      top: 0;
      border-radius: inherit;
      z-index: -2;
    }

    h2,
    p {
      font-weight: normal;
    }

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 4px;
    color: white;

    @media (max-width: 800px) {
      padding: 8px 16px;

      p {
        margin: 0 !important;
        max-width: 100px !important;
      }
    }

    padding: 16px;
    cursor: pointer;
    transition: box-shadow 0.2s ease;

    @media (min-width: 1000px) {
      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        transform: scale(1.1);
      }
    }

    h1 {
      font-size: 26px;

      @media (max-width: 1000px) {
        font-size: 18px;
      }

      margin: 0;
    }

    h2 {
      font-size: 14px;

      @media (max-width: 1000px) {
        font-size: 10.5px;
      }

      margin: 0;
      color: rgba(255, 255, 255, 0.5);
    }

    p {
      font-size: 14px;

      @media (max-width: 1000px) {
        font-size: 10.5px;
      }

      margin-top: 10px;
      margin-bottom: 0;
      max-width: 200px;
    }

    span {
      position: absolute;
      right: 16px;
      top: 16px;
      .monospace;
      opacity: 0.4;

      @media (max-width: 800px) {
        display: none;
      }
    }
  }
}

.server-status-section {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.open-in-tidelab-btn {
  position: absolute;
  right: 16px;
  top: 16px;

  @media (max-width: 1200px) {
    display: none;
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

.section-1-text-1 {
  font-size: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  text-shadow: @shadowlight;
}

.section-2-text {
  margin-top: 1.8rem;
}



.title-img-4-mobile {
  height: 250px;
}

.term-feats {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 1000px) {
    gap: 32px;
  }

  .feat {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    box-shadow: @shadowdark;
    margin: 0 auto;
    max-width: 800px;
    padding: 2rem 3rem;
    font-size: 1.5rem;

    @media (max-width: 1000px) {
      padding: 1.5rem;
      font-size: 1.2rem;
    }

    .top {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 2rem;

      @media (max-width: 1000px) {
        gap: 1rem;
      }
    }
  }

  img {
    height: 120px;

    @media (max-width: 1000px) {
      height: 90px;
    }
  }
}










.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
}























.banner-btn-group-enter-active {
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.5s;
}

.banner-btn-group-enter-from {
  opacity: 0;
  transform: translateY(24px);
}









.title-text.scroll-reveal {
  transform: translateX(-40px);

  &.revealed {
    transform: translateX(0);
  }
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
