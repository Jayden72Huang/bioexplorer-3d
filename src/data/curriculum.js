const CURRICULUM_FRAMEWORKS = [
  {
    id: 'IB',
    name: { en: 'IB Biology', zh: 'IB 生物' },
    color: '#2563eb',
    units: [
      {
        id: '1', name: { en: 'Cell Biology', zh: '细胞生物学' },
        topics: [
          { id: '1.1', name: { en: 'Introduction to cells', zh: '细胞概论' } },
          { id: '1.2', name: { en: 'Ultrastructure of cells', zh: '细胞超微结构' } },
          { id: '1.3', name: { en: 'Membrane structure', zh: '膜结构' } },
          { id: '1.4', name: { en: 'Membrane transport', zh: '膜运输' } },
          { id: '1.5', name: { en: 'The origin of cells', zh: '细胞的起源' } },
          { id: '1.6', name: { en: 'Cell division', zh: '细胞分裂' } },
        ],
      },
      {
        id: '2', name: { en: 'Molecular Biology', zh: '分子生物学' },
        topics: [
          { id: '2.1', name: { en: 'Molecules to metabolism', zh: '分子与代谢' } },
          { id: '2.8', name: { en: 'Cell respiration', zh: '细胞呼吸' } },
          { id: '2.9', name: { en: 'Photosynthesis', zh: '光合作用' } },
        ],
      },
      {
        id: '6', name: { en: 'Human Physiology', zh: '人体生理学' },
        topics: [
          { id: '6.1', name: { en: 'Digestion and absorption', zh: '消化与吸收' } },
          { id: '6.2', name: { en: 'The blood system', zh: '血液系统' } },
          { id: '6.3', name: { en: 'Defence against disease', zh: '疾病防御' } },
          { id: '6.5', name: { en: 'Neurons and synapses', zh: '神经元与突触' } },
          { id: '6.6', name: { en: 'Hormones and metabolism', zh: '激素与代谢' } },
        ],
      },
    ],
  },
  {
    id: 'AP',
    name: { en: 'AP Biology', zh: 'AP 生物' },
    color: '#dc2626',
    units: [
      {
        id: '1', name: { en: 'Chemistry of Life', zh: '生命化学' },
        topics: [
          { id: '1.1', name: { en: 'Structure of water and carbon', zh: '水与碳的结构' } },
        ],
      },
      {
        id: '2', name: { en: 'Cell Structure & Function', zh: '细胞结构与功能' },
        topics: [
          { id: '2.1', name: { en: 'Cell structure', zh: '细胞结构' } },
          { id: '2.2', name: { en: 'Cell structure and function', zh: '细胞结构与功能' } },
          { id: '2.3', name: { en: 'Cell size', zh: '细胞大小' } },
          { id: '2.4', name: { en: 'Plasma membranes', zh: '细胞膜' } },
          { id: '2.5', name: { en: 'Membrane transport', zh: '膜运输' } },
        ],
      },
      {
        id: '3', name: { en: 'Cellular Energetics', zh: '细胞能量学' },
        topics: [
          { id: '3.1', name: { en: 'Enzyme structure', zh: '酶结构' } },
          { id: '3.3', name: { en: 'Cellular respiration', zh: '细胞呼吸' } },
          { id: '3.5', name: { en: 'Photosynthesis', zh: '光合作用' } },
        ],
      },
      {
        id: '4', name: { en: 'Cell Communication', zh: '细胞通讯' },
        topics: [
          { id: '4.1', name: { en: 'Cell communication', zh: '细胞通讯' } },
          { id: '4.6', name: { en: 'Signal transduction', zh: '信号转导' } },
        ],
      },
      {
        id: '6', name: { en: 'Gene Expression', zh: '基因表达' },
        topics: [
          { id: '6.5', name: { en: 'Gene expression', zh: '基因表达调控' } },
        ],
      },
    ],
  },
  {
    id: 'A-Level',
    name: { en: 'A-Level Biology', zh: 'A-Level 生物' },
    color: '#059669',
    units: [
      {
        id: '1', name: { en: 'Biological Molecules', zh: '生物分子' },
        topics: [
          { id: '1.1', name: { en: 'Monomers and polymers', zh: '单体与聚合物' } },
        ],
      },
      {
        id: '2', name: { en: 'Cells', zh: '细胞' },
        topics: [
          { id: '2.1.1', name: { en: 'Cell structure', zh: '细胞结构' } },
          { id: '2.1.2', name: { en: 'Cell division', zh: '细胞分裂' } },
          { id: '2.1.5', name: { en: 'Biological membranes', zh: '生物膜' } },
          { id: '2.1.6', name: { en: 'Cell recognition', zh: '细胞识别' } },
        ],
      },
      {
        id: '3', name: { en: 'Exchange & Transport', zh: '交换与运输' },
        topics: [
          { id: '3.1.1', name: { en: 'Surface area to volume', zh: '表面积与体积' } },
          { id: '3.1.3', name: { en: 'Transport in animals', zh: '动物体内运输' } },
        ],
      },
      {
        id: '5', name: { en: 'Energy Transfers', zh: '能量转换' },
        topics: [
          { id: '5.1', name: { en: 'Photosynthesis', zh: '光合作用' } },
          { id: '5.2', name: { en: 'Respiration', zh: '呼吸作用' } },
        ],
      },
      {
        id: '6', name: { en: 'Response to Stimuli', zh: '刺激响应' },
        topics: [
          { id: '6.1', name: { en: 'Nervous coordination', zh: '神经协调' } },
          { id: '6.2', name: { en: 'Muscle contraction', zh: '肌肉收缩' } },
        ],
      },
    ],
  },
]

export default CURRICULUM_FRAMEWORKS
