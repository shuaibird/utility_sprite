# Sprite Utility
##### 工具说明：自动将UI elements生成sprite
```sh
$ npm install
$ npm start
```

- 将生成得到的sprite.png和sprite.css两个文件拷贝到项目中，注意要放到同个文件夹下
- 浏览器访问 [http://localhost:1234](http://localhost:1234)，点击所需icon自动复制相关类名
- 调用范例： `<div class="sprite-icon filename"></div>`
- 默认自动添加sprite-icon类，该类作用将display设置为inline-block，可手动移除
- 对于hover效果图标，hover效果icon文件名规则为filename_hover，调用时添加icon-hover类
- 父类hover的在父元素添加icon-hover-container
