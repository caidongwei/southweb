// 防抖
export const debounce = (fn, delay) => {
  // 记录上一次的延时器
  var timer = null;
  return function() {
    var args = arguments;
    var that = this;
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function() {
        fn.apply(that,args)
    }, delay);
  }
}
