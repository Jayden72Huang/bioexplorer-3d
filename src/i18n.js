const translations = {
  // Header
  'app.title': { en: 'Cell Architecture Studio', zh: '细胞建筑工作室' },
  'app.subtitle': { en: 'Explore life at the microscopic level', zh: '探索微观世界的生命奥秘' },

  // Nav
  'nav.gallery': { en: 'Gallery', zh: '图库' },
  'nav.library': { en: 'Library', zh: '资料库' },
  'nav.notebooks': { en: 'Notebooks', zh: '笔记' },
  'nav.settings': { en: 'Settings', zh: '设置' },

  // Sidebar
  'sidebar.cellTypes': { en: 'Cell Types', zh: '细胞类型' },
  'sidebar.organelles': { en: 'Organelles', zh: '细胞器' },

  // Viewer Controls
  'viewer.viewMode': { en: 'View Mode', zh: '视图模式' },
  'viewer.crossSection': { en: 'Cross-Section', zh: '横切面' },
  'viewer.solid': { en: 'Solid', zh: '实体' },
  'viewer.layers': { en: 'Layers', zh: '分层' },
  'viewer.focus': { en: 'Focus', zh: '聚焦' },

  // Stage Toolbar
  'toolbar.rotate': { en: 'Rotate', zh: '旋转' },
  'toolbar.isolate': { en: 'Isolate', zh: '隔离' },
  'toolbar.hideOthers': { en: 'Hide Others', zh: '隐藏其他' },
  'toolbar.resetView': { en: 'Reset View', zh: '重置视图' },
  'toolbar.3dProof': { en: '3D Proof', zh: '3D 校验' },
  'toolbar.screenshot': { en: 'Screenshot', zh: '截图' },
  'toolbar.3dExport': { en: '3D Export', zh: '3D 导出' },

  // Detail Panel
  'detail.organelleDetails': { en: 'Organelle Details', zh: '细胞器详情' },
  'detail.size': { en: 'Size', zh: '大小' },
  'detail.location': { en: 'Location', zh: '位置' },
  'detail.visibleInLM': { en: 'Visible in LM', zh: '光镜可见' },
  'detail.label': { en: 'Label', zh: '标注' },
  'detail.biologicalNotes': { en: 'Biological Notes', zh: '生物学笔记' },
  'detail.funFact': { en: 'Fun Fact', zh: '趣味知识' },
  'detail.whereItOccurs': { en: 'Where It Occurs', zh: '分布位置' },
  'detail.curriculum': { en: 'Curriculum', zh: '课程标签' },

  // Bottom Deck
  'bottom.microscopeView': { en: 'Microscope View', zh: '显微镜视图' },
  'bottom.generateMode': { en: 'Generate Mode', zh: '生成模式' },
  'bottom.compareCells': { en: 'Compare Cells', zh: '细胞对比' },
  'bottom.addImage': { en: 'Add Image / GLB', zh: '添加图片 / GLB' },

  // Workspace panels
  'workspace.gallery.desc': { en: 'Saved render angles, microscope snapshots, and exported study plates.', zh: '已保存的渲染角度、显微镜快照和学习面板。' },
  'workspace.library.desc': { en: 'Reference structures for cell walls, membranes, nuclei, lysosomes, and mitochondria.', zh: '细胞壁、细胞膜、细胞核、溶酶体和线粒体的参考结构。' },
  'workspace.notebooks.desc': { en: 'Observation notes linked to the selected cell and organelle.', zh: '与所选细胞和细胞器相关联的观察笔记。' },
  'workspace.settings.desc': { en: 'Viewer quality, labels, cross-section defaults, and export preferences.', zh: '查看器质量、标签、横切面默认值和导出偏好设置。' },
  'workspace.compare.desc': { en: 'Side-by-side cell comparison for visual structure and biological role.', zh: '并排对比细胞的视觉结构和生物学功能。' },
  'workspace.profile.desc': { en: 'Current workspace: Bio Visualization Prototype.', zh: '当前工作区：生物可视化原型。' },

  // Settings
  'settings.saveView': { en: 'Save View', zh: '保存视图' },
  'settings.exportGlb': { en: 'Export GLB', zh: '导出 GLB' },
  'settings.noSavedViews': { en: 'No saved views yet.', zh: '暂无保存的视图。' },
  'settings.organelleLabels': { en: 'Organelle Labels', zh: '细胞器标签' },
  'settings.renderQuality': { en: 'Render Quality', zh: '渲染质量' },
  'settings.compactUi': { en: 'Compact UI', zh: '紧凑界面' },
  'settings.clearGallery': { en: 'Clear Gallery', zh: '清空图库' },

  // Generation
  'gen.uploading': { en: 'Uploading image...', zh: '正在上传图片...' },
  'gen.processing': { en: 'Generating 3D model...', zh: '正在生成 3D 模型...' },
  'gen.success': { en: '3D model ready', zh: '3D 模型已就绪' },
  'gen.failed': { en: 'Generation failed', zh: '生成失败' },
  'gen.retry': { en: 'Retry', zh: '重试' },

  // Library
  'library.title': { en: '3D Model Library', zh: '3D 模型图书馆' },
  'library.search': { en: 'Search cells or organelles...', zh: '搜索细胞或细胞器...' },
  'library.createCustom': { en: 'Create Custom Model', zh: '创建自定义模型' },
  'library.all': { en: 'All', zh: '全部' },
  'library.modelsReady': { en: 'models ready', zh: '个模型可用' },
  'library.noMatch': { en: 'No matching models found', zh: '未找到匹配的模型' },
  'library.clearFilters': { en: 'Clear filters', zh: '清除筛选' },
  'library.pending': { en: 'Pending', zh: '待生成' },

  // Generate Modal
  'generate.title': { en: 'Create Custom 3D Model', zh: '创建自定义 3D 模型' },
  'generate.enterName': { en: 'Enter cell name', zh: '输入细胞名称' },
  'generate.namePlaceholder': { en: 'e.g. red blood cell, 红细胞', zh: '例如：红细胞、stem cell' },
  'generate.or': { en: 'or', zh: '或者' },
  'generate.uploadImage': { en: 'Upload reference image', zh: '上传参考图片' },
  'generate.start': { en: 'Generate', zh: '开始生成' },
  'generate.creatingImage': { en: 'Creating reference image...', zh: '生成参考图中...' },
  'generate.building3d': { en: 'Building 3D model...', zh: '构建 3D 模型中...' },
  'generate.ready': { en: 'Model ready!', zh: '模型已就绪！' },
  'generate.timeHint': { en: 'Usually takes 2-5 minutes', zh: '通常需要 2-5 分钟' },

  // Mode Toggle
  'mode.library': { en: 'Library', zh: '图书馆' },
  'mode.viewer': { en: 'Viewer', zh: '查看器' },

  // Interaction Modes
  'interact.observe': { en: 'Observe', zh: '观察' },
  'interact.annotate': { en: 'Annotate', zh: '批注' },
  'interact.focus': { en: 'Focus', zh: '聚焦' },
  'annotation.title': { en: 'Annotation', zh: '批注' },
  'annotation.placeholder': { en: 'Write your annotation for this organelle...', zh: '写下你对这个细胞器的批注...' },
  'annotation.chars': { en: 'chars', zh: '字' },
  'annotation.autosaved': { en: 'Autosaved', zh: '自动保存' },
  'annotation.hasNote': { en: 'Has annotation', zh: '已有批注' },

  // Misc
  'misc.loaded': { en: 'loaded', zh: '已加载' },
  'misc.ready': { en: 'ready', zh: '已就绪' },
  'misc.vs': { en: 'VS', zh: 'VS' },
  'misc.language': { en: 'EN', zh: '中文' },
}

