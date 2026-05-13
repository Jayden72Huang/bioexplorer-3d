import { useMemo, useState } from 'react'
import MODEL_CATALOG from '../data/modelCatalog.js'
import SearchBar from './SearchBar.jsx'
import ModelCard from './ModelCard.jsx'
import CurriculumFilter from './CurriculumFilter.jsx'
import GenerateModal from './GenerateModal.jsx'

export default function LibraryView({ lang, onSelectModel, onGenerate }) {
  const [search, setSearch] = useState('')
  const [activeFramework, setActiveFramework] = useState(null)
  const [activeTopic, setActiveTopic] = useState(null)
  const [showGenerate, setShowGenerate] = useState(false)

  const filtered = useMemo(() => {
    let items = MODEL_CATALOG

    if (activeFramework) {
      items = items.filter((item) =>
        item.curricula.some((c) => c.framework === activeFramework && (!activeTopic || c.topic === activeTopic))
      )
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim()
      items = items.filter((item) => {
        const haystack = [
          item.name.en, item.name.zh,
          item.description.en, item.description.zh,
          ...item.tags,
          item.slug,
          ...item.curricula.map((c) => `${c.framework} ${c.topic}`),
        ].join(' ').toLowerCase()
        return haystack.includes(q)
      })
    }

    return items
  }, [search, activeFramework, activeTopic])

  function handleFilter(framework, topic) {
    setActiveFramework(framework)
    setActiveTopic(topic)
  }

  const readyCount = MODEL_CATALOG.filter((m) => m.model?.glbUrl).length
  const totalCount = MODEL_CATALOG.length

  return (
    <div className="library-view">
      <div className="library-topbar">
        <div className="library-title">
          <h2>{lang === 'zh' ? '3D 模型图书馆' : '3D Model Library'}</h2>
          <span className="library-count">
            {readyCount}/{totalCount} {lang === 'zh' ? '个模型可用' : 'models ready'}
          </span>
        </div>
        <SearchBar value={search} onChange={setSearch} lang={lang} />
      </div>

      <div className="library-body">
        <CurriculumFilter
          activeFramework={activeFramework}
          activeTopic={activeTopic}
          onFilter={handleFilter}
          lang={lang}
        />

        <div className="library-grid">
          {filtered.length === 0 ? (
            <div className="library-empty">
              <p>{lang === 'zh' ? '未找到匹配的模型' : 'No matching models found'}</p>
              <button type="button" onClick={() => { setSearch(''); handleFilter(null, null) }}>
                {lang === 'zh' ? '清除筛选' : 'Clear filters'}
              </button>
            </div>
          ) : (
            filtered.map((item) => (
              <ModelCard
                key={item.id}
                item={item}
                lang={lang}
                onClick={() => onSelectModel(item)}
              />
            ))
          )}

          <button type="button" className="model-card create-card" onClick={() => setShowGenerate(true)}>
            <div className="create-card-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div className="model-card-info">
              <strong>{lang === 'zh' ? '创建自定义模型' : 'Create Custom Model'}</strong>
              <small>{lang === 'zh' ? '输入名称或上传图片' : 'Type a name or upload image'}</small>
            </div>
          </button>
        </div>
      </div>

      {showGenerate && (
        <GenerateModal
          lang={lang}
          onClose={() => setShowGenerate(false)}
          onGenerate={onGenerate}
        />
      )}
    </div>
  )
}
