export const menuList = [
    {
        path: 'service',
        name: '服务接口',
        hidden: false,
        children: [
            {
                path: 'app',
                name: 'app配置',
                hidden: false,
                children: [
                    {
                        path: 'level',
                        name: '层级展示',
                        hidden: false,
                    },
                    {
                        path: 'template',
                        name: '模版页面',
                        hidden: false,
                    },
                    {
                        path: 'component',
                        name: '布局与组件',
                        hidden: false,
                    },
                    {
                        path: 'field',
                        name: '字段映射',
                        hidden: false,
                    },
                ]
            },
            {
                path: 'extend',
                name: '扩展服务',
                hidden: false,
                children: [
                    {
                        path: 'aep',
                        name: 'AEP方案生成',
                        hidden: false,
                    },
                    {
                        path: 'message',
                        name: '警报消息发送',
                        hidden: false,
                    },
                    {
                        path: 'uav',
                        name: '无人机平台',
                        hidden: false,
                    },
                ]
            }
        ]
    },
    {
        path: 'control',
        name: '控制中枢',
        hidden: false,
        children: [
            {
                path: 'device',
                name: '设备运行',
                hidden: false,
                children: [
                    {
                        path: 'standard',
                        name: '设备标准',
                        hidden: false,
                    },
                    {
                        path: 'example',
                        name: '设备示例',
                        hidden: false,
                    },
                    {
                        path: 'group',
                        name: '设备分组',
                        hidden: false,
                    },
                ]
            },
            {
                path: 'automation',
                name: '自动化交互',
                hidden: false,
                children: [
                    {
                        path: 'listen',
                        name: '监听器',
                        hidden: false,
                    },
                    {
                        path: 'control',
                        name: '控制器',
                        hidden: false,
                    },
                    {
                        path: 'hook',
                        name: 'Hook触发',
                        hidden: false,
                    },
                ]
            }
        ]
    },
    {
        path: 'approve',
        name: '认证授权',
        hidden: false,
        children: [
            {
                path: 'mqtt',
                name: 'mqtt配置',
                hidden: false,
                children: [
                    {
                        path: 'account',
                        name: '认证账户',
                        hidden: false,
                    },
                    {
                        path: 'acl',
                        name: 'ACL规则组',
                        hidden: false,
                    },
                    {
                        path: 'control',
                        name: '控制台订阅',
                        hidden: false,
                    },
                ]
            },
            {
                path: 'api',
                name: 'api集成',
                hidden: false,
                children: [
                    {
                        path: 'group',
                        name: '设备分组API',
                        hidden: false,
                    },
                ]
            }
        ]
    },
]


export default menuList;
