# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm run lint     # ESLint com config Next.js
```

## Arquitetura

Landing page Next.js 16 (App Router) com internacionalização.

**Stack**: React 19, TypeScript, Tailwind CSS 4, Framer Motion, next-intl

**Internacionalização**: 6 idiomas (pt, en, es, fr, it, de) via roteamento dinâmico `/[locale]/`
- Traduções em `messages/*.json` - manter todos sincronizados
- Usar `useTranslations('Section')` em componentes cliente

**Estrutura de componentes**:
- `components/ui/` - componentes reutilizáveis (Button, Input, Cards)
- `components/sections/` - seções da página (Hero, Services, Contact, etc.)
- `components/animations/` - wrappers Framer Motion (FadeIn, ScaleIn, Reveal)

**Padrões**:
- Componentes interativos: adicionar `'use client'` no topo
- Merge de classes: usar `cn()` de `lib/utils.ts`
- Validação de formulários: Zod schemas em `lib/schemas.ts`

## Cores do Tema

| Nome | Hex |
|------|-----|
| Primary Pink | #DC8482 |
| Secondary Pink | #F3E2E8 |
| Accent Pink | #FCD7DA |
| Dark Gray | #3C363B |
| Gold | #D4AF37 |
