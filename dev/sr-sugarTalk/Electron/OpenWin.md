```
class WindowPool {
  private pool: BrowserWindow[] = [];
  private maxSize = 3; // 最大池大小
  private activeWindows = new Set<number>(); // 跟踪活动窗口

  getWindow(): BrowserWindow | null {
    while (this.pool.length > 0) {
      const win = this.pool.pop()!;
      if (!win.isDestroyed()) {
        this.activeWindows.add(win.id);
        return win;
      }
    }
    return null;
  }

  returnWindow(win: BrowserWindow) {
    if (win.isDestroyed() || this.activeWindows.has(win.id) === false) {
      return;
    }

    // 重置窗口状态
    win.hide();
    win.removeAllListeners();

    if (this.pool.length < this.maxSize) {
      this.pool.push(win);
    } else {
      win.destroy();
    }

    this.activeWindows.delete(win.id);
  }

  clear() {
    this.pool.forEach(win => {
      if (!win.isDestroyed()) {
        win.destroy();
      }
    });
    this.pool = [];
    this.activeWindows.clear();
  }
}

const windowPool = new WindowPool();

// 应用退出时清理池
app.on('will-quit', () => {
  windowPool.clear();
});
```