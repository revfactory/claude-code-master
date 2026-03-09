'use client'

import React from 'react'
import { Download } from 'lucide-react'
import { commandContents } from './commandContents'
import { useTheme } from 'next-themes'

interface CommandInfo {
  situation: string
  name: string
  href: string
}

const commands: CommandInfo[] = [
  { situation: '새 기능 시작', name: 'plan', href: '/commands/plan' },
  { situation: '테스트와 함께 개발', name: 'tdd', href: '/commands/tdd' },
  { situation: '코드 변경 후', name: 'code-review', href: '/commands/code-review' },
  { situation: '빌드 오류 발생', name: 'build-fix', href: '/commands/build-fix' },
  { situation: 'E2E 테스트 필요', name: 'e2e', href: '/commands/e2e' },
  { situation: '코드 정리 필요', name: 'refactor-clean', href: '/commands/refactor-clean' },
  { situation: '커버리지 확인', name: 'test-coverage', href: '/commands/test-coverage' },
  { situation: '문서 업데이트', name: 'update-docs', href: '/commands/update-docs' },
  { situation: '아키텍처 문서화', name: 'update-codemaps', href: '/commands/update-codemaps' },
]

export function CommandTable() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const handleDownload = (name: string) => {
    const content = commandContents[name]
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
              borderBottom: `2px solid ${isDark ? '#3f3f46' : '#e5e7eb'}`
            }}>상황</th>
            <th style={{
              textAlign: 'left',
              padding: '0.75rem',
              borderBottom: `2px solid ${isDark ? '#3f3f46' : '#e5e7eb'}`
            }}>추천 커맨드</th>
            <th style={{
              textAlign: 'center',
              padding: '0.75rem',
              borderBottom: `2px solid ${isDark ? '#3f3f46' : '#e5e7eb'}`
            }}>다운로드</th>
          </tr>
        </thead>
        <tbody>
          {commands.map((command) => (
            <tr key={command.name} style={{ borderBottom: `1px solid ${isDark ? '#3f3f46' : '#e5e7eb'}` }}>
              <td style={{ padding: '0.75rem' }}>{command.situation}</td>
              <td style={{ padding: '0.75rem' }}>
                <a
                  href={command.href}
                  style={{
                    color: isDark ? '#e4e4e7' : '#18181b',
                    textDecoration: 'none',
                    fontFamily: 'monospace'
                  }}
                >
                  /{command.name}
                </a>
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                <button
                  onClick={() => handleDownload(command.name)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    padding: '0.35rem 0.7rem',
                    background: isDark ? '#fafafa' : '#18181b',
                    color: isDark ? '#18181b' : '#fafafa',
                    border: `1px solid ${isDark ? '#e4e4e7' : '#27272a'}`,
                    borderRadius: '5px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDark ? '#e4e4e7' : '#27272a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isDark ? '#fafafa' : '#18181b'
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
