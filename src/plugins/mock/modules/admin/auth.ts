import type { ResponseData } from '../../../../utils/request/index.d';
import type { IObject } from '../../../../global.d';
import { interceptJointData } from '../../../../utils/common';
import { AuthenticationEnum, IconTypeEnum } from '../../../../enums';

export default {
  /**
   * 校验用户名称是否存在
   */
  validateUsername: {
    url: '/admin/user/validate',
    method: 'get',
    data: { validateResult: true },
    response: <T>(params: IObject, res: ResponseData<T>) => {
      if (
        interceptJointData(params.url).username !==
        AuthenticationEnum.VISITOR_USERNAME
      ) {
        return {
          ...res,
          code: 10034,
          msg: null,
          data: { validateResult: false },
        };
      }
      return res;
    },
  },

  /**
   * 获取权限路由
   */
  getRoleRoutes: {
    url: '/admin/user/route/list',
    method: 'get',
    data: [
      {
        path: '/admin/example',
        name: 'admin.example',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Guide',
          menuName: '功能示例',
          sort: 2,
        },
        children: [
          {
            path: '/admin/example/crud',
            name: 'admin.example.crud',
            component: '/admin/example/crud',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'DocumentCopy',
              menuName: '增删改查',
              sort: 0,
            },
          },
          {
            path: '/admin/example/icon',
            name: 'admin.example.icon',
            component: '/admin/example/icon',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'MagicStick',
              menuName: '自定义图标',
              sort: 1,
            },
          },
          {
            path: '/admin/example/xicons',
            name: 'admin.example.xicons',
            component: '/admin/example/xicons',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Link',
              menuName: '扩展图标库',
              sort: 2,
            },
          },
          {
            path: '/admin/example/editor',
            name: 'admin.example.editor',
            component: '/admin/example/editor',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Document',
              menuName: '富文本编辑器',
              sort: 3,
            },
          },
          {
            path: '/admin/example/echarts',
            name: 'admin.example.echarts',
            component: '/admin/example/echarts',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'DataLine',
              menuName: '图表',
              sort: 4,
            },
          },
          {
            path: '/admin/example/map',
            name: 'admin.example.map',
            component: '/admin/example/map',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'MapLocation',
              menuName: '地图',
              sort: 5,
            },
          },
          {
            path: '/admin/example/form',
            name: 'admin.example.form',
            component: '/admin/example/form',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'DocumentChecked',
              menuName: '分布表单',
              sort: 6,
            },
          },
          {
            path: '/admin/example/result',
            name: 'admin.example.result',
            component: '/admin/example/result',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Warning',
              menuName: '结果页',
              sort: 7,
            },
          },
        ],
      },
      {
        path: '/admin/role',
        name: 'admin.role',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.APP,
          icon: 'role',
          menuName: '权限管理',
          sort: 3,
        },
        children: [
          {
            path: '/admin/role/role',
            name: 'admin.role.role',
            component: '/admin/role/role',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'CollectionTag',
              menuName: '角色管理',
              sort: 0,
            },
          },
          {
            path: '/admin/role/user',
            name: 'admin.role.user',
            component: '/admin/role/user',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'User',
              menuName: '用户管理',
              sort: 1,
            },
          },
          {
            path: '/admin/role/dept',
            name: 'admin.role.dept',
            component: '/admin/role/dept',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.APP,
              icon: 'tree',
              menuName: '部门管理',
              sort: 2,
            },
          },
          {
            path: '/admin/role/post',
            name: 'admin.role.post',
            component: '/admin/role/post',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Postcard',
              menuName: '岗位管理',
              sort: 3,
            },
          },
        ],
      },
      {
        path: '/admin/system',
        name: 'admin.system',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Operation',
          menuName: '系统管理',
          sort: 4,
        },
        children: [
          {
            path: '/admin/system/menu',
            name: 'admin.system.menu',
            component: '/admin/system/menu',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Menu',
              menuName: '菜单管理',
              sort: 0,
            },
          },
          {
            path: '/admin/system/dict',
            name: 'admin.system.dict',
            component: '/admin/system/dict',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Reading',
              menuName: '字典管理',
              sort: 1,
            },
          },
          {
            path: '/admin/system/params',
            name: 'admin.system.params',
            component: '/admin/system/params',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Key',
              menuName: '参数管理',
              sort: 2,
            },
          },
          {
            path: '/admin/system/file',
            name: 'admin.system.file',
            component: '/admin/system/file',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'FolderOpened',
              menuName: '文件管理',
              sort: 3,
            },
          },
          {
            path: '/admin/system/setting',
            name: 'admin.system.setting',
            component: '/admin/system/setting',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Setting',
              menuName: '系统设置',
              sort: 4,
            },
          },
          {
            path: '/admin/system/log',
            name: 'admin.system.log',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Notebook',
              menuName: '日志管理',
              sort: 5,
            },
            children: [
              {
                path: '/admin/system/log/login',
                name: 'admin.system.log.login',
                component: '/admin/system/login',
                meta: {
                  layout: 'admin',
                  requiresAuth: true,
                  iconType: IconTypeEnum.ELEMENT_PLUS,
                  icon: 'User',
                  menuName: '登录日志',
                  sort: 0,
                },
              },
              {
                path: '/admin/system/log/action',
                name: 'admin.system.log.action',
                component: '/admin/system/action',
                meta: {
                  layout: 'admin',
                  requiresAuth: true,
                  iconType: IconTypeEnum.ELEMENT_PLUS,
                  icon: 'Pointer',
                  menuName: '操作日志',
                  sort: 1,
                },
              },
            ],
          },
        ],
      },
      {
        path: '/admin/development',
        name: 'admin.development',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Coin',
          menuName: '开发工具',
          sort: 5,
        },
        children: [
          {
            path: '/admin/development/options',
            name: 'admin.development.options',
            component: '/admin/development/options',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Operation',
              menuName: '开发配置',
              sort: 0,
            },
          },
          {
            path: '/admin/development/code',
            name: 'admin.development.code',
            component: '/admin/development/code',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'ElementPlus',
              menuName: '代码生成',
              sort: 1,
            },
          },
          {
            path: '/admin/development/form',
            name: 'admin.development.form',
            component: '/admin/development/form',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Coordinate',
              menuName: '表单设计',
              sort: 2,
            },
          },
        ],
      },
    ],
  },

  /**
   * 获取用户权限
   */
  getUserRoles: {
    url: '/admin/user/role/list',
    method: 'get',
    data: [
      '/admin/home/workbench',
      '/admin/home/visual',
      '/admin/about',
      '/admin/example/crud',
      '/admin/example/icon',
      '/admin/example/xicons',
      '/admin/example/editor',
      '/admin/example/echarts',
      '/admin/example/map',
      '/admin/example/form',
      '/admin/example/result',
      '/admin/role/role',
      '/admin/role/user',
      '/admin/role/dept',
      '/admin/role/post',
      '/admin/system/menu',
      '/admin/system/dict',
      '/admin/system/params',
      '/admin/system/file',
      '/admin/system/setting',
      '/admin/system/log',
      '/admin/system/log/login',
      '/admin/system/log/action',
      '/admin/development/options',
      '/admin/development/code',
      '/admin/development/form',
    ],
  },
};