const cellTypeTranslations = {
  plant: { name: { en: 'Plant Cell', zh: '植物细胞' }, type: { en: 'Eukaryotic Cell', zh: '真核细胞' } },
  'white-blood': { name: { en: 'White Blood Cell', zh: '白细胞' }, type: { en: 'Immune Cell', zh: '免疫细胞' } },
  neuron: { name: { en: 'Neuron', zh: '神经细胞' }, type: { en: 'Nerve Cell', zh: '神经细胞' } },
  epithelial: { name: { en: 'Epithelial Cell', zh: '上皮细胞' }, type: { en: 'Human Tissue Cell', zh: '人体组织细胞' } },
  bacteria: { name: { en: 'Bacteria Cell', zh: '细菌细胞' }, type: { en: 'Prokaryotic Cell', zh: '原核细胞' } },
  animal: { name: { en: 'Animal Cell', zh: '动物细胞' }, type: { en: 'Eukaryotic Cell', zh: '真核细胞' } },
  muscle: { name: { en: 'Muscle Cell', zh: '肌肉细胞' }, type: { en: 'Muscle Fiber', zh: '肌纤维' } },
}

const organelleTranslations = {
  nucleus: {
    label: { en: 'Nucleus', zh: '细胞核' },
    title: { en: 'Nucleus', zh: '细胞核' },
    subtitle: { en: 'Genetic control region', zh: '遗传控制中心' },
    size: { en: 'About 6-10 μm', zh: '约 6-10 μm' },
    location: { en: 'Central cytoplasm', zh: '细胞质中央' },
    visible: { en: 'Yes, stained purple', zh: '可见，染色后呈紫色' },
    note: { en: 'White blood cells use a lobed nucleus to move through tight tissue spaces while coordinating immune response genes.', zh: '白细胞利用分叶核穿过狭窄的组织间隙，同时协调免疫应答基因的表达。' },
  },
  lysosome: {
    label: { en: 'Lysosome', zh: '溶酶体' },
    title: { en: 'Lysosome', zh: '溶酶体' },
    subtitle: { en: 'The cellular cleanup crew', zh: '细胞清洁团队' },
    size: { en: 'About 1-2 μm', zh: '约 1-2 μm' },
    location: { en: 'Blood, lymph, and tissues', zh: '血液、淋巴和组织中' },
    visible: { en: 'Yes, especially with stain', zh: '可见，尤其是染色后' },
    note: { en: 'Lysosomes contain enzymes that digest captured material and damaged cell components.', zh: '溶酶体含有消化酶，可分解捕获的物质和受损的细胞成分。' },
  },
  mitochondria: {
    label: { en: 'Mitochondria', zh: '线粒体' },
    title: { en: 'Mitochondria', zh: '线粒体' },
    subtitle: { en: 'ATP production sites', zh: 'ATP 合成工厂' },
    size: { en: 'About 0.5-1 μm', zh: '约 0.5-1 μm' },
    location: { en: 'Cytoplasm', zh: '细胞质中' },
    visible: { en: 'Often with fluorescent dye', zh: '常用荧光染料可见' },
    note: { en: 'Immune cells change mitochondrial activity as they activate, migrate, and respond to infection.', zh: '免疫细胞在激活、迁移和应对感染时会改变线粒体活性。' },
  },
  membrane: {
    label: { en: 'Plasma Membrane', zh: '细胞膜' },
    title: { en: 'Plasma Membrane', zh: '细胞膜' },
    subtitle: { en: 'Selective outer boundary', zh: '选择性外层边界' },
    size: { en: 'About 7-10 nm', zh: '约 7-10 nm' },
    location: { en: 'Cell perimeter', zh: '细胞外周' },
    visible: { en: 'Indirectly visible', zh: '间接可见' },
    note: { en: 'The membrane receives immune signals and allows the cell to squeeze through tissue barriers.', zh: '细胞膜接收免疫信号，使细胞能够挤过组织屏障。' },
  },
  granules: {
    label: { en: 'Secretory Granules', zh: '分泌颗粒' },
    title: { en: 'Secretory Granules', zh: '分泌颗粒' },
    subtitle: { en: 'Immune response packets', zh: '免疫应答包裹' },
    size: { en: 'About 0.1-1 μm', zh: '约 0.1-1 μm' },
    location: { en: 'Cytoplasm', zh: '细胞质中' },
    visible: { en: 'Yes, as colored dots', zh: '可见，呈彩色点状' },
    note: { en: 'Granules store proteins and signaling molecules released during immune defense.', zh: '颗粒储存蛋白质和信号分子，在免疫防御过程中释放。' },
  },
}

