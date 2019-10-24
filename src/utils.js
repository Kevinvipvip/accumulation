import Vue from 'vue'

const that = new Vue()

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

// 将Bmob中数据类型为date的数据转换 成Number类型存在一个新的字段中
// const up_data = (table, data) => {
//   for (let i = 0; i < data.length; i++) {
//     that.Bmob.Query(table).get(data[i].objectId).then(res => {
//       res.set('timestamp', new Date(res.end_time.iso).getTime())
//       res.save()
//     }).catch(err => {
//       console.log(err)
//     })
//   }
// }

export default {
  // 日期时间格式化
  formatTime: formatTime,
  // 日期时间补全两位数
  formatNumber: formatNumber,
  // Bmob 修改数据
  // up_data
}
