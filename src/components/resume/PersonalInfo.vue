<template>
  <div class="personal-info">
    <div class="personal-info-card">
      <a-row align="middle" :gutter="[24, 24]">
        <a-col :xs="24" :md="8" class="avatar-col">
          <div class="avatar-container">
            <a-avatar :size="140" :src="personalInfo.avatar" class="avatar" />
            <div class="social-links">
              <a-space>
                <a v-for="(social, index) in personalInfo.social" :key="index" 
                   :href="social.url" target="_blank" rel="noopener noreferrer">
                  <a-button shape="circle" class="social-btn">
                    <template #icon><component :is="getSocialIcon(social.icon)" /></template>
                  </a-button>
                </a>
              </a-space>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :md="16" class="info-col">
          <div class="info-header">
            <h1 class="name">{{ personalInfo.name }}</h1>
            <a-space>
              <a-tag color="blue" class="position-tag" v-for="(position, index) in personalInfo.position" :key="index">
                {{ position }}
              </a-tag>
            </a-space>
          </div>
          
          <a-divider style="margin: 16px 0" />
          
          <div class="contact-grid">
            <a-row :gutter="[16, 16]">
              <a-col :span="12">
                <div class="contact-item">
                  <MailOutlined />
                  <span>{{ personalInfo.email }}</span>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="contact-item">
                  <PhoneOutlined />
                  <span>{{ personalInfo.phone }}</span>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="contact-item">
                  <EnvironmentOutlined />
                  <span>{{ personalInfo.location }}</span>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="contact-item">
                  <ClockCircleOutlined />
                  <span>{{ personalInfo.jobStatus }}</span>
                </div>
              </a-col>
            </a-row>
          </div>
          
          <a-divider style="margin: 16px 0" />
          
          <a-typography-paragraph class="summary">
            {{ personalInfo.summary }}
          </a-typography-paragraph>
        </a-col>
      </a-row>
    </div>
    
    <div class="personal-stats">
      <a-row :gutter="[16, 16]">
        <a-col :xs="12" :md="6">
          <a-statistic 
            title="工作经验" 
            :value="formatExperience(personalInfo.workStart).years + '年'" 
            :suffix="formatExperience(personalInfo.workStart).months + '月'"  
            :value-style="{ color: '#1890ff' }"
          />
        </a-col>
        <a-col :xs="12" :md="6">
          <a-statistic 
            title="带队经验" 
            value="10" 
            suffix="人" 
            :value-style="{ color: '#52c41a' }"
          />
        </a-col>
        <a-col :xs="12" :md="6">
          <a-statistic 
            title="年龄" 
            :value="formatAge(personalInfo.birthday).years + '岁'" 
            :suffix="formatAge(personalInfo.birthday).months + '月'" 
            :value-style="{ color: '#722ed1' }"
          />
        </a-col>
        <a-col :xs="12" :md="6">
          <a-statistic 
            title="服务客户" 
            value="400+" 
            suffix="万" 
            :value-style="{ color: '#fa8c16' }"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import resumeDataService from '../../utils/resumeData';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  PrinterOutlined,
  GithubOutlined,
  ZhihuOutlined,
  LinkOutlined,
  YuqueOutlined
} from '@ant-design/icons-vue';