const cellProfileTranslations = {
  plant: {
    summary: { en: 'Rigid wall, large vacuole, chloroplast-like structures, Golgi stacks, and a clear nucleus.', zh: '具有坚硬细胞壁、大液泡、类叶绿体结构、高尔基体叠层和清晰的细胞核。' },
    occurs: { en: 'Leaves, stems, roots, and photosynthetic tissue.', zh: '叶片、茎、根和光合组织中。' },
    comparison: { en: 'Has a rigid wall and chloroplast-like organelles; animal cells do not.', zh: '具有坚硬的细胞壁和类叶绿体细胞器；动物细胞没有。' },
  },
  'white-blood': {
    summary: { en: 'Soft immune cell with lobed nucleus, many lysosomes, granules, and deformable membrane.', zh: '柔软的免疫细胞，具有分叶核、大量溶酶体、颗粒和可变形的细胞膜。' },
    occurs: { en: 'Blood, lymph, and inflamed tissue.', zh: '血液、淋巴和炎症组织中。' },
    comparison: { en: 'More mobile and granular than epithelial cells; built for immune response.', zh: '比上皮细胞更具移动性和颗粒性；专为免疫应答而设。' },
  },
  neuron: {
    summary: { en: 'Compact soma with branching dendrite and axon-like extensions for signal routing.', zh: '紧凑的胞体，具有分支的树突和轴突样延伸，用于信号传导。' },
    occurs: { en: 'Brain, spinal cord, and peripheral nerves.', zh: '大脑、脊髓和周围神经中。' },
    comparison: { en: 'Long membrane extensions dominate the shape; most other cells stay compact.', zh: '长膜延伸主导形态；大多数其他细胞保持紧凑。' },
  },
  epithelial: {
    summary: { en: 'Sheet-like tissue cell with apical ridges, junction cues, membrane boundaries, and nucleus.', zh: '片状组织细胞，具有顶端嵴、连接提示、膜边界和细胞核。' },
    occurs: { en: 'Skin, ducts, organ linings, and protective surfaces.', zh: '皮肤、导管、器官内衬和保护性表面。' },
    comparison: { en: 'Designed for barrier tissue, unlike free-moving white blood cells.', zh: '专为屏障组织而设计，与自由移动的白细胞不同。' },
  },
  bacteria: {
    summary: { en: 'Prokaryotic capsule with nucleoid DNA, ribosome dots, pili, and a flagellum cue.', zh: '原核荚膜，含有拟核 DNA、核糖体点、纤毛和鞭毛结构。' },
    occurs: { en: 'Soil, water, gut flora, skin, and many environmental surfaces.', zh: '土壤、水、肠道菌群、皮肤和各种环境表面。' },
    comparison: { en: 'No nucleus or membrane-bound organelles; the DNA sits in a nucleoid region.', zh: '无细胞核或膜结合细胞器；DNA 位于拟核区域。' },
  },
  animal: {
    summary: { en: 'Flexible eukaryotic cell with nucleus, mitochondria, vesicles, and soft membrane.', zh: '灵活的真核细胞，具有细胞核、线粒体、囊泡和柔软的细胞膜。' },
    occurs: { en: 'Organs, connective tissue, blood-related tissues, and cultured samples.', zh: '器官、结缔组织、血液相关组织和培养样本中。' },
    comparison: { en: 'Lacks the rigid wall shown in plant cells.', zh: '缺少植物细胞中的坚硬细胞壁。' },
  },
  muscle: {
    summary: { en: 'Elongated fiber-like cell with striation cues and extra mitochondria for contraction.', zh: '伸长的纤维状细胞，具有条纹提示和额外的线粒体用于收缩。' },
    occurs: { en: 'Skeletal muscle, cardiac tissue, and contractile tissue samples.', zh: '骨骼肌、心脏组织和收缩性组织样本中。' },
    comparison: { en: 'Elongated and energy-heavy compared with round animal cells.', zh: '与圆形的动物细胞相比，更加伸长且能量需求更大。' },
  },
}

