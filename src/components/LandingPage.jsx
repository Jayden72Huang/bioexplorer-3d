import { useState } from 'react'
import { Dna, Microscope, BookOpen, Pencil, Globe, ChevronRight, Sparkles } from 'lucide-react'
import './LandingPage.css'

const FEATURES = [
  { icon: Dna, titleZh: '交互式 3D 细胞模型', titleEn: 'Interactive 3D Cell Models', descZh: '旋转、缩放、点击探索每一个细胞器，比教科书更直观', descEn: 'Rotate, zoom, and click to explore every organelle — more intuitive than any textbook' },
  { icon: Pencil, titleZh: '逐细胞器批注', titleEn: 'Per-Organelle Annotations', descZh: '在 3D 模型上直接为每个细胞器添加学习笔记，自动保存', descEn: 'Add study notes directly on each organelle in the 3D model, auto-saved' },
  { icon: BookOpen, titleZh: 'IB / AP / A-Level 课纲对齐', titleEn: 'IB / AP / A-Level Aligned', descZh: '每个模型标注对应的考纲知识点，复习更有针对性', descEn: 'Each model tagged with exam syllabus topics for targeted revision' },
  { icon: Globe, titleZh: '中英双语', titleEn: 'Bilingual (EN/ZH)', descZh: '一键切换中英文，适合国际学校和双语学习者', descEn: 'Switch between English and Chinese — perfect for international schools' },
]

const CURRICULA = [
  { name: 'IB Biology', color: '#2563eb', topics: 'Topic 1.2, 2.3, 6.1...' },
  { name: 'AP Biology', color: '#dc2626', topics: 'Unit 2.1, 4.6...' },
  { name: 'A-Level Biology', color: '#059669', topics: 'Section 2.1.1, 6.1...' },
]

export default function LandingPage({ onEnterApp, lang: initialLang }) {
  const [lang, setLang] = useState(initialLang || 'zh')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const zh = lang === 'zh'

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    try {
      const stored = JSON.parse(localStorage.getItem('bio-waitlist') || '[]')
      stored.push({ email: email.trim(), ts: new Date().toISOString() })
      localStorage.setItem('bio-waitlist', JSON.stringify(stored))
    } catch {}
    setSubmitted(true)
  }

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="landing-brand">
          <div className="landing-logo">
            <Dna size={24} />
          </div>
          <span>{zh ? '细胞建筑工作室' : 'Cell Architecture Studio'}</span>
        </div>
        <nav className="landing-nav">
          <button type="button" className="lang-switch" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
            {zh ? 'EN' : '中文'}
          </button>
          <button type="button" className="cta-small" onClick={onEnterApp}>
            {zh ? '开始使用' : 'Get Started'}
            <ChevronRight size={16} />
          </button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} />
            {zh ? '为 IB / AP / A-Level 生物打造' : 'Built for IB / AP / A-Level Biology'}
          </div>
          <h1>{zh ? '用 3D 模型学细胞生物学' : 'Learn Cell Biology in 3D'}</h1>
          <p>
            {zh
              ? '交互式 3D 细胞模型 + 智能批注，让每一个细胞器都看得见、摸得着、记得住。'
              : 'Interactive 3D cell models with smart annotations — see, touch, and remember every organelle.'}
          </p>
          <div className="hero-actions">
            <button type="button" className="cta-primary" onClick={onEnterApp}>
              {zh ? '免费体验 3D 模型' : 'Try 3D Models Free'}
              <ChevronRight size={18} />
            </button>
            <span className="hero-hint">{zh ? '无需注册，即刻开始' : 'No signup required'}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-cell">
            <img src="/icons.svg" alt="" className="hero-placeholder" />
            <div className="hero-float-tag t1">Nucleus</div>
            <div className="hero-float-tag t2">Mitochondria</div>
            <div className="hero-float-tag t3">ER</div>
          </div>
        </div>
      </section>

      <section className="curricula-bar">
        {CURRICULA.map((c) => (
          <div key={c.name} className="curricula-chip" style={{ '--c': c.color }}>
            <strong>{c.name}</strong>
            <span>{c.topics}</span>
          </div>
        ))}
      </section>

      <section className="features">
        <h2>{zh ? '为什么选择细胞建筑工作室？' : 'Why Cell Architecture Studio?'}</h2>
        <div className="features-grid">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.titleEn} className="feature-card">
                <div className="feature-icon"><Icon size={24} /></div>
                <h3>{zh ? f.titleZh : f.titleEn}</h3>
                <p>{zh ? f.descZh : f.descEn}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="social-proof">
        <div className="proof-stat">
          <strong>10+</strong>
          <span>{zh ? '3D 细胞模型' : '3D Cell Models'}</span>
        </div>
        <div className="proof-stat">
          <strong>3</strong>
          <span>{zh ? '国际课纲覆盖' : 'Curricula Covered'}</span>
        </div>
        <div className="proof-stat">
          <strong>2</strong>
          <span>{zh ? '语言支持' : 'Languages'}</span>
        </div>
      </section>

      <section className="waitlist">
        <h2>{zh ? '抢先体验完整版' : 'Get Early Access'}</h2>
        <p>{zh ? '留下邮箱，完整版上线第一时间通知你（含更多模型 + AI 生成）' : 'Leave your email to get notified when the full version launches (more models + AI generation)'}</p>
        {submitted ? (
          <div className="waitlist-success">
            {zh ? '已加入等待列表！我们会尽快联系你。' : "You're on the list! We'll reach out soon."}
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={zh ? '你的邮箱地址' : 'Your email address'} required />
            <button type="submit">{zh ? '加入等待列表' : 'Join Waitlist'}</button>
          </form>
        )}
      </section>

      <footer className="landing-footer">
        <span>Cell Architecture Studio &copy; 2026</span>
        <button type="button" onClick={onEnterApp}>{zh ? '进入应用' : 'Enter App'}</button>
      </footer>
    </div>
  )
}
