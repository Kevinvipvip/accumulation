const formatTime = (date, dateType) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  if (dateType) {
    if (dateType === 'date') {
      return [year, month, day].map(formatNumber).join('-')
    } else if (dateType === 'time') {
      return [hour, minute, second].map(formatNumber).join(':')
    }
  } else {
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export default {
  // 日期时间格式化
  formatTime: formatTime,
  // 日期时间补全两位数
  formatNumber: formatNumber
}
