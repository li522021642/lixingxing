<template>
  <div class="skills-simple">
    <a-row :gutter="[24, 24]">
      <a-col :xs="24" :md="12" v-for="(skill, index) in skills" :key="index">
        <a-card class="skill-item" hoverable>
          <template #title>
            <div class="skill-header">
              <a-space>
                <component :is="getSkillIcon(skill.title)" class="skill-icon" />
                <span class="skill-title">{{ skill.title }}</span>
              </a-space>
              <a-tag :color="getColorByLevel(skill.level)" class="skill-level">
                {{ skill.level }}%
              </a-tag>
            </div>
          </template>
          
          <a-progress 
            :percent="skill.level" 
            :stroke-color="getProgressColor(skill.level)" 
            :stroke-width="8"
            class="skill-progress"
          />
          
          <div class="skill-description">
            {{ skill.description }}
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import resumeDataService from '../../utils/resumeData';
import { 
  CodeOutlined, 
  LaptopOutlined, 
  ToolOutlined, 
  Html5Outlined,
  CodepenOutlined,
  GlobalOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';

export default {
  name: 'SkillsSimple',
  components: {
    CodeOutlined,
    LaptopOutlined,
    ToolOutlined,
    Html5Outlined,
    CodepenOutlined,
    GlobalOutlined,
    AppstoreOutlined
  },
  data() {
    return {
      skills: resumeDataService.getSkills()
    };
  },
  methods: {
    getColorByLevel(level) {
      if (level >= 90) return 'success';
      if (level >= 80) return 'processing';
      if (level >= 70) return 'purple';
      return 'warning';
    },
    getProgressColor(level) {
      if (level >= 90) return { from: '#52c41a', to: '#389e0d' };
      if (level >= 80) return { from: '#1890ff', to: '#096dd9' };
      if (level >= 70) return { from: '#722ed1', to: '#531dab' };
      return { from: '#faad14', to: '#d48806' };
    },
    getSkillIcon(title) {
      const icons = {
        'Vue全家桶': CodepenOutlined,
        '微信小程序': AppstoreOutlined,
        'Webpack': ToolOutlined,
        'HTML5/CSS3': Html5Outlined,
        'JavaScript': CodeOutlined,
        '浏览器原理': GlobalOutlined,
        '其他技术': LaptopOutlined
      };
      
      return icons[title] || CodeOutlined;
    }
  }
}
</script>

<style scoped>
.skills-simple {
  max-width: 100%;
  margin: 0 auto;
}

.skill-item {
  height: 100%;
  border-radius: 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-title {
  font-size: 16px;
  font-weight: 600;
}

.skill-icon {
  color: #1890ff;
  font-size: 20px;
  margin-right: 8px;
}

.skill-level {
  font-weight: 600;
}

.skill-progress {
  margin: 16px 0;
}

.skill-description {
  font-size: 14px;
  line-height: 1.8;
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.65);
}

/* 暗黑模式样式 */
.dark-mode .skill-description {
  color: rgba(255, 255, 255, 0.65);
}

/* 炫酷模式样式 */
.cool-style .skill-item {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cool-style .skill-item::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -10%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(rgba(24, 144, 255, 0.1), transparent 70%);
  z-index: -1;
}

.cool-style .skill-title {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .skill-icon {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

/* 暗黑+炫酷组合样式 */
.dark-mode.cool-style .skill-item:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}
</style> 
