<template>
  <div page>
    <banner bg="https://a.cldery.com/d/oss/mcweb/assets/home-bg.png" fullscreen>
      <template #subtitle>
        高自由度 / 民主决议 / 周目制
      </template>
      <template #title>
        <div class="big-title">从头到脚都是不一样的感觉</div>
      </template>
      <template #text>
        在竹像素，你能够参与到游戏的整个流程。<br />
        从周目的建立，到持续的耕耘，再到最终的「周目评定」······
        <br />
        在这里探索的你所留下的痕迹，亦将永存于宇宙千垣之间。
        <br />
        <div class="server-stats">
          <div class="stat-card">
            <div class="stat-icon">
              <mdicon name="alpha-n-box-outline" size="24" />
            </div>
            <div class="stat-content">
              <div class="stat-label">当前周目</div>
              <div class="stat-value">BT26-2</div>
            </div>
            <div class="stat-hover-effect"></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <mdicon name="minecraft" size="24" />
            </div>
            <div class="stat-content">
              <div class="stat-label">游戏版本</div>
              <div class="stat-value">26.1.2</div>
            </div>
            <div class="stat-hover-effect"></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <mdicon name="information-outline" size="24" />
            </div>
            <div class="stat-content">
              <div class="stat-label">白名单</div>
              <div class="stat-value">关闭</div>
            </div>
            <div class="stat-hover-effect"></div>
          </div>
        </div>
      </template>
      <template #buttons>
        <btn class="join-btn" type="primary-a shadow arrow" size="large" icon="arrow-right" to="/join">立即加入</btn>
        <btn href="https://doc.cldery.com/game/mc/" class="learnmore-btn" type="outlined shadow hover-light"
          size="large" icon="file-document-outline">阅读文档
        </btn>
      </template>
    </banner>
    <div class="sections">
      <section class="common-background darken-background darken-2 features-showcase"
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/tower.png'">
        <div class="container">
          <div class="section-header" style="justify-content: left;">
            <div class="title-wrapper">
              <div>
                <span class="title-prefix">带你领略 MC 的</span>
                <img class="title-img-1" style="padding-top: 20px;"
                  :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/大千世界.svg'" draggable="false" />
              </div>
            </div>
            <p class="section-subtitle">我们精心打造了每一个细节，只为提供最舒适的多人游戏体验</p>
          </div>
          <div class="cards-grid">
            <div class="feature-card card-large">
              <div class="card-bg">
                <img src="https://a.cldery.com/d/oss/mcweb/assets/slimefun-base.png" alt="Survival" class="bg-img" />
                <div class="bg-overlay"></div>
              </div>
              <div class="card-content">
                <div class="card-icon orange">
                  <mdicon name="information-outline" size="28" />
                </div>
                <h3 class="card-title">纯净生存体验</h3>
                <p class="card-text">
                  作为一个公益生存服，我们没有花里胡哨的付费道具，没有破坏平衡的特权。回归最本质的 Minecraft 乐趣，与好友一起从零开始。
                  <span class="text-small">我们致力于维护一个公平、公正的游戏环境，让每一次挖掘和建造都充满意义。</span>
                </p>
              </div>
            </div>

            <div class="feature-card">
              <div class="card-icon blue">
                <mdicon name="shield-home-outline" size="24" />
              </div>
              <h3 class="card-title">领地保护</h3>
              <p class="card-text">
                强大的领地插件，保护你的建筑不受破坏，让你安心建造宏伟奇观。
              </p>
              <div class="card-bg-glow blue-glow"></div>
            </div>

            <div class="feature-card">
              <div class="card-icon green">
                <mdicon name="cube-outline" size="24" />
              </div>
              <h3 class="card-title">高版本特性</h3>
              <p class="card-text">
                紧跟 Minecraft 最新版本，体验最新的生物、方块和游戏机制。
              </p>
              <div class="card-bg-glow green-glow"></div>
            </div>

            <div class="feature-card banner-card">
              <div class="banner-bg">
                <img src="https://a.cldery.com/d/oss/mcweb/assets/moon-on-the-sea.png" alt="Community" class="bg-img" />
                <div class="banner-overlay"></div>
              </div>
              <div class="banner-content">
                <div class="banner-tag">
                  <span class="hot-tag">Hot</span>
                  <span class="tag-text">红石 / 粘液 / 交流</span>
                </div>
                <h3 class="banner-title">加入我们的社区</h3>
                <p class="banner-text">
                  无论你是小白还是大神，这里都有你的位置。交流技术，展示机器，共同进步。我们的玩家社区活跃且友好。
                </p>
                <btn href="https://qm.qq.com/q/heN4b5JkRi" class="banner-btn" type="secondary" size="medium"
                  icon="arrow-right">
                  前往 QQ 群
                </btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="with-video-background" v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/moon-on-the-sea.png'"">
        <video ref=" moonvideo" id="moon-video" muted loop autoplay>
        <source :src="'https://a.cldery.com/d/oss/mcweb/assets/moon.mp4'" type="video/mp4" />
        </video>
        <div class="container">
          <div class="section-header">
            <div class="title-wrapper">
              <div style="align-items: center">
                <span class="title-prefix">不太一样的</span>
                <img class="title-img-2" style="padding-top: 20px;"
                  :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/周目制.svg'" draggable="false" />
              </div>
            </div>
            <p class="section-subtitle">每个周目都是一次全新的冒险，玩家的选择决定服务器的未来</p>
          </div>

          <div class="term-cards">
            <div class="term-card">
              <div class="card-header">
                <div class="card-icon-large">
                  <img :src="'https://a.cldery.com/d/oss/mcweb/assets/votes.png'" alt="投票" />
                </div>
                <div class="card-title-img">
                  <img :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/投票.svg'" alt="投票" />
                </div>
              </div>
              <div class="card-body">
                <p>
                  每个周目的主题或整合包候选项由管理员确定，玩家则进行决定性的一步——投票。<strong>最终所得票数最多的会成为本周目的主要游玩对象。</strong>遵从少数服从多数的原则。
                </p>
                <p class="highlight">
                  你知道吗？<strong>投票</strong>是竹像素长期以来（包含其前身「云竹互通」）所盛行的制度，旨在从玩家处选取本周目最适合的主题——Minecraft 实在是太多元了!
                </p>
              </div>
              <div class="card-glow"></div>
            </div>

            <div class="term-card">
              <div class="card-header">
                <div class="card-icon-large">
                  <img :src="'https://a.cldery.com/d/oss/mcweb/assets/write.png'" alt="记录" />
                </div>
                <div class="card-title-img">
                  <img :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/记录.svg'" alt="记录" />
                </div>
              </div>
              <div class="card-body">
                <p>
                  <strong>担心周目匆匆逝去，没有耐心进行建筑？</strong>我们为玩家提供了专用的平台，玩家在上面可以记录和展示自己在每个周目中的经历和创作。
                </p>
                <p>
                  我们相信，正是记录才使得每个周目都有它自身的独特性和意义，而非匆匆飘过的...呃...不知道是什么东西。<strong>我们鼓励所有玩家在平台上记录自己的游戏体验。</strong>不久后，我们亦会将平台的部分功能与服务器建立联系。
                </p>
              </div>
              <div class="card-glow"></div>
            </div>

            <div class="term-card">
              <div class="card-header">
                <div class="card-icon-large">
                  <img :src="'https://a.cldery.com/d/oss/mcweb/assets/review.png'" alt="评价" />
                </div>
                <div class="card-title-img">
                  <img :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/评价.svg'" alt="评价" />
                </div>
              </div>
              <div class="card-body">
                <p>
                  <strong>Minecraft 之多元，带来玩法搭配之复杂。</strong>每个周目之后，我们都会提供专用的渠道来获取本周目游玩体验的信息。
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

      <section v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/comet.jpg'"
        class="common-background darken-background darken-2 performance-section">
        <div class="container">
          <div class="title-text">
            <div><img class="title-img-3" :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/强劲性能.svg'"
                draggable="false" />轻轻松松完成「星际穿越」
            </div>
          </div>
          <div class="performance-information">
            <div class="performance-item">
              <div class="performance-icon">
                <img class="performance-img" :src="'https://a.cldery.com/d/oss/mcweb/assets/core-i9.svg'"
                  draggable="false" />
              </div>
              <div class="performance-value">Gen 14</div>
              <div class="performance-name">处理器</div>
              <div class="performance-hover-effect"></div>
            </div>
            <div class="performance-item">
              <div class="performance-icon">
                <img class="performance-img" :src="'https://a.cldery.com/d/oss/mcweb/assets/ddr4.svg'"
                  draggable="false" />
              </div>
              <div class="performance-value">12 GB</div>
              <div class="performance-name">分配内存</div>
              <div class="performance-hover-effect"></div>
            </div>
            <div class="performance-item">
              <div class="performance-icon">
                <img class="performance-img" :src="'https://a.cldery.com/d/oss/mcweb/assets/earth.png'"
                  draggable="false" />
              </div>
              <div class="performance-value">25M</div>
              <div class="performance-name">峰值带宽</div>
              <div class="performance-hover-effect"></div>
            </div>
            <div class="performance-item">
              <div class="performance-icon">
                <img class="performance-img" :src="'https://a.cldery.com/d/oss/mcweb/assets/ti-cube.png'"
                  draggable="false" />
              </div>
              <div class="performance-value">1 TB</div>
              <div class="performance-name">存储空间</div>
              <div class="performance-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      <section v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/images/1.jpg'"
        class="common-background darken-background darken-2">
        <div class="container">
          <div>
            <div><img v-if="!isMobile()" class="title-img-4"
                :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/欢迎，新船员.svg'" draggable="false" />
              <img v-else class="title-img-4-mobile"
                :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/欢迎，新船员.m.svg'" draggable="false" />
            </div>
          </div>
          <div class="welcome">
            <div class="welcome-text typo light">
              <p><strong>我们期待并欢迎每一位新船员的加入。</strong>...等等，为什么是「船员」？</p>
              <p>竹像素是云术工作室旗下独立运营的服务器。要加入竹像素，必须先通过白名单审核。而要获取竹像素白名单需要完成相应的问卷。</p>
              <p><strong>单击按钮可加入我们的交流群，在那里你可以获取最新、最准确的消息。</strong></p>
            </div>
            <div class="welcome-btns">
              <btn class="primary-a shadow arrow" href="https://qm.qq.com/q/ZqrVw1ePU6" size="large" icon="arrow-right">
                立即加入竹像素讨论群</btn>
            </div>
          </div>
        </div>
      </section>

      <section v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/river_valley.png'"
        class="mod-information-wrapper darken-3 blur common-background darken-background">
        <div class="container">
          <div class="mod-card-enhanced">
            <div class="mod-header">
              <div class="mod-title-icon">
                <mdicon name="information-outline" size="28" />
              </div>
              <div class="mod-title">当前周目信息</div>
              <div class="mod-badge">更新于 2026/6/14</div>
            </div>
            <div class="mod-divider"></div>
            <ul class="mod-info-list">
              <li class="info-item">
                <span class="info-label">周目代号</span>
                <span class="info-value">BT26-2</span>
              </li>
              <li class="info-item">
                <span class="info-label">游戏版本</span>
                <span class="info-value">原版 26.1.x</span>
              </li>
              <li class="info-item">
                <span class="info-label">服务端核心</span>
                <span class="info-value">Velocity + Leaves</span>
              </li>
              <li class="info-item">
                <span class="info-label">开放日期</span>
                <span class="info-value">2026年6月10日</span>
              </li>
              <li class="info-item">
                <span class="info-label">运行时长</span>
                <span class="info-value highlight-time">{{ duration }}</span>
              </li>
              <li class="info-item">
                <span class="info-label">模块数量</span>
                <span class="info-value">~110 个</span>
              </li>
            </ul>
            <div class="mod-footer-note">
              <mdicon name="information-outline" size="14" />
              <span>“模块”包含模组、插件及数据包</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
