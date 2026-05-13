import CURRICULUM_FRAMEWORKS from '../data/curriculum.js'

const FRAMEWORK_COLORS = {}
CURRICULUM_FRAMEWORKS.forEach((f) => { FRAMEWORK_COLORS[f.id] = f.color })

export default function ModelCard({ item, lang, onClick }) {
  const name = item.name[lang] || item.name.en
  const desc = item.description[lang] || item.description.en
  const hasModel = Boolean(item.model?.glbUrl)

  return (
    <button type="button" className="model-card" onClick={onClick} style={{ '--card-accent': item.accent }}>
      <div className="model-card-thumb">
        {item.thumbnail ? (
          <img src={item.thumbnail} alt={name} loading="lazy" />
        ) : (
          <div className="model-card-placeholder" style={{ background: item.accent + '22' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={item.accent} strokeWidth="1.5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
            </svg>
          </div>
        )}
        {hasModel && <span className="model-badge">3D</span>}
        {!hasModel && <span className="model-badge pending">{lang === 'zh' ? '待生成' : 'Pending'}</span>}
      </div>
      <div className="model-card-info">
        <strong>{name}</strong>
        <small>{desc}</small>
        <div className="model-card-tags">
          {item.curricula.map((c) => (
            <span key={c.framework + c.topic} className="framework-pill" style={{ '--fw-color': FRAMEWORK_COLORS[c.framework] || '#888' }}>
              {c.framework} {c.topic}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
