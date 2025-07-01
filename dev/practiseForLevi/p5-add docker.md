# 上线部署



## 一、编写Dockerfile

~~~dockerfile
# production stage
FROM nginx:stable-alpine
COPY /build /usr/share/nginx/html

RUN  sed -i '12a error_page 404 /index.html;' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
~~~



## 二、本地测试



## 三、cicd