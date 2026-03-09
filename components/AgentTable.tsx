'use client'

import React from 'react'
import { Download } from 'lucide-react'
import { agentContents } from './agentContents'

interface AgentInfo {
  situation: string
  name: string
  href: string
}

const agents: AgentInfo[] = [
  { situation: '새 기능 계획', name: 'planner', href: '/agents/planner' },
  { situation: '시스템 설계', name: 'architect', href: '/agents/architect' },
  { situation: '테스트 작성', name: 'tdd-guide', href: '/agents/tdd-guide' },
  { situation: '코드 리뷰', name: 'code-reviewer', href: '/agents/code-reviewer' },
  { situation: '보안 검토', name: 'security-reviewer', href: '/agents/security-reviewer' },
  { situation: '빌드 오류', name: 'build-error-resolver', href: '/agents/build-error-resolver' },
  { situation: 'E2E 테스트', name: 'e2e-runner', href: '/agents/e2e-runner' },
  { situation: '코드 정리', name: 'refactor-cleaner', href: '/agents/refactor-cleaner' },
  { situation: '문서 업데이트', name: 'doc-updater', href: '/agents/doc-updater' },
]

export function AgentTable() {
  const handleDownload = (name: string) => {
    const content = agentContents[name]
    if (!content) return

    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${name}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{
              textAlign: 'left',
              padding: '0.75rem',
              borderBottom: '2px solid #e5e7eb'
            }}>상황</th>
            <th style={{
              textAlign: 'left',
              padding: '0.75rem',
              borderBottom: '2px solid #e5e7eb'
            }}>추천 에이전트</th>
            <th style={{
              textAlign: 'center',
              padding: '0.75rem',
              borderBottom: '2px solid #e5e7eb'
            }}>다운로드</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.name} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '0.75rem' }}>{agent.situation}</td>
              <td style={{ padding: '0.75rem' }}>
                <a
                  href={agent.href}
                  style={{
                    color: '#18181b',
                    textDecoration: 'none',
                    fontFamily: 'monospace'
                  }}
                >
                  {agent.name}
                </a>
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                <button
                  onClick={() => handleDownload(agent.name)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    padding: '0.35rem 0.7rem',
                    background: '#18181b',
                    color: '#fafafa',
                    border: '1px solid #27272a',
                    borderRadius: '5px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#27272a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#18181b'
                  }}
                >
                  <Download size={13} />
                  .md
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
