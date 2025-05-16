<template>
  <div class="work-simple">
    <a-timeline class="work-timeline">
      <a-timeline-item 
        v-for="(job, index) in workExperience" 
        :key="index"
        :color="getTimelineColor(index)"
      >
        <a-card class="work-item" hoverable>
          <template #title>
            <div class="company-header">
              <div class="company-info">
                <BankOutlined class="company-icon" />
                <span class="company-name">{{ job.company }}</span>
              </div>
              <a-tag :color="getPositionColor(index)" class="position-tag">
                {{ job.position }}
              </a-tag>
            </div>
          </template>
          
          <div class="work-meta">
            <div class="work-period">
              <a-space>
                <CalendarOutlined />
                <span>{{ job.startDate }} - {{ job.endDate }}</span>
              </a-space>
            </div>
            
            <a-divider />
            
            <div class="work-description">
              <a-typography-paragraph>
                {{ job.description }}
              </a-typography-paragraph>
            </div>
            
            <a-space wrap class="work-tags">
              <a-tag v-for="(tag, i) in getJobTags(job)" :key="i" color="blue">
                {{ tag }}
              </a-tag>
            </a-space>
          </div>
        </a-card>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
import resumeDataService from '../../utils/resumeData';
import { 
  CalendarOutlined, 
  BankOutlined 
} from '@ant-design/icons-vue';

export default {
  name: 'WorkSimple',
  components: { 
    CalendarOutlined, 
    BankOutlined 
  },
  data() {
    return {
      workExperience: resumeDataService.getWorkExperience()
    };
  },
  methods: {
    // 获取时间线颜色
    getTimelineColor(index) {
      const colors = ['#1890ff', '#52c41a', '#722ed1', '#eb2f96'];
      return colors[index % colors.length];
    },
    
    // 获取职位标签颜色
    getPositionColor(index) {
      const colors = ['blue', 'green', 'purple', 'magenta'];
      return colors[index % colors.length];
    },
    
    // 从职位和描述中提取关键词作为标签
    getJobTags(job) {
      // 根据职位生成一些标签
      const positionTags = [];
      
      if (job.position.includes('前端')) {
        positionTags.push('前端开发');
      }
      
      if (job.position.includes('高级')) {
        positionTags.push('高级工程师');
      }
      
      if (job.position.includes('组长') || job.position.includes('负责人')) {
        positionTags.push('团队管理');
      }
      
      if (job.position.includes('架构')) {
        positionTags.push('架构设计');
      }
      
      if (job.position.includes('讲师')) {
        positionTags.push('技术培训');
      }
      
      // 从描述中提取关键词
      const keywordMap = {
        '小程序': '微信小程序',
        'App': 'App开发',
        '前端': '前端技术',
        '架构': '系统架构',
        '全栈': '全栈开发',
        'AI': 'AI开发',
        '大模型': 'AI大模型'
      };
      
      const descTags = [];
      Object.entries(keywordMap).forEach(([key, tag]) => {
        if (job.description.includes(key) && !positionTags.includes(tag)) {
          descTags.push(tag);
        }
      });
      
      // 组合并限制标签数量
      return [...positionTags, ...descTags].slice(0, 4);
    }
  }
}
</script>

<style scoped>
.work-simple {
  max-width: 800px;
  margin: 0 auto;
}

.work-timeline {
  width: 100%;
}

.work-item {
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.company-icon {
  font-size: 20px;
  color: #1890ff;
}

.company-name {
  font-size: 18px;
  font-weight: 600;
}

.position-tag {
  font-weight: 500;
}

.work-meta {
  margin-top: 8px;
}

.work-period {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  margin-bottom: 12px;
}

.work-description {
  margin-bottom: 16px;
  line-height: 1.8;
}

.work-tags {
  margin-top: 12px;
}

/* 暗黑模式样式 */
.dark-mode .work-period {
  color: rgba(255, 255, 255, 0.65);
}

.dark-mode .work-item {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* 炫酷模式样式 */
.cool-style .work-item {
  position: relative;
  overflow: hidden;
}

.cool-style .work-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #1890ff, #722ed1);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.cool-style .work-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.cool-style .work-item:hover::after {
  transform: scaleX(1);
}

.cool-style .company-name {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .company-icon {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

/* 暗黑+炫酷组合样式 */
.dark-mode.cool-style .work-item:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}
</style> 
