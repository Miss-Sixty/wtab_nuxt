import pkg from './package.json'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

export default defineAppConfig({
  appInfo: {
    version: pkg.version,
    lastBuildTime: dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
  }
})
