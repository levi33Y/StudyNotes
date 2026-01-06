# aliyun arms 对接

[前端arms监测](https://help.aliyun.com/zh/arms/browser-monitoring/user-guide/js-error-diagnostics?spm=a2c4g.11186623.help-menu-34364.d_2_3.6d4c52e8CBIWvF)





arms服务，初始化、自定义api、自定义行为

~~~ts
import { arms } from "@/config";
import BrowserLogger from "@arms/js-sdk";

export enum ArmsBehaviorEnum {
  MICROPHONE = "麦克风",
  SHARE_SCREEN = "共享屏幕",
  ROOM = "会议房间",
}

export interface IArmsSDKConfigProps {
  /*
   * https://help.aliyun.com/zh/arms/browser-monitoring/developer-reference/sdk-reference?spm=a2c4g.11186623.help-menu-34364.d_5_3.4e166676qNU8Dj&scm=20140722.H_58655._.OR_help-T_cn~zh-V_1#sc-release
   *
   */
  release: string;
  uid?: string;
  page: string;
  setUsername?: () => string;
  enableLinkTrace?: boolean;
  behavior?: boolean;
  enableSPA?: boolean;
  useFmp?: boolean;
  autoSendPerf?: boolean;
  /* 用作房间号 */
  c1: string;
}

/**
 * arms
 * 属性
 * https://help.aliyun.com/zh/arms/browser-monitoring/developer-reference/sdk-reference?spm=a2c4g.11186623.help-menu-34364.d_5_3.4e166676qNU8Dj&scm=20140722.H_58655._.OR_help-T_cn~zh-V_1
 * 方法
 * https://help.aliyun.com/zh/arms/browser-monitoring/developer-reference/api-reference?spm=a2c4g.11186623.help-menu-34364.d_5_2.78b04cf95JDDE5&scm=20140722.H_58657._.OR_help-T_cn~zh-V_1
 */
export class ArmsService {
  instance: any;

  router: string = "";

  constructor() {}

  bindInstance(sdkConfig: IArmsSDKConfigProps) {
    if (this.instance) {
      console.log("ArmsService already initialized");

      return;
    }

    let config = {
      enableLinkTrace: true,
      behavior: true,
      useFmp: true,
      enableSPA: false,
      autoSendPerf: false,
      // disableHook: true,
      ...sdkConfig,
    } as any;

    if (arms?.pid) {
      config.pid = arms?.pid;

      config.environment = arms.environment;
    } else if (import.meta.env.VITE_ARMS_PID) {
      config.pid = import.meta.env.VITE_ARMS_PID;

      config.environment = "local";
    }

    console.log("Init ArmsService", config);

    if (config?.pid) {
      this.router = config?.page;

      this.instance = BrowserLogger.singleton(config, [
        ["api", config.page, true, Date.now(), "SUCCESS"],
      ]);
    }
  }

  addBehavior<T extends ArmsBehaviorEnum>(type: T, message: string) {
    this.instance?.addBehavior({
      data: {
        name: type,
        message,
      },
      page: this.router,
    });

    this.instance?.reportBehavior();
  }

  addApi(msg: string, success: boolean = true) {
    armsService.instance.api(
      armsService.router,
      success,
      Date.now(),
      success ? "SUCCESS" : "ERROR",
      msg,
    );
  }
}

export const armsService = new ArmsService();

~~~



electron启动监测 

~~~vue
// app.vue
<template>
    <arms>
      <router-view />
    </arms>
</template>
~~~



~~~vue
// arms.vue
<script setup lang="ts">
import { RoutePath } from "@/entity/types";
import { useAppStore } from "@/stores/useAppStore";
import { useMeetingStore } from "@/stores/useMeetingStore";
import { armsService, IArmsSDKConfigProps } from "@components/arms/ArmsService";
import { onMounted } from "vue";

const appStore = useAppStore();

const hashQuery: string[] =
  window.location.hash.split("#")?.at(1)?.split("&") ?? [];

const initArms = async (page?: string) => {
  let config = {} as IArmsSDKConfigProps;

  const meetingPage = "123456";
  
  const userId = "uid00001"
  
  const userName = "张三"

  try {
    const { version } = await window.electronAPI.appInfo();

    config.release = version;

    config.page = page;
    // 自定义字段
      config.c1 = meetingNumber;

    // uid
      config.uid = appStore.userInfo.id + "";

    // username
      if (userName) {
        config.setUsername = function () {
          return appStore.userInfo.userName;
        };
      }
  } finally {
    armsService.bindInstance(config);
  }
};

onMounted(async () => {
  // hash 路由 https://meet.meeting.com/#/roomPage
  const page = hashQuery?.at(0)?.split("?")?.at(0);

  await initArms(page as string);
});
</script>

<template>
  <slot />
</template>
~~~

