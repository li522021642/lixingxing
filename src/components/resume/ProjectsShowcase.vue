<template>
  <div class="projects-showcase">
    <a-collapse 
      :bordered="false" 
      expand-icon-position="start"
      class="projects-collapse"
    >
      <a-collapse-panel 
        v-for="(project, index) in projects" 
        :key="index" 
        class="project-panel"
      >
        <template #header>
          <div class="project-header">
            <span class="project-name">{{ project.name }}</span>
            <a-tag color="blue" class="project-period-tag">{{ project.period }}</a-tag>
          </div>
        </template>

        <a-card class="project-card" :bordered="false">
          <div class="project-meta">
            <a-row :gutter="[16, 16]">
              <a-col :span="24">
                <a-descriptions :column="{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }" layout="vertical" bordered>
                  <a-descriptions-item label="项目角色">
                    <a-tag color="green">
                      <template #icon><UserOutlined /></template>
                      {{ project.role }}
                    </a-tag>
                  </a-descriptions-item>
                  <a-descriptions-item label="项目职责">
                    <template #icon><TeamOutlined /></template>
                    {{ project.responsibility }}
                  </a-descriptions-item>
                  <a-descriptions-item label="技术架构">
                    <template #icon><ClusterOutlined /></template>
                    {{ project.architecture }}
                  </a-descriptions-item>
                </a-descriptions>
              </a-col>
            </a-row>
          </div>

          <a-divider />
          
          <div class="project-content">
            <div class="project-section">
              <h4 class="section-title">
                <InfoCircleOutlined />
                <span>项目背景</span>
              </h4>
              <a-card class="section-card" :bordered="false">
                <ul class="section-list">
                  <li v-for="(item, i) in project.background" :key="i">{{ item }}</li>
                </ul>
              </a-card>
            </div>
            
            <div class="project-section">
              <h4 class="section-title">
                <FileTextOutlined />
                <span>项目描述</span>
              </h4>
              <a-card class="section-card" :bordered="false">
                <p v-if="typeof project.description === 'string'">{{ project.description }}</p>
                <ul v-else class="section-list">
                  <li v-for="(item, i) in project.description" :key="i">{{ item }}</li>
                </ul>
              </a-card>
            </div>
            
            <div class="project-section challenges-solutions">
              <a-row :gutter="[24, 24]">
                <a-col :xs="24" :md="12">
                  <h4 class="section-title">
                    <ExclamationCircleOutlined />
                    <span>技术挑战</span>
                  </h4>
                  <a-card class="section-card highlight-card challenges-card" :bordered="false">
                    <ul class="section-list">
                      <li v-for="(item, i) in project.challenges" :key="i">{{ item }}</li>
                    </ul>
                  </a-card>
                </a-col>
                
                <a-col :xs="24" :md="12">
                  <h4 class="section-title">
                    <BulbOutlined />
                    <span>解决方案</span>
                  </h4>
                  <a-card class="section-card highlight-card solutions-card" :bordered="false">
                    <ul class="section-list">
                      <li v-for="(item, i) in project.solutions" :key="i">{{ item }}</li>
                    </ul>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-card>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import { 
  UserOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  FileTextOutlined,
  ClusterOutlined,
  ExclamationCircleOutlined,
  BulbOutlined,
  CalendarOutlined
} from '@ant-design/icons-vue';
import resumeDataService from '../../utils/resumeData';
import { useThemeStore } from '../../stores/themeStore';

// 获取项目经历数据
const projects = resumeDataService.getProjects();
const themeStore = useThemeStore();

defineOptions({
  name: 'ProjectsShowcase'
})
</script>

<style scoped>
.projects-showcase {
  max-width: 100%;
  text-align: left;
}

.projects-collapse {
  background: transparent;
}

.project-panel {
  margin-bottom: 16px;
  overflow: hidden;
}

.project-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.project-name {
  font-size: 18px;
  font-weight: 600;
}

.project-period-tag {
  font-size: 12px;
}

.project-card {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.02);
}

.dark-mode .project-card {
  background: rgba(255, 255, 255, 0.02);
}

.project-meta {
  margin-bottom: 16px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #1890ff;
}

.dark-mode .section-title {
  color: #40a9ff;
}

.project-section {
  margin-bottom: 24px;
  text-align: left;
}

.section-card {
  border-radius: 8px;
  margin-left: 24px;
  transition: all 0.3s ease;
}

.section-list {
  padding-left: 20px;
  margin: 0;
}

.section-list li {
  margin-bottom: 8px;
  line-height: 1.6;
}

.highlight-card {
  position: relative;
  overflow: hidden;
}

.highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  border-radius: 3px 0 0 3px;
}

.challenges-card::before {
  background-color: #ff4d4f;
}

.solutions-card::before {
  background-color: #52c41a;
}

/* 炫酷风格样式 */
.cool-style .project-name {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .section-title {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .highlight-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cool-style .challenges-card::before {
  background: linear-gradient(to bottom, #ff4d4f, #ff7a45);
}

.cool-style .solutions-card::before {
  background: linear-gradient(to bottom, #52c41a, #13c2c2);
}

.cool-style .section-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* 暗色模式 & 炫酷风格组合 */
.dark-mode.cool-style .highlight-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark-mode.cool-style .section-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .section-card {
    margin-left: 0;
  }
}
</style> 
