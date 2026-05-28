/** Curated minimal .gitignore snippets for the most common stacks. */
export const TEMPLATES: Record<string, string> = {
  Node: `# Node\nnode_modules/\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\npnpm-debug.log*\n.npm/\n.yarn/cache/\n.yarn/install-state.gz\n.pnp.*\n`,
  Python: `# Python\n__pycache__/\n*.py[cod]\n*$py.class\n*.egg-info/\n.eggs/\nbuild/\ndist/\n.venv/\nvenv/\nenv/\n.pytest_cache/\n.coverage\nhtmlcov/\n.mypy_cache/\n.ruff_cache/\n`,
  Java: `# Java\n*.class\n*.jar\n*.war\n*.ear\nhs_err_pid*\nreplay_pid*\ntarget/\n.gradle/\nbuild/\n`,
  Go: `# Go\n*.exe\n*.exe~\n*.dll\n*.so\n*.dylib\n*.test\n*.out\nvendor/\n`,
  Rust: `# Rust\ntarget/\nCargo.lock\n**/*.rs.bk\n`,
  Ruby: `# Ruby\n*.gem\n*.rbc\n/.bundle/\n/vendor/bundle\n/tmp/\n/log/\n`,
  PHP: `# PHP\nvendor/\ncomposer.phar\n.phpunit.result.cache\n`,
  ".NET": `# .NET\nbin/\nobj/\n*.user\n*.suo\n*.userprefs\n.vs/\n`,
  React: `# React / CRA\n/build\n/.next\n.cache/\ncoverage/\n`,
  Astro: `# Astro\n.astro/\ndist/\n`,
  Vite: `# Vite\ndist/\n.vite/\n`,
  macOS: `# macOS\n.DS_Store\n.AppleDouble\n.LSOverride\n._*\n.Spotlight-V100\n.Trashes\n`,
  Windows: `# Windows\nThumbs.db\nehthumbs.db\nDesktop.ini\n$RECYCLE.BIN/\n*.lnk\n`,
  Linux: `# Linux\n*~\n.fuse_hidden*\n.directory\n.Trash-*\n`,
  VSCode: `# VS Code\n.vscode/*\n!.vscode/settings.json\n!.vscode/tasks.json\n!.vscode/launch.json\n!.vscode/extensions.json\n*.code-workspace\n`,
  JetBrains: `# JetBrains\n.idea/\n*.iml\n*.iws\n*.ipr\nout/\n`,
  Docker: `# Docker\n.docker/\ndocker-compose.override.yml\n`,
  Env: `# Environment\n.env\n.env.*\n!.env.example\n`,
  Logs: `# Logs\nlogs/\n*.log\n`,
};

/** Concatenate the selected templates into a single .gitignore body. */
export function buildGitignore(selected: string[]): string {
  if (selected.length === 0) return "";
  return selected
    .filter((name) => name in TEMPLATES)
    .map((name) => TEMPLATES[name]!.trimEnd())
    .join("\n\n") + "\n";
}
