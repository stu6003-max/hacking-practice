# 해킹 연습 플랫폼 (Hacking Practice Platform)

드림핵(DreamHack) 같은 CTF 및 해킹 연습 플랫폼입니다.

## 기능 (Features)

### 🎯 주요 기능
- **CTF 문제 풀이**: 다양한 난이도의 해킹 관련 문제
- **학습 자료**: 카테고리별, 난이도별 체계적인 학습 자료
- **다국어 지원**: 한국어 및 영어
- **사용자 인증**: JWT 기반 로그인/회원가입
- **포인트 시스템**: 문제 풀이 시 포인트 획득
- **리더보드**: 사용자 순위 확인

### 📚 학습 자료
- 기초부터 고급까지 단계적 학습
- 실제 예제 코드
- 관련 CTF 문제와 연결

### 🏆 CTF 카테고리
- **웹 해킹 (Web)**: SQL Injection, XSS, CSRF 등
- **암호학 (Crypto)**: AES, RSA, Hash 등
- **시스템 해킹 (Pwn)**: Buffer Overflow, ROP 등
- **포렌식 (Forensics)**: 파일 분석, 로그 분석
- **리버싱 (Reversing)**: 바이너리 역공학
- **기타 (Misc)**: 기타 문제들

## 기술 스택 (Tech Stack)

### Backend
- Node.js + Express.js
- MongoDB
- JWT 인증
- Bcryptjs (비밀번호 암호화)

### Frontend
- React.js
- React Router
- i18next (다국어 지원)
- Axios (API 통신)

## 설치 및 실행 (Installation)

### 사전 요구사항
- Node.js v14 이상
- MongoDB

### 설치

```bash
# 저장소 클론
git clone https://github.com/stu6003-max/hacking-practice.git
cd hacking-practice

# 의존성 설치
npm install
cd client && npm install && cd ..

# 환경 변수 설정
cp .env.example .env
# .env 파일 수정
```

### 실행

```bash
# 개발 모드 (서버 + 클라이언트 동시 실행)
npm run dev

# 서버만 실행
npm run server

# 클라이언트만 실행
cd client && npm start
```

## API 엔드포인트 (API Endpoints)

### 인증 (Authentication)
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인

### 문제 (Challenges)
- `GET /api/challenges` - 모든 문제 조회
- `GET /api/challenges/:id` - 특정 문제 조회
- `POST /api/challenges/:id/submit` - Flag 제출

### 학습 (Learning)
- `GET /api/learning` - 학습 자료 조회
- `GET /api/learning/:id` - 특정 학습 자료 조회

### 사용자 (Users)
- `GET /api/users/leaderboard` - 리더보드
- `GET /api/users/profile` - 사용자 프로필 (인증 필요)
- `PUT /api/users/profile` - 프로필 수정 (인증 필요)

### 제출 (Submissions)
- `GET /api/submissions/user` - 사용자 제출 기록
- `GET /api/submissions/challenge/:id` - 문제 제출 기록

## 프로젝트 구조

```
hacking-practice/
├── server/
│   ├── models/          # 데이터베이스 스키마
│   ├── routes/          # API 라우트
│   ├── middleware/      # 미들웨어 (인증 등)
│   └── index.js        # 서버 진입점
├── client/
│   ├── src/
│   │   ├── locales/     # 다국어 파일
│   │   ├── i18n.js      # i18next 설정
│   │   └── App.js       # 메인 컴포넌트
│   └── package.json
├── .env.example
├── package.json
└── README.md
```

## 다음 단계 (Next Steps)

- [ ] React 컴포넌트 구현
- [ ] 샘플 문제 및 학습 자료 추가
- [ ] 실시간 채팅 기능
- [ ] 문제 해결 영상 튜토리얼
- [ ] 팀 기능
- [ ] 배포 설정 (Docker, AWS)

## 라이선스 (License)

MIT License

## 기여 (Contributing)

문제 발견 시 GitHub Issues로 보고해주세요!
