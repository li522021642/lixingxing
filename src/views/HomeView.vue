<template>
  <div class="home-view">
    <a-divider orientation="left">
      <span class="section-title-text">个人信息</span>
    </a-divider>
    <personal-info />
    
    <a-divider orientation="left">
      <span class="section-title-text">技能</span>
    </a-divider>
    <skills-simple />
    
    <a-divider orientation="left">
      <span class="section-title-text">工作经历</span>
    </a-divider>
    <work-simple />
    
    <a-divider orientation="left">
      <span class="section-title-text">教育经历</span>
    </a-divider>
    <education-simple />

    <a-divider orientation="left">
      <span class="section-title-text">项目经历</span>
    </a-divider>
    <projects-showcase />
  </div>
</template>

<script>
import PersonalInfo from '../components/resume/PersonalInfo.vue';
import SkillsSimple from '../components/resume/SkillsSimple.vue';
import WorkSimple from '../components/resume/WorkSimple.vue';
import EducationSimple from '../components/resume/EducationSimple.vue';
import ProjectsShowcase from '../components/resume/ProjectsShowcase.vue';

export default {
  name: 'HomeView',
  components: {
    PersonalInfo,
    SkillsSimple,
    WorkSimple,
    EducationSimple,
    ProjectsShowcase
  }
}
</script>

<style>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.section-title-text {
  font-size: 22px;
  font-weight: bold;
  padding: 0 10px;
}

/* 各模块标题前添加图标 */
.home-view a-divider:nth-of-type(1) .section-title-text::before {
  content: "👤";
  margin-right: 8px;
}

.home-view a-divider:nth-of-type(2) .section-title-text::before {
  content: "🔧";
  margin-right: 8px;
}

.home-view a-divider:nth-of-type(3) .section-title-text::before {
  content: "💼";
  margin-right: 8px;
}

.home-view a-divider:nth-of-type(4) .section-title-text::before {
  content: "🎓";
  margin-right: 8px;
}

.home-view a-divider:nth-of-type(5) .section-title-text::before {
  content: "📋";
  margin-right: 8px;
}

/* 各部分增加间距和边框 */
.home-view > div {
  margin-bottom: 40px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

/* 特别为项目经历部分调整样式 */
.home-view > .projects-showcase {
  padding: 0;
  background-color: transparent;
  box-shadow: none;
}

.home-view > .projects-showcase::before {
  display: none;
}

/* 暗黑模式样式 */
.dark-mode .home-view > div {
  background-color: #1f1f1f;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.dark-mode .home-view > div::before {
  background: linear-gradient(90deg, #1890ff, rgba(24, 144, 255, 0.2));
}

.dark-mode .home-view > .projects-showcase {
  background-color: transparent;
  box-shadow: none;
}

/* 炫酷风格样式 */
.cool-style .section-title-text {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .home-view > div {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cool-style .home-view > div:hover:not(.projects-showcase) {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.dark-mode.cool-style .home-view > div:hover:not(.projects-showcase) {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* 响应式样式 */
@media print {
  .home-view {
    max-width: 100%;
    padding: 0;
  }
  
  .home-view > div {
    box-shadow: none;
    margin-bottom: 20px;
    page-break-inside: avoid;
  }
}

@media (max-width: 768px) {
  .home-view {
    padding: 0 10px 20px;
  }
  
  .home-view > div {
    padding: 16px;
    margin-bottom: 24px;
  }
  
  .home-view > .projects-showcase {
    padding: 0;
  }
  
  .section-title-text {
    font-size: 20px;
  }
}
</style> 
