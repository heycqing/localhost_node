FROM node:10.16.0

RUN echo '开始复制工作目录....'

COPY . /src
WORKDIR /src

RUN echo '复制工作目录完成'


RUN echo '开始安装依赖....'
RUN npm install
RUN echo '安装依赖完成'

EXPOSE 6699

# CMD node ./server.js

ENTRYPOINT ["npm", "run"]
CMD ["start"]