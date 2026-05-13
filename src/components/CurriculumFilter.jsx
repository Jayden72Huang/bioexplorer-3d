import { useState } from 'react'
import CURRICULUM_FRAMEWORKS from '../data/curriculum.js'

export default function CurriculumFilter({ activeFramework, activeTopic, onFilter, lang }) {
  const [expandedUnit, setExpandedUnit] = useState(null)

  const framework = CURRICULUM_FRAMEWORKS.find((f) => f.id === activeFramework)

  return (
    <aside className="curriculum-filter">
      <div className="framework-pills">
        <button
          type="button"
          className={!activeFramework ? 'active' : ''}
          onClick={() => onFilter(null, null)}
        >
          {lang === 'zh' ? '全部' : 'All'}
        </button>
        {CURRICULUM_FRAMEWORKS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={activeFramework === f.id ? 'active' : ''}
            style={{ '--fw-color': f.color }}
            onClick={() => onFilter(f.id, null)}
          >
            {f.id}
          </button>
        ))}
      </div>

      {framework && (
        <div className="unit-tree">
          {framework.units.map((unit) => (
            <div key={unit.id} className="unit-group">
              <button
                type="button"
                className={expandedUnit === unit.id ? 'unit-header expanded' : 'unit-header'}
                onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={expandedUnit === unit.id ? 'm6 9 6 6 6-6' : 'm9 18 6-6-6-6'} />
                </svg>
                <span>{lang === 'zh' ? unit.name.zh : unit.name.en}</span>
              </button>
              {expandedUnit === unit.id && (
                <div className="topic-list">
                  {unit.topics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      className={activeTopic === topic.id ? 'topic-item active' : 'topic-item'}
                      onClick={() => onFilter(framework.id, topic.id)}
                    >
                      <span className="topic-dot" style={{ background: framework.color }} />
                      {topic.id} {lang === 'zh' ? topic.name.zh : topic.name.en}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}
