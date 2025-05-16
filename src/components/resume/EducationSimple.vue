<template>
  <div class="education-simple">
    <a-row :gutter="[24, 24]">
      <a-col :xs="24" :sm="12" v-for="(edu, index) in education" :key="index">
        <a-card class="education-item" hoverable>
          <template #title>
            <div class="school-title">
              <ReadOutlined class="school-icon" />
              <span class="school-name">{{ edu.school }}</span>
            </div>
          </template>
          
          <div class="education-content">
            <div class="major-section">
              <BookOutlined />
              <span class="major-text">{{ edu.major }}</span>
            </div>
            
            <div class="education-meta">
              <a-row :gutter="16" align="middle">
                <a-col :span="12">
                  <a-tag :color="getDegreeColor(index)" class="degree-tag">
                    <TrophyOutlined />
                    {{ edu.degree }}
                  </a-tag>
                </a-col>
                <a-col :span="12" class="period-col">
                  <div class="education-period">
                    <a-space>
                      <CalendarOutlined />
                      <span>{{ edu.startDate }} - {{ edu.endDate }}</span>
                    </a-space>
                  </div>
                </a-col>
              </a-row>
            </div>
            
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import resumeDataService from '../../utils/resumeData';
import { 
  CalendarOutlined, 
  ReadOutlined,
  TrophyOutlined,
  BookOutlined
} from '@ant-design/icons-vue';

export default {
  name: 'EducationSimple',
  components: { 
    CalendarOutlined, 
    ReadOutlined,
    TrophyOutlined,
    BookOutlined
  },
  data() {
    return {
      education: resumeDataService.getEducation()
    };
  },
  methods: {
    // 获取学位标签颜色
    getDegreeColor(index) {
      const colors = ['purple', 'blue', 'volcano', 'geekblue'];
      return colors[index % colors.length];
    },
    
    // 获取渐变背景
    getGradientBackground(index) {
      const gradients = [
        'linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(9, 109, 217, 0.1) 100%)',
        'linear-gradient(135deg, rgba(114, 46, 209, 0.1) 0%, rgba(83, 29, 171, 0.1) 100%)'
      ];
      return gradients[index % gradients.length];
    }
  }
}
</script>

<style scoped>
.education-simple {
  max-width: 800px;
  margin: 0 auto;
}

.education-item {
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
}

/* 应用卡片整体渐变边框 */
.education-item::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.school-title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
}

.school-icon {
  font-size: 20px;
  color: #1890ff;
}

.school-name {
  font-size: 18px;
  font-weight: 600;
}

.education-content {
  padding: 0 24px 24px;
  position: relative;
}

.education-background {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.major-section {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.02);
}

.major-text {
  font-weight: 500;
  font-size: 16px;
}

.education-meta {
  margin-top: 16px;
}

.degree-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  margin: 0;
  font-weight: 500;
}

.period-col {
  text-align: right;
}

.education-period {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

/* 暗黑模式样式 */
.dark-mode .major-section {
  background-color: rgba(255, 255, 255, 0.05);
}

.dark-mode .education-period {
  color: rgba(255, 255, 255, 0.65);
}

.dark-mode .education-item {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* 炫酷模式样式 */
.cool-style .education-item {
  background: rgba(0, 0, 0, 0.01);
}

.cool-style .education-item::before {
  background: linear-gradient(45deg, 
    #1890ff, #096dd9, #722ed1, #531dab, 
    #1890ff, #096dd9, #722ed1, #531dab);
  background-size: 400% 400%;
  animation: gradientBorder 5s ease infinite;
}

@keyframes gradientBorder {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.cool-style .school-icon,
.cool-style .major-section .ant-icon {
  color: transparent;
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
}

.cool-style .school-name,
.cool-style .major-text {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .education-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

/* 暗黑+炫酷组合样式 */
.dark-mode.cool-style .education-item:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}

/* 响应式样式 */
@media (max-width: 576px) {
  .period-col {
    text-align: left;
    margin-top: 8px;
  }
  
  .education-content {
    padding: 0 16px 16px;
  }
}
</style> 
