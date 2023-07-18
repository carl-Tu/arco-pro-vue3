### npm run dev

### 底层接口前端使用 mockjs

### 项目配置文件  config文件下

### commit
```
提交不能中文空格
```
### 路由配置
```
userLoginInfo文件配置路由
store user文件配置权限
```

## pinia 未作持久化处理，需做自行引用
```
yarn add pinia-plugin-persistedstate

storn index文件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
pinia.use(piniaPluginPersistedstate);

```
