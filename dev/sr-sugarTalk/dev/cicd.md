cicd

package：dmg exe zip yml nginx

ci: buid-->file change-->build image-->push image

cd: map value->reploy

安装包过大，构造镜像时把安装包也包含了，导致push不稳定



## cdn分发/ssr



## github

electron-builder配置文件中，配置publish 为github

## gitlab

公司私有gitlab，有大小限制导致release时失败

electron-build 不支持gitlab api，需要手动通过http上传

和tag映射 规则有限制，要v开头才能在tag下创建release

## push image



## dockfile lay

dockfile

```dockerfile
FROM nginx:stable-alpine

COPY /release/*.yml /usr/share/nginx/html
COPY /release/*.zip /usr/share/nginx/html
COPY /release/*.dmg /usr/share/nginx/html
COPY /release/*.exe /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i '/^http {/a \
    gzip on;\n\
    gzip_static on;' /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

```

ci push image

~~~
# 1. 准备变量 (保留你原有的逻辑)
repository=`echo %build.number%|sed 's^+^-^g'`
FULL_IMAGE="%docker.tag%:$repository"

# 2. 配置重试参数
MAX_RETRIES=10       # 最大重试次数 (建议设大一点，比如 10 次)
SLEEP_TIME=5         # 失败后等待几秒再试

# 3. 开始循环重试
count=1
while [ $count -le $MAX_RETRIES ]; do
    echo "========================================================"
    echo "🚀 [第 $count / $MAX_RETRIES 次尝试] 正在推送: $FULL_IMAGE"
    echo "========================================================"

    # 执行 push 命令
    docker push "$FULL_IMAGE"

    # 检查命令执行结果 ($? 为 0 表示成功，非 0 表示失败)
    if [ $? -eq 0 ]; then
        echo "✅ Push 成功！"
        exit 0 # 脚本成功结束
    else
        echo "⚠️ Push 失败 (可能是网络波动/代理超时)。"
        
        if [ $count -lt $MAX_RETRIES ]; then
            echo "⏳ 等待 $SLEEP_TIME 秒后自动重试..."
            sleep $SLEEP_TIME
            count=$((count+1))
        else
            echo "❌ 已达到最大重试次数，放弃推送。"
            exit 1 # 脚本以失败状态结束，通知 CI 报错
        fi
    fi
done
~~~