const microscopeTranslations = {
  'Light Microscope': { label: { en: 'Light Microscope', zh: '光学显微镜' }, note: { en: 'Bright-field texture and tissue context.', zh: '明场纹理和组织背景。' } },
  'Stained Selection': { label: { en: 'Stained Selection', zh: '染色选择' }, note: { en: 'Contrast-enhanced organelle staining.', zh: '增强对比度的细胞器染色。' } },
  'Electron Microscope': { label: { en: 'Electron Microscope', zh: '电子显微镜' }, note: { en: 'High-detail grayscale surface scan.', zh: '高细节灰度表面扫描。' } },
}

const curriculumTags = {
  nucleus: [
    { level: 'IB', topic: 'Topic 1.2 - Ultrastructure of cells', detail: 'Nucleus contains chromosomes; DNA associated with histone proteins' },
    { level: 'AP', topic: 'Unit 2 - Cell Structure', detail: 'Nucleus houses genetic material; double membrane with nuclear pores' },
    { level: 'A-Level', topic: '2.1.1 - Cell Structure', detail: 'Role of nucleus in cell division and protein synthesis control' },
  ],
  lysosome: [
    { level: 'IB', topic: 'Topic 1.2 - Ultrastructure of cells', detail: 'Lysosomes contain digestive enzymes; intracellular digestion' },
    { level: 'AP', topic: 'Unit 2 - Cell Structure', detail: 'Lysosomes in autophagy and phagocytosis' },
    { level: 'A-Level', topic: '2.1.1 - Cell Structure', detail: 'Lysosomes formed by Golgi apparatus; role in cell death (apoptosis)' },
  ],
  mitochondria: [
    { level: 'IB', topic: 'Topic 2.8 - Cell Respiration', detail: 'Site of aerobic respiration; cristae increase surface area for oxidative phosphorylation' },
    { level: 'AP', topic: 'Unit 3 - Cellular Energetics', detail: 'Mitochondria and the electron transport chain; chemiosmosis' },
    { level: 'A-Level', topic: '5.2 - Respiration', detail: 'Link reaction, Krebs cycle in matrix; ETC on inner membrane' },
  ],
  membrane: [
    { level: 'IB', topic: 'Topic 1.3 - Membrane Structure', detail: 'Fluid mosaic model; phospholipid bilayer with integral and peripheral proteins' },
    { level: 'AP', topic: 'Unit 2 - Cell Structure', detail: 'Selective permeability; transport proteins and signal transduction' },
    { level: 'A-Level', topic: '2.1.5 - Biological Membranes', detail: 'Cell signalling; role of glycoproteins in cell recognition' },
  ],
  granules: [
    { level: 'IB', topic: 'Topic 1.2 - Ultrastructure of cells', detail: 'Vesicles and secretory granules in exocytosis' },
    { level: 'AP', topic: 'Unit 2 - Cell Structure', detail: 'Endomembrane system; Golgi-mediated vesicle transport' },
    { level: 'A-Level', topic: '2.1.1 - Cell Structure', detail: 'Role of Golgi apparatus in processing and packaging' },
  ],
}

