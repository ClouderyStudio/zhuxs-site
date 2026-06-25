<template>
  <div page>
    <banner bg="https://a.cldery.com/d/oss/mcweb/assets/home-bg.png" fullscreen>
      <template #subtitle>
        <div class="subtitle-wrapper">
          <span class="subtitle-item" style="--sub-i:0">高自由度</span>
          <span class="subtitle-divider" style="--sub-i:1">/</span>
          <span class="subtitle-item" style="--sub-i:2">民主决议</span>
          <span class="subtitle-divider" style="--sub-i:3">/</span>
          <span class="subtitle-item" style="--sub-i:4">周目制</span>
        </div>
      </template>
      <template #title>
        <div class="big-title">
          <span class="title-char" style="--char-i:0">从</span>
          <span class="title-char" style="--char-i:1">头</span>
          <span class="title-char" style="--char-i:2">到</span>
          <span class="title-char" style="--char-i:3">脚</span>
          <span class="title-char" style="--char-i:4">都</span>
          <span class="title-char" style="--char-i:5">是</span>
          <span class="title-char" style="--char-i:6">不</span>
          <span class="title-char" style="--char-i:7">一</span>
          <span class="title-char" style="--char-i:8">样</span>
          <span class="title-char" style="--char-i:9">的</span>
          <span class="title-char" style="--char-i:10">感</span>
          <span class="title-char" style="--char-i:11">觉</span>
        </div>
      </template>
      <template #text>
        <div class="banner-text-lines">
          <div class="text-line" style="--line-i:0">
            在竹像素，你能够参与到游戏的整个流程。
          </div>
          <div class="text-line" style="--line-i:1">
            从周目的建立，到持续的耕耘，再到最终的「周目评定」······
          </div>
          <div class="text-line" style="--line-i:2">
            在这里探索的你所留下的痕迹，亦将永存于宇宙千垣之间。
          </div>
        </div>
        <div class="server-stats">
          <TransitionGroup name="stat-card" tag="div" class="stat-cards-inner" appear>
            <div class="stat-card" key="term" style="--i:0">
              <div class="stat-icon">
                <mdicon name="alpha-n-box-outline" size="24" />
              </div>
              <div class="stat-content">
                <div class="stat-label">当前周目</div>
                <div class="stat-value">BT26-2</div>
              </div>
              <div class="stat-hover-effect"></div>
            </div>
            <div class="stat-card" key="version" style="--i:1">
              <div class="stat-icon">
                <mdicon name="minecraft" size="24" />
              </div>
              <div class="stat-content">
                <div class="stat-label">游戏版本</div>
                <div class="stat-value">26.1.2</div>
              </div>
              <div class="stat-hover-effect"></div>
            </div>
            <div class="stat-card" key="whitelist" style="--i:2">
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
            <btn class="join-btn btn-animated" type="primary-a shadow arrow" size="large" icon="arrow-right" to="/join">
              立即加入</btn>
            <btn href="https://doc.cldery.com/game/mc/" class="learnmore-btn btn-animated"
              type="outlined shadow hover-light" size="large" icon="file-document-outline">阅读文档
            </btn>
          </div>
        </Transition>
      </template>
    </banner>
    <div class="sections">
      <section class="common-background darken-background darken-2 features-showcase"
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/tower.png'">
        <div class="container">
          <div class="section-header" style="justify-content: left;">
            <Transition name="fade-up" appear>
              <div class="title-wrapper">
                <div>
                  <span class="title-prefix">带你领略 MC 的</span>
                  <img class="title-img-1" style="padding-top: 20px;"
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/大千世界.svg'" draggable="false" />
                </div>
              </div>
            </Transition>
            <Transition name="fade-up" appear>
              <p class="section-subtitle" style="transition-delay: 0.15s">我们精心打造了每一个细节，只为提供最舒适的多人游戏体验</p>
            </Transition>
          </div>
          <div class="cards-grid">
            <div class="feature-card card-large scroll-reveal" ref="el => registerReveal(el, 0)"
              :class="{ revealed: revealedCards.has(1) }">
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

            <div class="feature-card scroll-reveal" :ref="el => registerReveal(el, 1)"
              :class="{ revealed: revealedCards.has(1) }" style="--reveal-delay: 0.1s">
              <div class="card-icon blue">
                <mdicon name="shield-home-outline" size="24" />
              </div>
              <h3 class="card-title">领地保护</h3>
              <p class="card-text">
                强大的领地插件，保护你的建筑不受破坏，让你安心建造宏伟奇观。
              </p>
              <div class="card-bg-glow blue-glow"></div>
            </div>

            <div class="feature-card scroll-reveal" :ref="el => registerReveal(el, 2)"
              :class="{ revealed: revealedCards.has(2) }" style="--reveal-delay: 0.2s">
              <div class="card-icon green">
                <mdicon name="cube-outline" size="24" />
              </div>
              <h3 class="card-title">高版本特性</h3>
              <p class="card-text">
                紧跟 Minecraft 最新版本，体验最新的生物、方块和游戏机制。
              </p>
              <div class="card-bg-glow green-glow"></div>
            </div>

            <div class="feature-card banner-card scroll-reveal" :ref="el => registerReveal(el, 3)"
              :class="{ revealed: revealedCards.has(3) }" style="--reveal-delay: 0.1s">
              <div class="banner-bg">
                <img src="https://a.cldery.com/d/oss/mcweb/assets/moon-on-the-sea.png" alt="Community" class="bg-img" />
                <div class="banner-overlay"></div>
              </div>
              <div class="banner-content">
                <div class="banner-tag banner-child" style="--child-i:0">
                  <span class="hot-tag">Hot</span>
                  <span class="tag-text">红石 / 粘液 / 交流</span>
                </div>
                <h3 class="banner-title banner-child" style="--child-i:1">加入我们的社区</h3>
                <p class="banner-text banner-child" style="--child-i:2">
                  无论你是小白还是大神，这里都有你的位置。交流技术，展示机器，共同进步。我们的玩家社区活跃且友好。
                </p>
                <btn href="https://qm.qq.com/q/heN4b5JkRi" class="banner-btn banner-child" style="--child-i:3"
                  type="secondary" size="medium" icon="arrow-right">
                  前往 QQ 群
                </btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="with-video-background" v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/moon-on-the-sea.png'">
        <video ref="moonvideo" id="moon-video" muted loop autoplay>
          <source :src="'https://a.cldery.com/d/oss/mcweb/assets/moon.mp4'" type="video/mp4" />
        </video>
        <div class="container">

          <div class="section-header">
            <Transition name="fade-up" appear>
              <div class="title-wrapper">
                <div style="align-items: center">
                  <span class="title-prefix">不太一样的</span>
                  <img class="title-img-2" style="padding-top: 20px;"
                    :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/周目制.svg'" draggable="false" />
                </div>
              </div>
            </Transition>
            <Transition name="fade-up" appear>
              <p class="section-subtitle" style="transition-delay: 0.15s">每个周目都是一次全新的冒险，玩家的选择决定服务器的未来</p>
            </Transition>
          </div>

          <div class="term-cards">
            <div class="term-card scroll-reveal-slide" :ref="el => registerReveal(el, 10)"
              :class="{ revealed: revealedCards.has(10) }" style="--reveal-delay: 0s">
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

            <div class="term-card scroll-reveal-slide" :ref="el => registerReveal(el, 11)"
              :class="{ revealed: revealedCards.has(11) }" style="--reveal-delay: 0.1s">
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

            <div class="term-card scroll-reveal-slide" :ref="el => registerReveal(el, 12)"
              :class="{ revealed: revealedCards.has(12) }" style="--reveal-delay: 0.2s">
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
          <div class="title-text scroll-reveal" :ref="el => registerReveal(el, 40)"
            :class="{ revealed: revealedCards.has(40) }">
            <div>
              <img class="title-img-3" :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/强劲性能.svg'"
                draggable="false" />轻轻松松完成「星际穿越」
            </div>
          </div>
          <div class="performance-information">
            <div v-for="(item, idx) in performanceItems" :key="item.name" class="performance-item scroll-reveal"
              :ref="el => registerReveal(el, 20 + idx)" :class="{ revealed: revealedCards.has(20 + idx) }"
              :style="`--reveal-delay: ${idx * 0.1}s`">
              <div class="performance-icon">
                <img class="performance-img" :src="item.img" draggable="false" />
              </div>
              <div class="performance-value">{{ item.value }}</div>
              <div class="performance-name">{{ item.name }}</div>
              <div class="performance-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      <section v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/images/1.jpg'"
        class="common-background darken-background darken-2">
        <div class="container">
          <div class="scroll-reveal welcome-title" :ref="el => registerReveal(el, 50)"
            :class="{ revealed: revealedCards.has(50) }">
            <img v-if="!isMobile()" class="title-img-4"
              :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/欢迎，新船员.svg'" draggable="false" />
            <img v-else class="title-img-4-mobile"
              :src="'https://a.cldery.com/d/oss/mcweb/assets/handwriting/欢迎，新船员.m.svg'" draggable="false" />
          </div>
          <div class="welcome">
            <TransitionGroup name="welcome-para" tag="div" class="welcome-text typo light" appear>
              <p key="p1" style="--para-i:0"><strong>我们期待并欢迎每一位新船员的加入。</strong>...等等，为什么是「船员」？</p>
              <p key="p2" style="--para-i:1">竹像素是云术工作室旗下独立运营的服务器。要加入竹像素，必须先通过白名单审核。而要获取竹像素白名单需要完成相应的问卷。</p>
              <p key="p3" style="--para-i:2"><strong>单击按钮可加入我们的交流群，在那里你可以获取最新、最准确的消息。</strong></p>
            </TransitionGroup>
            <div class="welcome-btns scroll-reveal" :ref="el => registerReveal(el, 51)"
              :class="{ revealed: revealedCards.has(51) }" style="--reveal-delay: 0.35s">
              <btn class="primary-a shadow arrow" href="https://qm.qq.com/q/ZqrVw1ePU6" size="large" icon="arrow-right">
                立即加入竹像素讨论群
              </btn>
            </div>
          </div>
        </div>
      </section>

      <section v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/river_valley.png'"
        class="mod-information-wrapper darken-3 blur common-background darken-background">
        <div class="container">
          <div class="mod-card-enhanced mod-card-grid scroll-reveal" :ref="el => registerReveal(el, 30)"
            :class="{ revealed: revealedCards.has(30) }">
            <div class="mod-status-section">
              <div class="mod-header scroll-reveal" :ref="el => registerReveal(el, 31)"
                :class="{ revealed: revealedCards.has(31) }" style="--reveal-delay: 0.1s">

                <div class="mod-title-icon">
                  <mdicon name="server-network-outline" size="28" />
                </div>
                <div class="mod-title">服务器状态</div>
                <div class="status-badge" :class="serverStatus.status === 'online' ? 'online' : 'offline'">
                  <span class="status-dot"></span>
                  {{ serverStatus.status === 'online' ? '在线' : '离线' }}
                </div>
              </div>
              <div class="mod-divider"></div>

              <Transition name="status-fade" mode="out-in">
                <div v-if="loading" key="loading" class="status-loading">
                  <div class="loading-spinner"></div>
                  <span>获取服务器状态中...</span>
                </div>

                <div v-else-if="!error && serverStatus.status === 'online'" key="online" class="status-content">
                  <div class="status-grid">
                    <div class="status-item">
                      <span class="status-label">IP</span>
                      <span class="status-value">mc.mczxs.cn</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">在线玩家</span>
                      <span class="status-value highlight-number">{{ serverStatus.online }} / {{ serverStatus.max
                      }}</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">Java版版本</span>
                      <span class="status-value">{{ serverStatus.version || '未知' }}</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">基岩版版本</span>
                      <span class="status-value">26.x</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">服务器延迟</span>
                      <span class="status-value">{{ serverStatus.delay }} ms</span>
                    </div>
                    <div class="status-item status-item-full">
                      <span class="status-label">MOTD</span>
                      <span class="status-value status-motd-text">{{ serverStatus.motd ||
                        '竹像素 BambooPixel · 26.1.2 · T-26.II'
                      }}<br />{{
                          serverStatus.level_name || '一个现代化、高性能的生存服务器 | 周目测试中' }}</span>
                    </div>
                  </div>
                </div>

                <div v-else key="offline" class="status-offline">
                  <div class="offline-icon">
                    <mdicon name="server-off" size="48" />
                  </div>
                  <p class="offline-text">服务器当前离线</p>
                  <p class="offline-hint">请稍后再试，或加入QQ群获取最新状态</p>
                </div>
              </Transition>

              <Transition name="fade">
                <div v-if="error" class="status-error">
                  <mdicon name="alert-circle-outline" size="20" />
                  <span>获取状态失败，请稍后刷新</span>
                </div>
              </Transition>

              <div class="status-actions scroll-reveal" :ref="el => registerReveal(el, 33)"
                :class="{ revealed: revealedCards.has(33) }" style="--reveal-delay: 0.2s">
                <a href="minecraft://?addExternalServer=竹像素|mc.mczxs.cn:23099" class="join-server-btn">
                  <mdicon name="minecraft" size="18" />
                  (BE)立即加入
                </a>
                <span class="delay-note">
                  <mdicon name="information-outline" size="14" />
                  延迟可能并不准确
                </span>
              </div>
            </div>

            <div class="mod-info-section">
              <div class="mod-header scroll-reveal" :ref="el => registerReveal(el, 32)"
                :class="{ revealed: revealedCards.has(32) }" style="--reveal-delay: 0.15s">

                <div class="mod-title-icon">
                  <mdicon name="information-outline" size="28" />
                </div>
                <div class="mod-title">当前周目信息</div>
                <div class="mod-badge">更新于 2026/6/14</div>
              </div>
              <div class="mod-divider"></div>
              <TransitionGroup name="info-item" tag="ul" class="mod-info-list" appear>
                <li class="info-item" key="term" style="--item-i:0">
                  <span class="info-label">周目代号</span>
                  <span class="info-value">BT26-2</span>
                </li>
                <li class="info-item" key="version" style="--item-i:1">
                  <span class="info-label">游戏版本</span>
                  <span class="info-value">原版 26.1.x</span>
                </li>
                <li class="info-item" key="core" style="--item-i:2">
                  <span class="info-label">服务端核心</span>
                  <span class="info-value">Velocity + Leaves</span>
                </li>
                <li class="info-item" key="opendate" style="--item-i:3">
                  <span class="info-label">开放日期</span>
                  <span class="info-value">2026年6月10日</span>
                </li>
                <li class="info-item" key="duration" style="--item-i:4">
                  <span class="info-label">运行时长</span>
                  <span class="info-value highlight-time">{{ duration }}</span>
                </li>
                <li class="info-item" key="mods" style="--item-i:5">
                  <span class="info-label">模块数量</span>
                  <span class="info-value">~110 个</span>
                </li>
              </TransitionGroup>
              <div class="mod-footer-note">
                <mdicon name="information-outline" size="14" />
                <span>"模块"包含模组、插件及数据包</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent, reactive } from 'vue';
