<template>
  <div class="resume-layout" :class="themeClass">
    <header class="resume-header">
      <div class="logo">个人简历</div>
      <div class="theme-toggles">
        <a-button class="theme-button" @click="toggleMode" type="default">
          {{ isDarkMode ? '切换亮色模式' : '切换暗色模式' }}
        </a-button>
        <a-button class="theme-button" @click="toggleStyle" type="default">
          {{ isBusinessStyle ? '切换炫酷风格' : '切换商务风格' }}
        </a-button>
      </div>
    </header>

    <main class="resume-content">
      <slot></slot>
    </main>

    <footer class="resume-footer">
      <p>© {{ new Date().getFullYear() }} - 个人简历系统</p>
    </footer>
  </div>
</template>

<script>
import { useThemeStore } from '../stores/themeStore';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'ResumeLayout',
  computed: {
    ...mapState(useThemeStore, ['isDarkMode', 'isBusinessStyle', 'themeClass'])
  },
  methods: {
    ...mapActions(useThemeStore, ['toggleMode', 'toggleStyle', 'initTheme'])
  },
  mounted() {
    this.initTheme();
  }
}
</script>

<style scoped>
.resume-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.resume-header {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.theme-toggles {
  display: flex;
  gap: 10px;
}

.theme-button {
  margin-left: 8px;
}

.resume-content {
  flex: 1;
  padding: 24px;
}

.resume-footer {
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #f0f0f0;
  color: rgba(0, 0, 0, 0.45);
}

/* 响应式样式 */
@media (max-width: 768px) {
  .resume-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .resume-content {
    padding: 16px;
  }
}

/* 暗色模式 */
:deep(.theme-dark) .resume-header {
  background-color: #1f1f1f;
  color: white;
  border-bottom-color: #333;
}

:deep(.theme-dark) .resume-footer {
  background-color: #1f1f1f;
  color: rgba(255, 255, 255, 0.65);
  border-top-color: #333;
}
</style> 
