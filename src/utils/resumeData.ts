import resumeData from '../assets/resume-data.json';

/**
 * 简历数据服务
 * 统一管理简历数据的获取和更新
 */
class ResumeDataService {
  private data = resumeData;

  /**
   * 获取完整的简历数据
   */
  getFullData() {
    return this.data;
  }

  /**
   * 获取主题模式（亮色/暗色）
   */
  getThemeMode() {
    return this.data.themeMode;
  }

  /**
   * 获取主题风格（商务/炫酷）
   */
  getThemeStyle() {
    return this.data.themeStyle;
  }

  /**
   * 获取个人信息
   */
  getPersonalInfo() {
    return this.data.personalInfo;
  }

  /**
   * 获取技能信息
   */
  getSkills() {
    return this.data.skills;
  }

  /**
   * 获取教育经历
   */
  getEducation() {
    return this.data.education;
  }

  /**
   * 获取工作经历
   */
  getWorkExperience() {
    return this.data.workExperience;
  }

  /**
   * 获取项目经历
   */
  getProjects() {
    return this.data.projects;
  }
}

export default new ResumeDataService(); 
