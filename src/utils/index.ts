//条件允许的情况下拼接字符串
//Boolean 是一个函数，它会对遍历数组中的元素，并判断元素的真假类型
//name.filter(Boolean)就是去移除所有的 ”false“ 类型元素
function classes(...name: (string | undefined)[]) {
  return name.filter(Boolean).join(' ');
}
export { classes };
