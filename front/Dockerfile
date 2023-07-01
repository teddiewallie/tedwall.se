FROM archlinux
RUN yes | pacman -Syyu
RUN yes | pacman -S nodejs npm
RUN mkdir -p /tedwall.se
COPY . /tedwall.se
WORKDIR /tedwall.se
RUN npm install
RUN npm run build
ENTRYPOINT npm run start
