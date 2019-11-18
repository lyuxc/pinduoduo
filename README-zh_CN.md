
<div align="center">
  一个基于 Antd 中后台前端解决方案，提供更多通用性业务模块，让开发者更加专注于业务。
</div>

[English](README.md) | 简体中文

## 快速入门

```bash
# 确保使用的是最新版本 Angular cli
ng new demo --style less
cd demo
ng add ng-alain
ng s -o
# 或 HMR 模式
npm run hmr
```

> 请参考[命令行工具](https://ng-alain.com/cli)了解更多细节。
>
> [vscode] 建议安装 [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) 和 [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) 插件，开发更爽。

其他(服务、运营、商家、业主)： businessmicroservice
政府： governmentui
物业： propertymicroservice
http://192.168.1.172:8080/

打包：
node_modules/.bin     ----    npm run prod


发布

#1.在命令行中运行 yarn build命令，生成前端部署文件，再运行docker build命令，生成 docker镜像

  yarn build 或者 在node_modules/.bin文件夹下打开命令行    ----    npm run prod
  
  docker build -t ssp-property-web:latest .

#2.运行 docker images 查看当前生成的image，复制image id, 替换 docker save命令行中对应的ID，随后运行 docker save

  docker images

  docker save   fe03927f7bb6 > D:/work/zhxq/zhxqfile/ssp-property-web.tar

## 手机预览
启动服务 ng serve --host 0.0.0.0
手机 http://192.168.0.110:4200
