import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bot, Zap, Ruler, Target, Anchor, Plug, ArrowRight, Github } from 'lucide-react'

const features = [
  { href: '/agents', Icon: Bot, title: '에이전트', desc: '서브에이전트로 위임된 작업을 효율적으로 처리합니다.' },
  { href: '/commands', Icon: Zap, title: '커맨드', desc: '슬래시 커맨드로 복잡한 워크플로우를 단순화합니다.' },
  { href: '/rules', Icon: Ruler, title: '규칙', desc: '일관된 코딩 스타일과 보안 가이드라인을 유지합니다.' },
  { href: '/skills', Icon: Target, title: '스킬', desc: '도메인별 전문 지식을 정의하고 공유합니다.' },
  { href: '/advanced/hooks', Icon: Anchor, title: '훅', desc: '이벤트 기반 자동화로 워크플로우를 강화합니다.' },
  { href: '/advanced/mcp-servers', Icon: Plug, title: 'MCP 서버', desc: '외부 도구와 서비스를 Claude Code에 연결합니다.' },
]

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ fontFamily: '"Noto Sans KR", -apple-system, sans-serif', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 2rem',
        marginTop: '-1.5rem',
        marginLeft: '-4rem',
        marginRight: '-4rem',
        background: '#fafafa'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%'
        }}>
          <p style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#71717a',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem'
          }}>
            Claude Code 설정 완전 가이드
          </p>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#18181b',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            Claude Code 마스터
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#52525b',
            marginBottom: '2rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            에이전트, 스킬, 훅, 커맨드, 규칙, MCP 설정을
            체계적으로 정리한 완벽한 한글 가이드
          </p>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link href="/getting-started/introduction" className="btn-dark" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#18181b',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 500,
              border: '1px solid #27272a',
              transition: 'all 0.15s ease'
            }}>
              시작하기
              <ArrowRight size={16} color="white" />
            </Link>
            <a href="https://github.com/revfactory/claude-code-master" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              color: '#18181b',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 500,
              border: '1px solid #e4e4e7',
              transition: 'all 0.15s ease'
            }}>
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* Hero Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #e4e4e7',
            background: 'white'
          }}>
            <Image
              src="/everything-claude-coding.png"
              alt="Claude Code 설정 가이드"
              width={1600}
              height={900}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '6rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: '#18181b',
              letterSpacing: '-0.02em'
            }}>
              핵심 구성 요소
            </h2>
            <p style={{ color: '#71717a', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
              Claude Code를 더 효율적으로 사용하기 위한 모든 것
            </p>
          </div>

          <div className="feature-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {features.map((feature, index) => (
              <Link key={index} href={feature.href} style={{
                textDecoration: 'none',
                display: 'block'
              }}>
                <div style={{
                  padding: '1.5rem',
                  height: '100%',
                  background: '#fafafa',
                  borderRadius: '10px',
                  border: '1px solid #e4e4e7',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#a1a1aa'
                  e.currentTarget.style.background = '#f4f4f5'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e4e4e7'
                  e.currentTarget.style.background = '#fafafa'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#18181b',
                    marginBottom: '1rem'
                  }}>
                    <feature.Icon size={22} color="#fafafa" />
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: '#18181b'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: '#71717a',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {feature.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{
        padding: '5rem 2rem',
        background: '#fafafa',
        borderTop: '1px solid #e4e4e7'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#18181b',
            letterSpacing: '-0.02em'
          }}>
            지금 시작하세요
          </h2>

          <p style={{
            color: '#71717a',
            fontSize: '1rem',
            marginBottom: '2rem',
            lineHeight: 1.7
          }}>
            Claude Code의 잠재력을 최대한 활용하고
            개발 생산성을 한 단계 높여보세요.
          </p>

          <Link href="/getting-started/introduction" className="btn-dark" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: '#18181b',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: 500,
            border: '1px solid #27272a',
            transition: 'all 0.15s ease'
          }}>
            문서 읽기
            <ArrowRight size={16} color="white" />
          </Link>

          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #e4e4e7',
            color: '#a1a1aa',
            fontSize: '0.875rem'
          }}>
            <a href="https://github.com/revfactory/claude-code-master" style={{
              color: '#71717a',
              textDecoration: 'none'
            }}>
              GitHub
            </a>
            {' · '}
            <a href="https://docs.anthropic.com/claude-code" style={{
              color: '#71717a',
              textDecoration: 'none'
            }}>
              Claude Code 공식 문서
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
