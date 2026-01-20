import React from 'react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>
      {/* Hero Section */}
      <div className="landing-hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        marginTop: '-1.5rem',
        marginLeft: '-4rem',
        marginRight: '-4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} className="animate-float" />

        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} className="animate-float delay-300" />

        <div style={{
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px'
        }}>
          <div className="animate-fade-in" style={{
            fontSize: '5rem',
            marginBottom: '1rem'
          }}>
            ✏️
          </div>

          <h1 className="animate-fade-in delay-100" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: 'white',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            lineHeight: 1.2
          }}>
            Claude Code 마스터
          </h1>

          <p className="animate-fade-in delay-200" style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            opacity: 0.95,
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            color: 'white'
          }}>
            에이전트, 스킬, 훅, 커맨드, 규칙, MCP 설정을<br />
            체계적으로 정리한 완벽한 한글 가이드
          </p>

          <div className="animate-fade-in delay-300" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/getting-started/introduction" className="btn-gradient" style={{
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🚀 시작하기
            </Link>
            <a href="https://github.com/revfactory/claude-code-master" className="btn-outline" style={{
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ⭐ GitHub
            </a>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <div className="animate-bounce" style={{
          position: 'absolute',
          bottom: '2rem',
          color: 'white',
          opacity: 0.7,
          fontSize: '2rem'
        }}>
          ↓
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #f8f9fa 0%, white 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              강력한 기능들
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Claude Code를 더 효율적으로 사용하기 위한 모든 것
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Feature Cards */}
            {[
              { href: '/agents', icon: '🤖', title: '에이전트', desc: '서브에이전트로 위임된 작업을 효율적으로 처리합니다. 코드 리뷰, TDD, 리팩토링 등 다양한 전문 에이전트를 제공합니다.' },
              { href: '/commands', icon: '⚡', title: '커맨드', desc: '슬래시 커맨드로 복잡한 워크플로우를 단순화합니다. /tdd, /code-review, /build-fix 등을 즉시 사용하세요.' },
              { href: '/rules', icon: '📏', title: '규칙', desc: '일관된 코딩 스타일과 보안 가이드라인을 유지합니다. 팀 전체에 적용할 수 있는 표준화된 규칙을 설정하세요.' },
              { href: '/skills', icon: '🎯', title: '스킬', desc: '도메인별 전문 지식을 정의하고 공유합니다. 프론트엔드, 백엔드, 보안 등 다양한 스킬셋을 활용하세요.' },
              { href: '/advanced/hooks', icon: '🪝', title: '훅', desc: '이벤트 기반 자동화로 워크플로우를 강화합니다. 파일 저장, 커밋 등 다양한 이벤트에 훅을 설정하세요.' },
              { href: '/advanced/mcp-servers', icon: '🔌', title: 'MCP 서버', desc: '외부 도구와 서비스를 Claude Code에 연결합니다. 데이터베이스, API, 클라우드 서비스를 통합하세요.' },
            ].map((feature, index) => (
              <Link key={index} href={feature.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ padding: '2rem', height: '100%' }}>
                  <div className="icon-box" style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#333' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.7 }}>
                    {feature.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'white'
            }}>
              빠른 시작
            </h2>
            <p style={{ opacity: 0.9, fontSize: '1.2rem', color: 'white' }}>
              단 몇 줄의 명령어로 시작하세요
            </p>
          </div>

          <div style={{
            padding: '2rem',
            marginBottom: '2rem',
            background: 'rgba(0,0,0,0.4)',
            borderRadius: '16px'
          }}>
            <pre style={{
              background: '#1a1a2e',
              padding: '1.5rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: '#e0e0e0',
              border: 'none',
              margin: 0
            }}>
{`# 저장소 클론
git clone https://github.com/revfactory/claude-code-master.git

# 에이전트를 Claude 설정에 복사
cp claude-code-master/agents/*.md ~/.claude/agents/

# 규칙 복사
cp claude-code-master/rules/*.md ~/.claude/rules/

# 커맨드 복사
cp claude-code-master/commands/*.md ~/.claude/commands/`}
            </pre>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/getting-started/quick-start" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              fontSize: '1.1rem',
              textDecoration: 'none',
              borderBottom: '2px solid rgba(255,255,255,0.5)',
              paddingBottom: '0.25rem',
              transition: 'all 0.3s'
            }}>
              자세한 설치 가이드 보기 →
            </Link>
          </div>
        </div>
      </div>

      {/* Warning Section */}
      <div style={{
        padding: '4rem 2rem',
        background: '#fff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
            border: '1px solid #f0c36d',
            borderRadius: '12px',
            padding: '1.5rem 2rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            <span style={{ fontSize: '1.5rem' }}>⚠️</span>
            <div>
              <strong style={{ color: '#856404', display: 'block', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                컨텍스트 윈도우 관리에 주의하세요!
              </strong>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#664d03' }}>
                <li>모든 MCP를 한 번에 활성화하면 200k 컨텍스트가 70k로 줄어들 수 있습니다</li>
                <li>20-30개 MCP를 설정해두되, 프로젝트당 10개 미만만 활성화하세요</li>
                <li>80개 미만의 도구를 활성 상태로 유지하세요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="gradient-text" style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            지금 시작하세요
          </h2>

          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Claude Code의 잠재력을 최대한 활용하고<br />
            개발 생산성을 한 단계 높여보세요.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/getting-started/introduction" className="btn-gradient" style={{
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>
              📖 문서 읽기
            </Link>
            <Link href="/contributing" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: '#667eea',
              border: '2px solid #667eea',
              padding: '12px 32px',
              borderRadius: '30px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}>
              💜 기여하기
            </Link>
          </div>

          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #ddd',
            color: '#888',
            fontSize: '0.9rem'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <a href="https://github.com/revfactory/claude-code-master" style={{
                color: '#667eea',
                textDecoration: 'none'
              }}>
                GitHub
              </a>
              {' · '}
              <a href="https://docs.anthropic.com/claude-code" style={{
                color: '#667eea',
                textDecoration: 'none'
              }}>
                Claude Code 공식 문서
              </a>
            </p>
            <p style={{ color: '#aaa' }}>
              MIT License · 자유롭게 사용하고 기여해 주세요 ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
