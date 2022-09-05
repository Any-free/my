// 防抖
export function debounce(fn, gapTime = 200) {
    let timer;
    return () => {
        clearTimeout(timer);
        var context = this;
        var args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
        timer = setTimeout(() => {
            fn.call(context, args);
        }, gapTime);
    };
}

// 节流
export function throttle(fn, gapTime = 200) {
    let _lastTime = null;
    return () => {
        let _nowTime = +new Date();
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn();
            _lastTime = _nowTime;
        }
    };
};
