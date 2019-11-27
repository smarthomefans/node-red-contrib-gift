<!--
 * @Author        : fineemb
 * @Github        : https://github.com/fineemb
 * @Description   : 
 * @Date          : 2019-11-26 23:51:05
 * @LastEditors   : fineemb
 * @LastEditTime  : 2019-11-27 22:14:00
 -->
# node-red-contrib-gift

> 生日提醒插件, 还在为忘记老婆和母上大人的生日而发愁吗?有了这个插件会在生日的前7天,3天,当天提醒你到她们的生日了,这时候你要赶快准备要的礼物咯.


## 安装

**Requires Node.js v6.0 or newer**

Either install from the Node-RED palette manager, or:

```
$ npm i node-red-contrib-gift
```

## Usage

找到 `gift-nofity` 节点,编辑人员生日信息, 生日格式为`xx-xx`,如果你的生日是11月1号就填写`11-1`,没有做格式检查,自己注意填写.

## 更新

  - 修复一些之前不能使用的一些bug
  - 更改提醒方式为提前n天,这个时间范围内每天都会提醒
  - 增加纪念日条目的数据内容,包括日期,星期几
  - 修复一个1day错误


## Maintainers

[@yaming116](https://github.com/yaming116) [@fineemb](https://github.com/fineemb)

## License

MIT © 2018 yaming116