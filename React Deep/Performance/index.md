React 内部更新调优 / 189
9.1.1 调和优化手段 / 189
9.1.2 diff 算法



React外部渲染控制 / 196
9.2.1 React 渲染本质 / 196
9.2.2 React 渲染控制手段 / 196
9.2.3 对React 渲染的思考 / 206



9.3任务调度 /206
9.3.1 为什么要使用异步调度 / 206
9.3.2 Scheduler 核心实现 / 207



过渡更新任务 / 210
9.4.1 Transition 使命 / 210
9.4.2 Transition模拟场景 / 211
9.4.3 Transition 具体实现 / 215
9.4.4 Transition 实现原理 / 217



异步组件和懒加载 / 218

9.5.1 异步组件和 Suspense / 219
9.5.2 Suspense 实现懒加载 / 220
Suspense和 React.lazy 原理实现 / 2219.5.3
9.5.4 React V18 SuspenseList / 224
9.5.5 hydrate 模式下的 Suspense 新特性 / 226
9.5.6 Suspense 未来可期 / 227



React 海量数据处理 / 228
9.6.1 渲染切片 / 228
9.6.2 长列表优化方案 / 232



React 使用细节处理 / 236
9.7.1 React 中的防抖和节流 / 236
9.7.2 React 中的动画 / 238
9.7.3 在 React 中防止内存泄露 / 240
9.7.4 在 React 中合理使用状态 / 241



9.8 React 性能问题检测 / 242
9.8.1 Profiler 性能检测工具 / 242
9.8.2 StrictMode 严格模式 / 243
9.8.3 调试工具 react-devtools / 245