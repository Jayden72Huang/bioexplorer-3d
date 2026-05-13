import { useRef, useState } from 'react'

export default function GenerateModal({ onClose, onGenerate, lang }) {
  const [textInput, setTextInput] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)
  const [progress, setProgress] = useState('')
  const fileRef = useRef(null)

  async function handleGenerate() {
    if (!textInput.trim() && !file) return
    setStatus('generating')

    try {
      if (file) {
        setProgress(lang === 'zh' ? '构建 3D 模型中...' : 'Building 3D model...')
        await onGenerate({ type: 'image', file })
      } else {
        setProgress(lang === 'zh' ? '生成参考图中...' : 'Creating reference image...')
        await onGenerate({ type: 'text', prompt: textInput.trim() })
      }
      setStatus('success')
      setProgress(lang === 'zh' ? '模型已就绪！' : 'Model ready!')
      setTimeout(onClose, 800)
    } catch (err) {
      setStatus('error')
      setProgress(err.message || (lang === 'zh' ? '生成失败' : 'Generation failed'))
    }
  }

  const isWorking = status === 'generating'

  return (
    <div className="generate-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget && !isWorking) onClose() }}>
      <div className="generate-modal">
        <header className="generate-modal-header">
          <h3>{lang === 'zh' ? '创建自定义 3D 模型' : 'Create Custom 3D Model'}</h3>
          {!isWorking && (
            <button type="button" className="generate-close" onClick={onClose}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </header>

        <div className="generate-modal-body">
          <label className="generate-field">
            <span>{lang === 'zh' ? '输入细胞名称' : 'Enter cell name'}</span>
            <input
              type="text"
              value={textInput}
              onChange={(e) => { setTextInput(e.target.value); setFile(null) }}
              placeholder={lang === 'zh' ? '例如：红细胞、stem cell' : 'e.g. red blood cell, 红细胞'}
              disabled={isWorking}
            />
          </label>

          <div className="generate-divider">
            <span>{lang === 'zh' ? '或者' : 'or'}</span>
          </div>

          <div className="generate-upload-zone" onClick={() => !isWorking && fileRef.current?.click()}>
            {file ? (
              <div className="upload-preview">
                <img src={URL.createObjectURL(file)} alt="preview" />
                <span>{file.name}</span>
              </div>
            ) : (
              <>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                <span>{lang === 'zh' ? '上传参考图片' : 'Upload reference image'}</span>
                <small>{lang === 'zh' ? '支持 PNG / JPG / WebP' : 'PNG / JPG / WebP'}</small>
              </>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) { setFile(f); setTextInput('') }
              }}
            />
          </div>

          {status && (
            <div className={`generate-status ${status}`}>
              {status === 'generating' && <span className="generate-spinner" />}
              {status === 'success' && <span className="generate-check">✓</span>}
              {status === 'error' && <span className="generate-error-icon">!</span>}
              <span>{progress}</span>
            </div>
          )}
        </div>

        <footer className="generate-modal-footer">
          {!isWorking && status !== 'success' && (
            <button
              type="button"
              className="generate-btn"
              disabled={!textInput.trim() && !file}
              onClick={handleGenerate}
            >
              {lang === 'zh' ? '开始生成' : 'Generate'}
            </button>
          )}
          {status === 'error' && (
            <button type="button" className="generate-btn retry" onClick={() => { setStatus(null); setProgress('') }}>
              {lang === 'zh' ? '重试' : 'Retry'}
            </button>
          )}
          <small className="generate-hint">
            {lang === 'zh' ? '通常需要 2-5 分钟' : 'Usually takes 2-5 minutes'}
          </small>
        </footer>
      </div>
    </div>
  )
}
