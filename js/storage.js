// Python 学习进度存储管理
const ProgressStorage = {
  STORAGE_KEY: 'pythonLearningProgress',
  MASTERED_KEY: 'pythonMasteredItems',

  getProgress() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : { current: 0, completed: 0 };
    } catch (e) {
      console.error('读取进度失败:', e);
      return { current: 0, completed: 0 };
    }
  },

  setProgress(current) {
    try {
      const data = { current, completed: current + 1 };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('保存进度失败:', e);
    }
  },

  getMastered() {
    try {
      const data = localStorage.getItem(this.MASTERED_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('读取已掌握列表失败:', e);
      return [];
    }
  },

  markMastered(id) {
    try {
      const mastered = this.getMastered();
      if (!mastered.includes(id)) {
        mastered.push(id);
        localStorage.setItem(this.MASTERED_KEY, JSON.stringify(mastered));
      }
    } catch (e) {
      console.error('标记已掌握失败:', e);
    }
  },

  unmarkMastered(id) {
    try {
      const mastered = this.getMastered().filter(i => i !== id);
      localStorage.setItem(this.MASTERED_KEY, JSON.stringify(mastered));
    } catch (e) {
      console.error('取消已掌握失败:', e);
    }
  },

  isMastered(id) {
    return this.getMastered().includes(id);
  },

  reset() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.MASTERED_KEY);
    } catch (e) {
      console.error('重置进度失败:', e);
    }
  }
};