import Banner from '@/components/Banner.vue';
import Btn from '@/components/Btn.vue';
import MetaBar from '@/components/MetaBar.vue';
import MetaItem from '@/components/MetaItem.vue';
import Status from '@/components/Status.vue';
import Logo from '@/components/Logo.vue';
import { isPCSize, isMobile, isPhoneSize } from '@/fn';

interface ServerStatus {
  status: 'online' | 'offline';
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
  },
  setup() {
    const loadingStatus = ref('loading');
    const serverExists = ref(false);
    const duration = ref('');
    const moonvideo = ref();

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
      }
    };

    const serverStatus = ref<ServerStatus>({
      status: 'offline',
      host: '',
      motd: '',
      agreement: 0,
      version: '',
      online: 0,
      max: 0,
      level_name: '',
      gamemode: '',
      server_unique_id: '',
      delay: 0
    });
    const loading = ref(true);
    const error = ref(false);

    const performanceItems = [
      {
        img: 'https://a.cldery.com/d/oss/mcweb/assets/core-i9.svg',
        value: 'Gen 14',
        name: '处理器',
      },
      {
        img: 'https://a.cldery.com/d/oss/mcweb/assets/ddr4.svg',
        value: '12 GB',
        name: '分配内存',
      },
      {
        img: 'https://a.cldery.com/d/oss/mcweb/assets/earth.png',
        value: '25M',
        name: '峰值带宽',
      },
      {
        img: 'https://a.cldery.com/d/oss/mcweb/assets/ti-cube.png',
        value: '1 TB',
        name: '存储空间',
      },
    ];

    const fetchServerStatus = async () => {
      try {
        loading.value = true;
        error.value = false;
        const response = await fetch('https://motdbe.blackbe.work/api/java?host=mc.mczxs.cn:23099');
        if (!response.ok) throw new Error('网络请求失败');
        const data = await response.json();
        serverStatus.value = data;
      } catch (err) {
        error.value = true;
        console.error('获取服务器状态失败:', err);
      } finally {
        loading.value = false;
      }
    };

    let interval: number | null = null;

    const autoplayBackgroundVideo = () => {
      if (!isMobile() && moonvideo.value) {
        moonvideo.value.play().catch(() => { });
      }
    };

    const isIOS = () => {
      const nav = window.navigator;
      if (/iPad|iPhone|iPod/.test(nav.platform)) {
        return true;
      }
      return nav.maxTouchPoints && nav.maxTouchPoints > 2 && /MacIntel/.test(nav.platform);
    };

    const getDepNames = (mod: any[]) => {
      const names: string[] = [];
      if (!mod) return [];
      mod.forEach(e => {
        if (e.type === 'dep') names.push(e.name.toLowerCase());
      });
      return names;
    };

    const getModCount = (mod: any[]) => {
      let count = mod.length;
      mod.forEach(e => {
        if (e.type === 'set' && e.count) count += e.count - 1;
      });
      return count;
    };

    const getDuration = () => {
      const startDate = new Date('2026-06-10 00:00').getTime();
      const now = new Date().getTime();
      const diffMs = now - startDate;

      if (diffMs < 0) return '00:00:00';

      const totalSeconds = Math.floor(diffMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const pad = (num: number) => num.toString().padStart(2, '0');

      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    onMounted(() => {
      duration.value = getDuration();
      const durationInterval = setInterval(() => {
        duration.value = getDuration();
      }, 1000);

      fetchServerStatus();
      const statusInterval = setInterval(fetchServerStatus, 120000);

      autoplayBackgroundVideo();

      // 创建 Intersection Observer 用于滚动显现动画
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
          rootMargin: '0px 0px -50px 0px'
        }
      );

      return () => {
        clearInterval(durationInterval);
        clearInterval(statusInterval);
        revealObserver.value?.disconnect();
      };
    });

    onBeforeUnmount(() => {
      if (interval !== null) {
        window.clearInterval(interval);
      }
      revealObserver.value?.disconnect();
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
      serverStatus,
      loading,
      error,
      performanceItems,
      revealedCards,
      registerReveal,
    };
  }
});

