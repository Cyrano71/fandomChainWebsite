'use client'

import { useEffect, useState } from 'react'

const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

export default function MatrixBackground() {
  const [columns, setColumns] = useState<number[]>([])

  useEffect(() => {
    const updateColumns = () => {
      const columnCount = Math.floor(window.innerWidth / 20)
      setColumns(Array.from({ length: columnCount }, (_, i) => i))
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  return (
    <div className="matrix-bg">
      {columns.map((column) => (
        <div
          key={column}
          className="matrix-column"
          style={{
            left: `${column * 20}px`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              style={{
                opacity: Math.random(),
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {characters[Math.floor(Math.random() * characters.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