export function t(key, lang = 'en') {
  const entry = translations[key]
  if (!entry) return key
  return entry[lang] || entry.en || key
}

export function getCellTypeName(cellId, lang = 'en') {
  const entry = cellTypeTranslations[cellId]
  if (!entry) return cellId
  return entry.name[lang] || entry.name.en
}

export function getCellTypeLabel(cellId, lang = 'en') {
  const entry = cellTypeTranslations[cellId]
  if (!entry) return ''
  return entry.type[lang] || entry.type.en
}

export function getOrganelleText(organelleId, field, lang = 'en') {
  const entry = organelleTranslations[organelleId]
  if (!entry || !entry[field]) return ''
  return entry[field][lang] || entry[field].en
}

export function getCellProfileText(cellId, field, lang = 'en') {
  const entry = cellProfileTranslations[cellId]
  if (!entry || !entry[field]) return ''
  return entry[field][lang] || entry[field].en
}

export function getMicroscopeText(label, field, lang = 'en') {
  const entry = microscopeTranslations[label]
  if (!entry || !entry[field]) return label
  return entry[field][lang] || entry[field].en
}

export function getCurriculumTags(organelleId) {
  return curriculumTags[organelleId] || []
}

export { cellTypeTranslations, organelleTranslations, cellProfileTranslations, microscopeTranslations, curriculumTags }
