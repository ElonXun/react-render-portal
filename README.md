# react-render-portal

[![NPM](https://img.shields.io/badge/npm-v1.0.0-orange.svg)](https://www.npmjs.com/package/react-render-portal)

## install
```
npm install react-render-portal --save
```

## usage

**react v16.0.0** 

``` 
import React from 'react';
import {RenderPortalV2} from 'react-render-portal';

  const example = () => (
    <RenderPortalV2>
       <p>I will render in body</p>
    </RenderPortalV2>
  )

 ```
 RenderPortalV2组件会将 其内部子组件 `<p>I will render in body</p>`传送至 `body` 节点下 和 `root`并列
 并且 RenderPortalV2 内部子组件 会触发的事件会一直冒泡至 RenderPortalV2 (沿React树传递)

**代码示例**

[jsfiddle传送门](http://jsfiddle.net/panxiaoxian/n3p94of4/) (V16.0.0冒泡事件的传递请到这里查看)

![RenderPortalV2](https://github.com/ElonXun/react-render-portal/blob/master/lib/image/1E60C333-1834-4E9C-8F0C-8C9F5A34459D.png)
 
update:
在RenderPortalV2基础上更新至RenderPortalV3,使RenderPortal支持创建自定义的container包裹目标组件

```
import React from 'react';
import {RenderPortalV3} from 'react-render-portal';

 getContainer() {
    const popup= document.createElement('div');
    document.body.appendChild(popup);
    return popup;
 }
 
 const example = () => (
    <RenderPortalV3 container={this.getContainer} >
       <p>I will render in body</p>
    </RenderPortalV2>
  )
```
---
 
 **react 旧版本**

``` 
import React from 'react';
import {RenderPortalV1} from 'react-render-portal';

  const example = () => (
    <RenderPortalV1>
       <p>I will render in body</p>
    </RenderPortalV1>
  )

 ```
 RenderPortalV2组件会将 其内部子组件 `<p>I will render in body</p>`传送至 `body` 节点下 和 `root`并列
 但无事件传递
 
 **代码示例**

[jsfiddle传送门](http://jsfiddle.net/panxiaoxian/6gvof9Ly/) 

![RenderPortalV1](https://github.com/ElonXun/react-render-portal/blob/master/lib/image/v1.png)
 
 
