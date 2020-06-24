# taro-dva-ts
taro-dva-ts,taro V2.+

# 写在前面


taro 版本 Taro 2.x

- 升级到 Taro 2.0 需要执行以下命令：
  
```

# 如果你使用 NPM

$ npm update -g @tarojs/cli@2.0.0

# 如果你使用 Yarn

$ yarn global upgrade @tarojs/cli@2.0.0

```

- 项目目录里运行以下命令来升级依赖：

`$ taro update project 2.0.0 `


## 配置文件生成脚本

### npm run tem '文件名'

```

cnpm run tep index


page文件夹下生成了一个index的文件夹，里面包含

- index.interface.ts
- index.scss
- index.tsx

```

### npm run com '文件名‘


```

cnpm run com list


components文件夹下生成了一个list的文件夹，里面包含

- index.interface.ts
- index.scss
- index.tsx

```


> 说明

1、引用taro组件UI样式，放到app.scss 下引入

```
 
<!-- app.scss -->

 @import "~taro-ui/dist/style/components/button.scss";

```