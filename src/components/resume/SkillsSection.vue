<template>
  <a-card class="skills-card" :bordered="false">
    <template #title>
      <div class="card-title">
        <RocketOutlined />
        <span>专业技能</span>
      </div>
    </template>
    
    <div class="skills-content">
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :md="12" v-for="(skill, index) in skills" :key="index">
          <div class="skill-item">
            <div class="skill-header">
              <h3 class="skill-title">{{ skill.title }}</h3>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            
            <a-progress 
              :percent="skill.level" 
              :stroke-color="getProgressColor(skill.level, index)" 
              :showInfo="false" 
              size="small"
            />
            
            <div class="skill-description">
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { RocketOutlined } from '@ant-design/icons-vue';
import resumeDataService from '../../utils/resumeData';
import { useThemeStore } from '../../stores/themeStore';

// 获取技能数据
const skills = resumeDataService.getSkills();
const themeStore = useThemeStore();

// 根据技能等级和索引获取进度条颜色
const getProgressColor = (level: number, index: number) => {
  // 商务风格用固定颜色
  if (themeStore.isBusinessStyle) {
    if (level >= 90) return '#52c41a';
    if (level >= 80) return '#1890ff';
    if (level >= 70) return '#722ed1';
    return '#faad14';
  }
  
  // 炫酷风格用渐变色
  const colors = [
    { from: '#1890ff', to: '#52c41a' },
    { from: '#722ed1', to: '#eb2f96' },
    { from: '#fa541c', to: '#faad14' },
    { from: '#13c2c2', to: '#52c41a' },
    { from: '#2f54eb', to: '#722ed1' },
  ];
  
  const colorIndex = index % colors.length;
  return {
    '0%': colors[colorIndex].from,
    '100%': colors[colorIndex].to
  };
};

defineOptions({
  name: 'SkillsSection'
})
</script>

<style scoped lang="less">
.skills-card {
  margin-bottom: 24px;
  
  .card-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
  }
  
  .skills-content {
    margin-top: 16px;
  }
  
  .skill-item {
    padding: 16px;
    border-radius: 8px;
    transition: all 0.3s;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      
      .skill-title {
        font-size: 16px;
        margin-bottom: 0;
      }
      
      .skill-level {
        font-size: 14px;
        color: var(--text-color-secondary, rgba(0, 0, 0, 0.65));
      }
    }
    
    .skill-description {
      margin-top: 12px;
      color: var(--text-color-secondary, rgba(0, 0, 0, 0.65));
      
      p {
        margin-bottom: 0;
        line-height: 1.6;
      }
    }
  }
}

/* 主题样式 */
:global(.theme-dark) {
  .skills-card {
    .skill-item {
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
}

:global(.style-cool) {
  .skills-card {
    .skill-item {
      border: 1px solid transparent;
      
      &:hover {
        background-color: transparent;
        border-color: #1890ff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .skill-title {
        background: linear-gradient(90deg, #1890ff, #722ed1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style> 
