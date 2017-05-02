### Installation
```
npm install format-timestamp --save
```

### Usage

```
import formatTimestamp from 'format-timestamp';

/**
 *  @param timestamp：时间戳，毫秒
 *  @param isDibit：当小于10，补0
 *  @param flag：标志，如：'minutes'，格式化分钟，秒，毫秒；可设置为'days', 'hours', 'minutes', 'seconds', 
 *  'milliseconds'，默认为'days'
 *  @result {Object}
 */

const result = formatTimestamp(60*60*1000*25 + 60*1000 + 8000, true, 'days');

// 倒计时剩余1天1小时1分8秒
window.console.log(`倒计时剩${result.days}天${result.hours}:${result.minutes}:${result.seconds}`);

```