export default {
  name: 'PersonalInfo',
  components: {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    DownloadOutlined,
    PrinterOutlined,
    GithubOutlined,
    ZhihuOutlined,
    LinkOutlined,
    YuqueOutlined
  },
  data() {
    return {
      personalInfo: resumeDataService.getPersonalInfo()
    };
  },
  methods: {
    /**
     * 获取社交媒体图标组件
     * @param {string} iconName 图标名称
     * @return {Component} 图标组件
     */
    getSocialIcon(iconName) {
      const iconMap = {
        'github': GithubOutlined,
        'zhihu': ZhihuOutlined,
        'link': LinkOutlined,
        'yuque': YuqueOutlined
      };
      
      return iconMap[iconName] || LinkOutlined;
    },
    
    /**
     * 打印简历
     */
    printResume() {
      window.print();
    },
    
    /**
     * 下载PDF简历
     * 注意：实际实现可能需要后端服务或浏览器打印API
     */
    downloadPdf() {
      // 使用浏览器打印功能，另存为PDF
      const printWindow = window.open('', '_blank');
      
      if (printWindow) {
        // 准备打印内容
        printWindow.document.write('<html><head><title>李星星的简历</title>');
        printWindow.document.write('<link rel="stylesheet" href="' + window.location.origin + '/index.css" />');
        printWindow.document.write('</head><body>');
        
        // 复制当前页面内容
        const content = document.querySelector('.home-view').cloneNode(true);
        printWindow.document.write(content.outerHTML);
        
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        
        // 等待资源加载完成后打印
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      } else {
        // 如果弹窗被阻止，使用直接打印
        window.print();
      }
    },

    /**
     * 格式化年龄为年月格式
     * @param {string} birthday 生日 (格式: YYYY-MM-DD)
     * @return {object} 年龄，包含年和月
     */
    formatAge(birthday) {
      if (!birthday) return { years: 0, months: 0 };
      
      const birthdayDate = new Date(birthday);
      const today = new Date();
      
      // 计算年份差
      let years = today.getFullYear() - birthdayDate.getFullYear();
      
      // 计算月份差
      let months = today.getMonth() - birthdayDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // 如果当月日期还没到生日当天，月份减1
      if (today.getDate() < birthdayDate.getDate()) {
        months--;
        if (months < 0) {
          years--;
          months += 12;
        }
      }
      
      return { years, months };
    },
    
    /**
     * 格式化工作经验为年月格式
     * @param {string} workStart 工作开始日期 (格式: YYYY-MM-DD)
     * @return {object} 工作年限，包含年和月
     */
    formatExperience(workStart) {
      if (!workStart) return { years: 0, months: 0 };
      
      const startDate = new Date(workStart);
      const today = new Date();
      
      // 计算年份差
      let years = today.getFullYear() - startDate.getFullYear();
      
      // 计算月份差
      let months = today.getMonth() - startDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // 如果当月日期小于开始日期，月份减1
      if (today.getDate() < startDate.getDate()) {
        months--;
        if (months < 0) {
          years--;
          months += 12;
        }
      }
      
      return { years, months };
    },

    // 保留原来的计算方法，以便兼容其他地方可能的使用
    calculateAge(birthday) {
      if (!birthday) return 0;
      
      const birthdayDate = new Date(birthday);
      const today = new Date();
      
      // 计算年份差
      let age = today.getFullYear() - birthdayDate.getFullYear();
      
      // 如果今年的生日还没到，年龄减1
      const birthdayThisYear = new Date(
        today.getFullYear(),
        birthdayDate.getMonth(),
        birthdayDate.getDate()
      );
      
      if (today < birthdayThisYear) {
        age--;
      }
      
      // 计算月份差
      let months = today.getMonth() - birthdayDate.getMonth();
      if (months < 0) {
        months += 12;
      }
      
      // 计算日差异，微调月份小数部分
      const dayDiff = today.getDate() - birthdayDate.getDate();
      if (dayDiff < 0) {
        months -= 1;
        if (months < 0) {
          months += 12;
        }
      }
      
      // 将月份差转为小数
      const monthsAsDecimal = parseFloat((months / 12).toFixed(1));
      
      // 返回年龄+月份小数部分
      return age + monthsAsDecimal;
    },
    
    calculateWorkExperience(workStart) {
      if (!workStart) return 0;
      
      const startDate = new Date(workStart);
      const today = new Date();
      
      // 计算年份差
      let years = today.getFullYear() - startDate.getFullYear();
      
      // 计算月份差
      let months = today.getMonth() - startDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // 计算日差异，微调月份小数部分
      const dayDiff = today.getDate() - startDate.getDate();
      if (dayDiff < 0) {
        months -= 1;
        if (months < 0) {
          years--;
          months += 12;
        }
      }
      
      // 将月份差转为小数
      const monthsAsDecimal = parseFloat((months / 12).toFixed(1));
      
      // 返回年数+月份小数部分
      return years + monthsAsDecimal;
    }
  }
}
</script>

<style scoped>
.personal-info {
  max-width: 100%;
}

.personal-info-card {
  margin-bottom: 24px;
}

.avatar-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  position: relative;
}

.avatar {
  border: 4px solid #f0f0f0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.dark-mode .avatar {
  border-color: #333;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.personal-badges {
  position: absolute;
  bottom: 0;
  right: 0;
}

.info-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 600;
}

.position-tag {
  padding: 4px 12px;
  font-size: 14px;
}

.contact-grid {
  margin-bottom: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.65);
}

.dark-mode .contact-item {
  color: rgba(255, 255, 255, 0.65);
}

.summary {
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 16px 0;
}

.personal-stats {
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
}

.dark-mode .personal-stats {
  background-color: rgba(255, 255, 255, 0.02);
}

/* 炫酷模式样式 */
.cool-style .avatar {
  border: 4px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(90deg, #1890ff, #722ed1) border-box;
}

.cool-style .name {
  background: linear-gradient(90deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  color: transparent;
}

.cool-style .personal-stats {
  background: rgba(24, 144, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.dark-mode.cool-style .personal-stats {
  background: rgba(24, 144, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 响应式样式 */
@media (min-width: 768px) {
  .info-header {
    align-items: flex-start;
  }
  
  .action-buttons {
    justify-content: flex-start;
  }
}

@media (max-width: 767px) {
  .avatar-col {
    margin-bottom: 24px;
  }
  
  .info-col {
    text-align: center;
  }
  
  .contact-item {
    justify-content: center;
  }
}
</style> 