import Btn from '@/components/Btn.vue';
import MetaBar from '@/components/MetaBar.vue';
import MetaItem from '@/components/MetaItem.vue';
import Status from '@/components/Status.vue';
import Logo from '@/components/Logo.vue';
import { isPCSize, isMobile, isPhoneSize } from '@/fn';

export default defineComponent({
  components: {
    Banner,
    Btn,
    Logo,
    MetaBar,
    MetaItem,
    Status,
  },
  setup() {
    const loadingStatus = ref('loading');
    const serverExists = ref(false);
    const duration = ref('');
    const moonvideo = ref();

    let interval: number | null = null;

    const autoplayBackgroundVideo = () => {
      if (!isMobile() && moonvideo.value) {
        moonvideo.value.play().catch(() => {
        });
      }
    };

    const isIOS = () => {
      const nav = window.navigator;
      if (/iPad|iPhone|iPod/.test(nav.platform)) {
        return true;
      }
      return nav.maxTouchPoints && nav.maxTouchPoints > 2 && /MacIntel/.test(nav.platform);
    };

    const getDepNames = (mod: ServerMod[]) => {
      const names: string[] = [];
      if (!mod) {
        return [];
      }
      mod.forEach(e => {
        if (e.type === 'dep') {
          names.push(e.name.toLowerCase());
        }
      });
      return names;
    };

    const getModCount = (mod: ServerMod[]) => {
      let count = mod.length;
      mod.forEach(e => {
        if (e.type === 'set' && e.count) {
          count += e.count - 1;
        }
      });
      return count;
    };

    const getDuration = () => {
      const startDate = new Date('2026-06-10 00:00').getTime();
      const now = new Date().getTime();
      const diffMs = now - startDate;

      if (diffMs < 0) {
        return '00:00:00';
      }

      const totalSeconds = Math.floor(diffMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const pad = (num: number) => num.toString().padStart(2, '0');

      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    onMounted(() => {
      duration.value = getDuration();

      interval = window.setInterval(() => {
        duration.value = getDuration();
      }, 1000);

      autoplayBackgroundVideo();
    });

    onBeforeUnmount(() => {
      if (interval !== null) {
        window.clearInterval(interval);
      }
    });

    return {
      loadingStatus,
      serverExists,
      duration,
      moonvideo,
      autoplayBackgroundVideo,
      isPCSize,
      isMobile,
      isIOS,
      isPhoneSize,
      getDepNames,
      getModCount,
    };
  }
});
</script>

<style lang="less" scoped>
.background-darkener::before {
  content: " ";
  display: block;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .2);
}

.learnmore-btn {
  margin-left: 32px;
}

.sections {
  display: flex;
  flex-direction: column;
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
      content: '';
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

.with-video-background {
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  >h1 {
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
      content: '';
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

        >svg:first-child,
        >svg:last-child {
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

    content: '';
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -100%;
    position: absolute;
    filter: drop-shadow(0px 2px 4px #00000050);
  }

  &.stroke-1::after {
    background: url(https://oss.cldery.comhttps://a.cldery.com/d/oss/mcweb/assets/stroke.svg) no-repeat;
  }

  &.stroke-2::after {
    background: url(https://oss.cldery.comhttps://a.cldery.com/d/oss/mcweb/assets/stroke2.svg) no-repeat;
  }

  &.stroke-3::after {
    background: url(https://oss.cldery.comhttps://a.cldery.com/d/oss/mcweb/assets/stroke3.svg) no-repeat;
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
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
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
      content: ' ';
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

[class^='title-img'] {
  display: block;
  height: 180px;

  @media (max-width: 1000px) {
    height: 120px;
  }
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
    background: rgba(0, 0, 0, .4);
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

.performance-section {
  position: relative;
}

.performance-information {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: 'Encode Sans Semi Expanded', '微软雅黑', sans-serif;
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
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;
  z-index: 1;
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

.mod-information-wrapper {
  position: relative;
  padding: 3rem 0;

  @media (max-width: 1000px) {
    padding: 2rem 0;
  }
}

.mod-card-enhanced {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: none;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
}

.mod-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.mod-title-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(86, 204, 114, 0.2), rgba(86, 204, 114, 0.05));
  border-radius: 12px;
  color: #56cc72;

  @media (max-width: 1000px) {
    width: 32px;
    height: 32px;
  }
}

.mod-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }
}

.mod-badge {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.mod-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin-bottom: 1.5rem;
}

.mod-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 0;
  }
}

.info-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.5px;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '>';
    position: absolute;
    left: 0;
    color: #56cc72;
    font-family: monospace;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    padding-left: 0.75rem;
  }
}

.info-value {
  font-size: 1rem;
  color: white;
  font-weight: 500;

  &.highlight-time {
    color: #56cc72;
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
}

.mod-footer-note {
  margin-top: 1.5rem;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  :deep(.mdi) {
    opacity: 0.6;
  }
}

#moon-video {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.features-showcase {
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 2rem 0;
  }
}

.section-header {
  position: relative;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 1000px) {
    margin-bottom: 2rem;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    .title-prefix {
      font-size: 2.5rem;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

      @media (max-width: 1000px) {
        font-size: 1.8rem;
      }
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

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
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
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);

      @media (max-width: 800px) {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.8) 100%);
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
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 100%);
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
        color: #50963D;
        font-weight: 600;
      }
    }

    .highlight {
      background: rgba(135, 250, 21, 0.1);
      padding: 1rem;
      border-radius: 0.75rem;
      border-left: 3px solid #50963D;
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
    background: radial-gradient(circle, rgba(97, 250, 21, 0.023) 0%, transparent 70%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover .card-glow {
    opacity: 1;
  }
}
</style>