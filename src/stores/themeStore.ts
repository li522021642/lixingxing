import { defineStore } from 'pinia'
import resumeDataService from '../utils/resumeData'

export type ThemeMode = 'light' | 'dark'
export type ThemeStyle = 'business' | 'cool'

interface ThemeState {
  mode: ThemeMode
  style: ThemeStyle
}

/**
 * 主题管理Store
 * 用于管理全局主题模式和风格
 */
export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    mode: resumeDataService.getThemeMode() as ThemeMode,
    style: resumeDataService.getThemeStyle() as ThemeStyle
  }),
  
  getters: {
    /**
     * 获取当前是否为暗色模式
     */
    isDarkMode: (state) => state.mode === 'dark',
    
    /**
     * 获取当前是否为商务风格
     */
    isBusinessStyle: (state) => state.style === 'business',
    
    /**
     * 获取当前主题的类名组合
     */
    themeClass: (state) => {
      const modeClass = state.mode === 'dark' ? 'dark-mode' : '';
      const styleClass = state.style === 'cool' ? 'cool-style' : '';
      return [modeClass, styleClass].filter(Boolean).join(' ');
    }
  },
  
  actions: {
    /**
     * 切换主题模式（亮色/暗色）
     */
    toggleMode() {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
      this.applyThemeToHtml();
    },
    
    /**
     * 切换主题风格（商务/炫酷）
     */
    toggleStyle() {
      this.style = this.style === 'business' ? 'cool' : 'business';
      this.applyStyleToHtml();
    },
    
    /**
     * 将主题模式应用到HTML根元素
     */
    applyThemeToHtml() {
      if (this.mode === 'dark') {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    },
    
    /**
     * 将主题风格应用到HTML根元素
     */
    applyStyleToHtml() {
      if (this.style === 'cool') {
        document.documentElement.classList.add('cool-style');
      } else {
        document.documentElement.classList.remove('cool-style');
      }
    },
    
    /**
     * 初始化主题
     */
    initTheme() {
      this.applyThemeToHtml();
      this.applyStyleToHtml();
    }
  }
}) 
