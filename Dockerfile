# Node 22 사용
FROM node:22

# 컨테이너 내 작업 디렉토리 설정
WORKDIR /app

# package.json만 복사하여 의존성 설치
COPY package.json .
RUN npm install

# 이후 전체 소스 복사
COPY . .

# Vite dev server의 기본 포트
EXPOSE 5173

# "npm start" 실행
CMD ["npm", "start"]
