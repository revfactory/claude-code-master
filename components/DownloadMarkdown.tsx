'use client'

import React from 'react'
import { Download, Lightbulb } from 'lucide-react'
import { useTheme } from 'next-themes'

interface DownloadMarkdownProps {
  filename: string
  content: string
  folderPath?: string
}

export function DownloadMarkdown({ filename, content, folderPath = '~/.claude/agents/' }: DownloadMarkdownProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{
      marginTop: '1.5rem',
      marginBottom: '2rem',
      padding: '1rem 1.5rem',
      background: isDark ? '#27272a' : '#fafafa',
      borderRadius: '10px',
      border: `1px solid ${isDark ? '#3f3f46' : '#e5e5e5'}`
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <button
          onClick={handleDownload}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.1rem',
            background: isDark ? '#fafafa' : '#18181b',
            color: isDark ? '#18181b' : '#fafafa',
            border: `1px solid ${isDark ? '#e4e4e7' : '#27272a'}`,
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: '"Noto Sans KR", -apple-system, sans-serif',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isDark ? '#e4e4e7' : '#27272a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isDark ? '#fafafa' : '#18181b'
          }}
        >
          <Download size={16} />
          마크다운 다운로드
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: isDark ? '#a1a1aa' : '#71717a',
          fontSize: '0.85rem'
        }}>
          <Lightbulb size={15} style={{ color: isDark ? '#71717a' : '#a1a1aa' }} />
          <span>다운로드 후 <code style={{
            background: isDark ? '#3f3f46' : '#f4f4f5',
            padding: '0.15rem 0.4rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            color: isDark ? '#e4e4e7' : '#3f3f46',
            border: `1px solid ${isDark ? '#52525b' : '#e4e4e7'}`
          }}>{folderPath}</code> 폴더에 복사하여 사용하세요</span>
        </div>
      </div>
    </div>
  )
}
