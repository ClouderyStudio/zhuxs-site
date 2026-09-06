<template>
      <section
        v-lazy="'https://a.cldery.com/d/oss/mcweb/assets/river_valley.png'"
        class="mod-information-wrapper darken-3 blur common-background darken-background"
      >
        <div class="container">
          <div
            class="mod-card-enhanced mod-card-grid scroll-reveal"
            :ref="(el) => registerReveal(el, 30)"
            :class="{ revealed: revealedCards.has(30) }"
          >
            <div class="mod-status-section">
              <div
                class="mod-header scroll-reveal"
                :ref="(el) => registerReveal(el, 31)"
                :class="{ revealed: revealedCards.has(31) }"
                style="--reveal-delay: 0.1s"
              >
                <div class="mod-title-icon">
                  <mdicon name="server-network-outline" size="28" />
                </div>
                <div class="mod-title">服务器状态</div>
                <div
                  class="status-badge"
                  :class="
                    serverStatus.status === 'online' ? 'online' : 'offline'
                  "
                >
                  <span class="status-dot"></span>
                  {{ serverStatus.status === "online" ? "在线" : "离线" }}
                </div>
              </div>
              <div class="mod-divider"></div>

              <Transition name="status-fade" mode="out-in">
                <div v-if="loading" key="loading" class="status-loading">
                  <div class="loading-spinner"></div>
                  <span>获取服务器状态中...</span>
                </div>

                <div
                  v-else-if="!error && serverStatus.status === 'online'"
                  key="online"
                  class="status-content"
                >
                  <div class="status-grid">
                    <div class="status-item">
                      <span class="status-label">IP</span>
                      <span class="status-value">mc.mczxs.cn</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">在线玩家</span>
                      <span class="status-value highlight-number"
                        >{{ serverStatus.online }} /
                        {{ serverStatus.max }}</span
                      >
                    </div>
                    <div class="status-item">
                      <span class="status-label">Java版版本</span>
                      <span class="status-value">{{
                        serverStatus.version || "未知"
                      }}</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">基岩版版本</span>
                      <span class="status-value">26.x</span>
                    </div>
                    <div class="status-item">
                      <span class="status-label">服务器延迟</span>
                      <span class="status-value"
                        >{{ serverStatus.delay }} ms</span
                      >
                    </div>
                    <div class="status-item status-item-full">
                      <span class="status-label">MOTD</span>
                      <span class="status-value status-motd-text"
                        >{{
                          serverStatus.motd ||
                          "竹像素 BambooPixel · 26.2 · T-26.II"
                        }}<br />{{
                          serverStatus.level_name ||
                          "一个现代化、高性能的生存服务器 | 周目测试中"
                        }}</span
                      >
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

              <div
                class="status-actions scroll-reveal"
                :ref="(el) => registerReveal(el, 33)"
                :class="{ revealed: revealedCards.has(33) }"
                style="--reveal-delay: 0.2s"
              >
                <a
                  href="minecraft://?addExternalServer=竹像素|mc.mczxs.cn:23099"
                  class="join-server-btn"
                >
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
              <div
                class="mod-header scroll-reveal"
                :ref="(el) => registerReveal(el, 32)"
                :class="{ revealed: revealedCards.has(32) }"
                style="--reveal-delay: 0.15s"
              >
                <div class="mod-title-icon">
                  <mdicon name="information-outline" size="28" />
                </div>
                <div class="mod-title">当前周目信息</div>
                <div class="mod-badge">更新于 2026/6/14</div>
              </div>
              <div class="mod-divider"></div>
              <TransitionGroup
                name="info-item"
                tag="ul"
                class="mod-info-list"
                appear
              >
                <li class="info-item" key="term" style="--item-i: 0">
                  <span class="info-label">周目代号</span>
                  <span class="info-value">BT26-2</span>
                </li>
                <li class="info-item" key="version" style="--item-i: 1">
                  <span class="info-label">游戏版本</span>
                  <span class="info-value">原版 26.1.x</span>
                </li>
                <li class="info-item" key="core" style="--item-i: 2">
                  <span class="info-label">服务端核心</span>
                  <span class="info-value">Velocity + Leaves</span>
                </li>
                <li class="info-item" key="opendate" style="--item-i: 3">
                  <span class="info-label">开放日期</span>
                  <span class="info-value">2026年6月10日</span>
                </li>
                <li class="info-item" key="duration" style="--item-i: 4">
                  <span class="info-label">运行时长</span>
                  <span class="info-value highlight-time">{{ duration }}</span>
                </li>
                <li class="info-item" key="mods" style="--item-i: 5">
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		serverStatus: { type: Object, required: true },
		loading: { type: Boolean, default: false },
		error: { type: Boolean, default: false },
		duration: { type: String, default: "" },
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

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
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
    content: ">";
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
</style>
