const PROMPT_MAP = {
  '动物细胞': { en: 'animal cell', slug: 'animal-cell' },
  '植物细胞': { en: 'plant cell', slug: 'plant-cell' },
  '细菌': { en: 'bacteria cell (E. coli)', slug: 'bacteria' },
  '细菌细胞': { en: 'bacteria cell (E. coli)', slug: 'bacteria' },
  '白细胞': { en: 'white blood cell (neutrophil)', slug: 'white-blood-cell' },
  '红细胞': { en: 'red blood cell (erythrocyte)', slug: 'red-blood-cell' },
  '神经细胞': { en: 'neuron (nerve cell)', slug: 'neuron' },
  '肌肉细胞': { en: 'skeletal muscle fiber (muscle cell)', slug: 'muscle-cell' },
  '上皮细胞': { en: 'epithelial cell', slug: 'epithelial-cell' },
  '精子细胞': { en: 'sperm cell (spermatozoon)', slug: 'sperm-cell' },
  '根毛细胞': { en: 'root hair cell', slug: 'root-hair-cell' },
  '叶绿体': { en: 'chloroplast (organelle)', slug: 'chloroplast' },
  '线粒体': { en: 'mitochondria (organelle)', slug: 'mitochondria' },
  '细胞核': { en: 'cell nucleus (organelle)', slug: 'nucleus' },
  '高尔基体': { en: 'Golgi apparatus (organelle)', slug: 'golgi' },
  '内质网': { en: 'endoplasmic reticulum (organelle)', slug: 'er' },
  '溶酶体': { en: 'lysosome (organelle)', slug: 'lysosome' },
  '核糖体': { en: 'ribosome (organelle)', slug: 'ribosome' },
  '中心体': { en: 'centrosome (organelle)', slug: 'centrosome' },
  '液泡': { en: 'vacuole (organelle)', slug: 'vacuole' },
  '细胞壁': { en: 'plant cell wall', slug: 'cell-wall' },
  '细胞膜': { en: 'plasma membrane / cell membrane', slug: 'membrane' },
  '卵细胞': { en: 'egg cell (ovum)', slug: 'egg-cell' },
  '干细胞': { en: 'stem cell', slug: 'stem-cell' },
  '巨噬细胞': { en: 'macrophage', slug: 'macrophage' },
  '血小板': { en: 'platelet (thrombocyte)', slug: 'platelet' },
  '淋巴细胞': { en: 'lymphocyte (T-cell / B-cell)', slug: 'lymphocyte' },
  '成纤维细胞': { en: 'fibroblast', slug: 'fibroblast' },
  '脂肪细胞': { en: 'adipocyte (fat cell)', slug: 'adipocyte' },
  '心肌细胞': { en: 'cardiac muscle cell (cardiomyocyte)', slug: 'cardiac-muscle' },
  '平滑肌细胞': { en: 'smooth muscle cell', slug: 'smooth-muscle' },
  '骨细胞': { en: 'osteocyte (bone cell)', slug: 'osteocyte' },
  '软骨细胞': { en: 'chondrocyte (cartilage cell)', slug: 'chondrocyte' },
  '杯状细胞': { en: 'goblet cell', slug: 'goblet-cell' },
  '酵母': { en: 'yeast cell (Saccharomyces cerevisiae)', slug: 'yeast' },
  '草履虫': { en: 'paramecium', slug: 'paramecium' },
  '变形虫': { en: 'amoeba', slug: 'amoeba' },
  '衣藻': { en: 'Chlamydomonas (green alga)', slug: 'chlamydomonas' },
}

const ENGLISH_MAP = {
  'animal cell': '动物细胞',
  'plant cell': '植物细胞',
  'bacteria': '细菌',
  'white blood cell': '白细胞',
  'red blood cell': '红细胞',
  'neuron': '神经细胞',
  'nerve cell': '神经细胞',
  'muscle cell': '肌肉细胞',
  'epithelial cell': '上皮细胞',
  'sperm cell': '精子细胞',
  'root hair cell': '根毛细胞',
  'chloroplast': '叶绿体',
  'mitochondria': '线粒体',
  'nucleus': '细胞核',
  'golgi': '高尔基体',
  'golgi apparatus': '高尔基体',
  'endoplasmic reticulum': '内质网',
  'lysosome': '溶酶体',
  'ribosome': '核糖体',
  'stem cell': '干细胞',
  'macrophage': '巨噬细胞',
  'platelet': '血小板',
  'egg cell': '卵细胞',
  'yeast': '酵母',
  'paramecium': '草履虫',
  'amoeba': '变形虫',
}

function isChinese(text) {
  return /[一-鿿]/.test(text)
}

export function lookupPrompt(input) {
  const trimmed = input.trim()
  const lower = trimmed.toLowerCase()

  if (isChinese(trimmed)) {
    const match = PROMPT_MAP[trimmed]
    if (match) return { englishName: match.en, slug: match.slug, zhName: trimmed }
  }

  const enMatch = ENGLISH_MAP[lower]
  if (enMatch) {
    const zhEntry = PROMPT_MAP[enMatch]
    return { englishName: zhEntry?.en || lower, slug: zhEntry?.slug || lower, zhName: enMatch }
  }

  return { englishName: trimmed, slug: trimmed.toLowerCase().replace(/\s+/g, '-'), zhName: isChinese(trimmed) ? trimmed : null }
}

export function buildImagePrompt(userInput) {
  const { englishName } = lookupPrompt(userInput)

  return [
    `A highly detailed, photorealistic scientific illustration of a ${englishName} on a clean white background.`,
    'Show all major biological structures with distinct colors for each component.',
    'Style: museum-quality 3D scientific textbook illustration,',
    'isolated on pure white background, no text labels, no annotations.',
    'Volumetric rendering feel, dramatic lighting with soft shadows.',
    'Single specimen, centered, 1:1 aspect ratio.',
  ].join(' ')
}

export { PROMPT_MAP, ENGLISH_MAP }
