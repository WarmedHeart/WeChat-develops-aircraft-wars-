## quickstart

## 源码目录介绍
```
./js
├── base                                   // 定义游戏开发基础类
│   └── sprite.js                          // 游戏基本元素精灵类
├── libs
│   ├── event.js                           //检查是否触碰到飞机，游戏结束--检查触碰重新开始--检查触碰立即复活
│   └── weapp-adapter.js                   // 小游戏适配器
├── npc
│   └── enemy.js                           // 敌机类
│   └── enermy_factory.js                  // 敌机工厂类
│   └── strategy.js                        // 敌机策略类
│   └── prop.js                            // 道具类
│   └── prop_factory.js                    // 道具工厂类
│   └── strategy1.js                       // 敌机策略类
├── player
│   ├── bullet.js                          // 子弹类
│   └── plane.js                           // 玩家类
├── runtime
│   ├── background.js                      // 背景类
│   ├── gameinfo.js                        // 用于展示结束界面
│   └── music.js                           // 全局音效管理器
│   └── databus.js                         // 管控游戏全局状态
└── main.js                                // 游戏入口主函数

```