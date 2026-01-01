## 2024-05-23 - [Scroll Handler Optimization]
**Learning:** Attaching scroll event listeners directly without throttling or using passive flags can lead to main thread congestion, especially on high refresh rate displays or lower-end devices.
**Action:** Prefer `IntersectionObserver` for visibility toggles, or use `requestAnimationFrame` to throttle scroll handlers. This ensures the handler runs at most once per frame.
