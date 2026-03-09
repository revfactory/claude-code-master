import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'
import Script from 'next/script'
import type { Metadata } from 'next'

const GA_MEASUREMENT_ID = 'G-VXVWSZ20CG'

const siteUrl = 'https://claudecode-master.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Claude Code 마스터 - Claude Code 설정 완전 가이드',
    template: '%s – Claude Code 마스터',
  },
  description:
    'Claude Code 설정 완전 가이드 - 에이전트, 스킬, 훅, 커맨드, 규칙을 활용한 AI 코딩 어시스턴트 마스터하기',
  keywords:
    'Claude Code, AI 코딩, 에이전트, 스킬, 훅, 커맨드, 규칙, Anthropic, Claude, 개발자 도구, AI 어시스턴트',
  authors: [{ name: 'Claude Code 마스터' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'Claude Code 마스터',
    title: 'Claude Code 마스터 - Claude Code 설정 완전 가이드',
    description:
      'Claude Code 설정 완전 가이드 - 에이전트, 스킬, 훅, 커맨드, 규칙을 활용한 AI 코딩 어시스턴트 마스터하기',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/everything-claude-coding.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code 마스터 - Claude Code 설정 완전 가이드',
    description:
      'Claude Code 설정 완전 가이드 - 에이전트, 스킬, 훅, 커맨드, 규칙을 활용한 AI 코딩 어시스턴트 마스터하기',
    images: [`${siteUrl}/everything-claude-coding.png`],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/everything-claude-coding.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  const navbar = (
    <Navbar
      logo={
        <span
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: '1.3rem',
            fontWeight: 700,
          }}
        >
          Claude Code 마스터
        </span>
      }
      projectLink="https://github.com/revfactory/claude-code-master"
    />
  )

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head
        backgroundColor={{ dark: '#1a1a1a', light: '#fafafa' }}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/revfactory/claude-code-master/tree/main"
          editLink="이 페이지 수정하기 →"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ title: '목차' }}
          footer={
            <Footer>
              <span
                style={{
                  fontFamily: '"Noto Sans KR", sans-serif',
                  color: '#71717a',
                }}
              >
                Claude Code 마스터 - {new Date().getFullYear()}
              </span>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
