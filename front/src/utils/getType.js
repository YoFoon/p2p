const value = {
  bj_1: "民营系",
  bj_2: "国资系",
  bj_3: "上市系",
  bj_4: "银行系",
  bj_5: "国资参股",
  yc_1: "银行存管",
  yc_2: "暂无存管",
  yc_3: "存管协议已签订",
  yc_4: "资金托管",
  yy_1: "一年内",
  yy_2: "一年以上",
  yy_3: "两年以上",
  yy_4: "三年以上",
  yy_5: "四年以上",
  yy_6: "五年以上",
  yy_7: "六年以上",
  yy_8: "七年以上",
  yy_9: "八年以上",
  yy_10: "十年以上",
  rz_1: "A轮融资",
  rz_2: "B轮融资",
  rz_3: "C轮融资",
  rz_4: "D轮融资",
  rz_5: "IPO"
}
const getType = (v) => {
  return value[v]
}

export default getType