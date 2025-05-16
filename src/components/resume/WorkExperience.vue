<template>
  <a-card class="work-experience-card" :bordered="false">
    <template #title>
      <div class="card-title">
        <SolutionOutlined />
        <span>工作经历</span>
      </div>
    </template>
    
    <div class="work-experience-content">
      <a-timeline>
        <a-timeline-item v-for="(job, index) in workExperience" :key="index" :color="getTimelineColor(index)">
          <template #dot>
            <component :is="getTimelineIcon(index)" :style="{fontSize: '16px'}" />
          </template>
          
          <div class="job-item">
            <div class="job-header">
              <h3 class="company-name">{{ job.company }}</h3>
              <div class="job-period">{{ job.startDate }} - {{ job.endDate }}</div>
            </div>
            
            <div class="job-position">{{ job.position }}</div>
            <div class="job-description">{{ job.description }}</div>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { SolutionOutlined, BankOutlined, ShopOutlined, TeamOutlined, BookOutlined } from '@ant-design/icons-vue';
import resumeDataService from '../../utils/resumeData';
import { useThemeStore } from '../../stores/themeStore';

// 获取工作经历数据
const workExperience = resumeDataService.getWorkExperience();
const themeStore = useThemeStore();

// 获取时间线颜色
const getTimelineColor = (index: number) => {
  if (themeStore.isBusinessStyle) {
    return index === 0 ? '#1890ff' : '';
  }
  
  // 炫酷风格用多种颜色
  const colors = ['#1890ff', '#722ed1', '#52c41a', '#fa541c', '#faad14'];
  return colors[index % colors.length];
};

// 获取时间线图标
const getTimelineIcon = (index: number) => {
  const icons = [BankOutlined, ShopOutlined, TeamOutlined, BookOutlined];
  return icons[index % icons.length];
};

defineOptions({
  name: 'WorkExperience'
})
</script>

<style scoped lang="less">
.work-experience-card {
  margin-bottom: 24px;
  
  .card-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
  }
  
  .work-experience-content {
    margin-top: 16px;
  }
  
  .job-item {
    padding: 8px 0 16px 0;
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 8px;
      
      .company-name {
        font-size: 18px;
        margin-bottom: 0;
      }
      
      .job-period {
        color: var(--text-color-secondary, rgba(0, 0, 0, 0.65));
      }
    }
    
    .job-position {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--primary-color, #1890ff);
    }
    
    .job-description {
      color: var(--text-color-secondary, rgba(0, 0, 0, 0.65));
      line-height: 1.6;
    }
  }
}

/* 响应式样式 */
@media (max-width: 768px) {
  .work-experience-card {
    .job-item {
      .job-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
    }
  }
}

/* 主题样式 */
:global(.style-cool) {
  .work-experience-card {
    .job-item {
      .company-name {
        position: relative;
        display: inline-block;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #1890ff, transparent);
        }
      }
      
      .job-position {
        background: linear-gradient(90deg, #1890ff, #722ed1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style> 
