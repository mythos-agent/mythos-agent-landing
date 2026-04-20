export const site = {
  name: 'Mythos Agent',
  tagline: 'AI code review for application security.',
  description:
    'Mythos Agent reasons about your code the way a security-focused reviewer would — generating hypotheses, hunting CVE variants, and ranking findings by confidence.',
  domain: 'mythos-agent.com',
  url: 'https://mythos-agent.com',
  version: '3.1.0',

  repo: {
    owner: 'mythos-agent',
    name: 'mythos-agent',
    url: 'https://github.com/mythos-agent/mythos-agent',
    shieldsStars:
      'https://img.shields.io/github/stars/mythos-agent/mythos-agent?style=flat&color=22D3EE&labelColor=0B0B0F',
  },
  npm: {
    package: 'mythos-agent',
    url: 'https://www.npmjs.com/package/mythos-agent',
  },
  sponsor: 'https://github.com/sponsors/zhijiewong',
  security: 'security@mythos-agent.com',
  license: 'MIT',

  stats: {
    scannerCategories: 43,
    productionScanners: 15,
    experimentalScanners: 28,
    builtInRules: '329+',
    languages: 8,
    backends: ['Claude', 'GPT-4o', 'Ollama', 'LM Studio', 'Offline'],
  },
} as const;

export type Site = typeof site;
