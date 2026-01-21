import React from 'react'
import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

function Logo() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <span style={{
      fontFamily: '"Noto Sans KR", sans-serif',
      fontSize: '1.3rem',
      fontWeight: 700,
      color: isDark ? '#fafafa' : '#18181b'
    }}>
      Claude Code 마스터
    </span>
  )
}

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/revfactory/claude-code-master',
  },
  docsRepositoryBase: 'https://github.com/revfactory/claude-code-master/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Claude Code 마스터'
      }
    }
    return {
      title: 'Claude Code 마스터 - Claude Code 설정 완전 가이드'
    }
  },
  head: function useHead() {
    const { title, frontMatter } = useConfig()
    const { asPath } = useRouter()

    const siteUrl = 'https://claudecode-master.netlify.app'
    const pageTitle = title ? `${title} – Claude Code 마스터` : 'Claude Code 마스터 - Claude Code 설정 완전 가이드'
    const description = frontMatter.description || 'Claude Code 설정 완전 가이드 - 에이전트, 스킬, 훅, 커맨드, 규칙을 활용한 AI 코딩 어시스턴트 마스터하기'
    const ogImage = `${siteUrl}/everything-claude-coding.png`
    const canonicalUrl = `${siteUrl}${asPath}`

    return (
      <>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VXVWSZ20CG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VXVWSZ20CG');
            `,
          }}
        />

        {/* 기본 메타 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="Claude Code, AI 코딩, 에이전트, 스킬, 훅, 커맨드, 규칙, Anthropic, Claude, 개발자 도구, AI 어시스턴트" />
        <meta name="author" content="Claude Code 마스터" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#18181b" />
        <link rel="canonical" href={canonicalUrl} />

        {/* 파비콘 */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/everything-claude-coding.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Claude Code 마스터" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* 폰트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    titleComponent({ title, type }) {
      return <span style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>{title}</span>
    }
  },
  toc: {
    title: '목차',
    float: true,
  },
  editLink: {
    text: '이 페이지 수정하기 →'
  },
  feedback: {
    content: '피드백 보내기 →',
    useLink: () => 'https://github.com/revfactory/claude-code-master/issues/new'
  },
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <span style={{ fontFamily: '"Noto Sans KR", sans-serif', color: '#71717a' }}>
        Claude Code 마스터 - {new Date().getFullYear()}
      </span>
    )
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    storageKey: 'nextra-theme'
  },
  primaryHue: 240,
  primarySaturation: 5,
  search: {
    placeholder: '검색...',
  },
  gitTimestamp: ({ timestamp }) => (
    <span style={{ fontFamily: '"Noto Sans KR", sans-serif', fontSize: '0.9rem' }}>
      마지막 수정: {timestamp.toLocaleDateString('ko-KR')}
    </span>
  )
}

export default config