</script>

<style lang="less" scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-leave-to {
  opacity: 0;
}


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


.scroll-reveal-slide {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--reveal-delay, 0s);

  &.revealed {
    opacity: 1;
    transform: translateX(0);
  }
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

.mod-card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
}

.mod-status-section {
  padding-right: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1.5rem;
  }
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;

  &.online {
    background: rgba(86, 204, 114, 0.2);
    color: #56cc72;
    border: 1px solid rgba(86, 204, 114, 0.3);
  }

  &.offline {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
  }
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-badge.online .status-dot {
  background: #56cc72;
  animation: pulse-dot 2s infinite;
}

.status-badge.offline .status-dot {
  background: #ef4444;
  animation: none;
}

@keyframes pulse-dot {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

.status-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.6);
  flex: 1;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #56cc72;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.status-content {
  padding: 0.5rem 0;
  flex: 1;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1.5rem;
}

.status-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.status-item-full {
  grid-column: 1 / -1;
}

.status-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.5);
}

.status-value {
  font-size: 1rem;
  font-weight: 600;
  color: white;

  &.highlight-number {
    color: #facc15;
  }
}

.status-motd-text {
  font-weight: 500;
  font-size: 0.95rem;
}

.status-offline {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  text-align: center;
  flex: 1;

  .offline-icon {
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
  }

  .offline-text {
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }

  .offline-hint {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.4);
    margin: 0.5rem 0 0 0;
  }
}

.status-error {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  color: #ef4444;
  font-size: 0.85rem;
}

.status-actions {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
}

.join-server-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #56cc72, #3a9e54);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(86, 204, 114, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  :deep(.mdi) {
    font-size: 1.1rem;
  }
}

.delay-note {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.3px;

  :deep(.mdi) {
    opacity: 0.6;
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


.banner-btn-group-enter-active {
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.5s;
}

.banner-btn-group-enter-from {
  opacity: 0;
  transform: translateY(24px);
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


.title-text.scroll-reveal {
  transform: translateX(-40px);

  &.revealed {
    transform: translateX(0);
  }
}


.scroll-reveal.welcome-title {
  transform: scale(0.92) translateY(20px);

  &.revealed {
    transform: scale(1) translateY(0);
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
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
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
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
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
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(86, 204, 114, 0.1) 0%, transparent 50%);
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