import { useRef } from 'react'

export default function SearchBar({ value, onChange, lang }) {
  const inputRef = useRef(null)
  const placeholder = lang === 'zh' ? '搜索细胞或细胞器...' : 'Search cells or organelles...'

  return (
    <div className="library-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button type="button" className="search-clear" onClick={() => { onChange(''); inputRef.current?.focus() }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}
