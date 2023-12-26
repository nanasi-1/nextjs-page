FROM --platform=linux/x86_64 node:18.17.1

RUN apt update && \
    apt install -y git locales tmux

RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app
CMD [ "./starting.sh" ]