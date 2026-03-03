# 카를로 프로젝트 - 가톨릭 정보 시스템 혁신 컨설팅

서울대교구 전산정보실 "카를로 프로젝트" RFP에 대한 종합 컨설팅 자료입니다.

## Live Demo

- **컨설팅 프레젠테이션**: https://tobl-ai.github.io/myungdong_catholic/
- **굿뉴스 2.0 목업**: https://tobl-ai.github.io/myungdong_catholic/#/mockup

## 프로젝트 구조

```
├── 260116_카를로프로젝트_제안요청서.pdf   # 원본 RFP
├── 카를로프로젝트_종합컨설팅.md           # 종합 컨설팅 문서
├── 카를로프로젝트_종합컨설팅.docx         # Google Docs용
└── web/                                  # 웹 프레젠테이션 + 목업
    ├── src/
    │   ├── components/    # 공통 컴포넌트 (Nav, Hero, Section, Footer)
    │   ├── sections/      # 프레젠테이션 섹션 (12개)
    │   └── mockup/        # 굿뉴스 2.0 풀 인터페이스 목업
    └── public/images/     # Gemini AI 생성 이미지
```

## 컨설팅 목차

1. 카를로 아쿠티스 - 프로젝트 명명 배경
2. RFP 요약 - 3.5억원, 6개월 컨설팅
3. 현행 시스템 진단 - Classic ASP(1996), 30년 기술 격차
4. Before & After - MCP, A2A, llms.txt 에이전트 프로토콜
5. 2027 비전 - API-First, AI-Native, Agent-Ready
6. 양업 ERP 연동 - 본당양업22 + 하상앱
7. 보안 분석 - On-Premise vs Cloud, 망분리 오해와 진실
8. 기술 스택 - Firebase + Next.js + Claude Code (85% 비용 절감)
9. 해외 벤치마킹 - Hallow, Magisterium AI, Vatican.va
10. 로드맵 - 4단계, 총 1.9억원

## 기술 스택 (웹 프레젠테이션)

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Build**: Vite 7
- **Hosting**: GitHub Pages
- **이미지 생성**: Gemini 3 Pro / 3.1 Flash (AI 생성)

## 로컬 실행

```bash
cd web
npm install
npm run dev
```

## 핵심 제안

| 항목 | 현재 | 제안 |
|------|------|------|
| 기술 | Classic ASP (1996) | Next.js 15 + Firebase |
| 인프라 | On-Premise (망분리) | GCP 서울 리전 |
| AI | 없음 | Gemini 2.5 + RAG |
| 개발 | 10인 팀 18-24개월 | 2-3인 + Claude Code 7개월 |
| 비용 | 15-25억원 | 2-3억원 (85% 절감) |
| 운영비 | 1,350만원+/월 | 200-400만원/월 |

---

**TOBL AI** · 2026.03
