<template>
  <a-card class="education-card" :bordered="false">
    <template #title>
      <div class="card-title">
        <ReadOutlined />
        <span>教育经历</span>
      </div>
    </template>
    
    <div class="education-content">
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" v-for="(edu, index) in education" :key="index">
          <div class="education-item">
            <div class="education-icon">
              <BookOutlined :style="{ fontSize: '32px', color: getEducationColor(index) }" />
            </div>
            
            <div class="education-details">
              <h3 class="school-name">{{ edu.school }}</h3>
              <div class="edu-period">{{ edu.startDate }} - {{ edu.endDate }}</div>
              <div class="major-info">
                {{ edu.major }} · {{ edu.degree }}
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { ReadOutlined, BookOutlined } from '@ant-design/icons-vue';
import resumeDataService from '../../utils/resumeData';
import { useThemeStore } from '../../stores/themeStore';

// 获取教育经历数据
const education = resumeDataService.getEducation();
const themeStore = useThemeStore();

// 获取教育图标颜色
const getEducationColor = (index: number) => {
  if (themeStore.isBusinessStyle) {
    return index === 0 ? '#1890ff' : '#52c41a';
  }
  
  // 炫酷风格用不同颜色
  const colors = ['#1890ff', '#722ed1', '#52c41a', '#fa541c'];
  return colors[index % colors.length];
};

defineOptions({
  name: 'EducationInfo'
})
</script>

<style scoped lang="less">
.education-card {
  margin-bottom: 24px;
  
  .card-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
  }
  
  .education-content {
    margin-top: 16px;
  }
  
  .education-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    transition: all 0.3s;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
    
    .education-icon {
      flex-shrink: 0;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    
    .education-details {
      flex: 1;
      
      .school-name {
        font-size: 18px;
        margin-bottom: 8px;
      }
      
      .edu-period {
        color: var(--text-color-secondary, rgba(0, 0, 0, 0.65));
        margin-bottom: 8px;
      }
      
      .major-info {
        font-weight: 500;
      }
    }
  }
}

/* 主题样式 */
:global(.theme-dark) {
  .education-card {
    .education-item {
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
}

:global(.style-cool) {
  .education-card {
    .education-item {
      border: 1px solid transparent;
      
      &:hover {
        background-color: transparent;
        border-color: #1890ff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .school-name {
        position: relative;
        display: inline-block;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30%;
          height: 2px;
          background: linear-gradient(90deg, #1890ff, transparent);
        }
      }
      
      .major-info {
        background: linear-gradient(90deg, #1890ff, #722ed1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
    }
  }
}
</style> 
