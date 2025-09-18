## מידע על הפרויקט (HE)

### תיאור כללי
אתר תדמית לסטודיו לאדריכלות MEIDAR ARCHITECTS, בנוי על Next.js (App Router), עם תצוגת פרויקטים, עמוד פרויקט מפורט, ועמוד יצירת קשר.

### סטאק טכנולוגי
- **Framework**: Next.js 14.2.16 (App Router, `app/`)
- **Runtime**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4 + `tailwindcss-animate`, משתני CSS ב-`app/globals.css`
- **אנימציות**: `framer-motion`
- **סליידר הירו**: `swiper` (כולל `effect-fade`, `autoplay`)
- **גלריה/לייטבוקס**: `photoswipe`
- **אייקונים**: `lucide-react`
- **UI Utilities**: `class-variance-authority`, `@radix-ui/react-slot`, `tailwind-merge`, `clsx`
- **אימיילים**: `resend` (שליחת לידים)

### תצורת פרויקט
- `next.config.mjs`: הרשאת דומיין תמונות `images.pexels.com`
- `tailwind.config.ts`: הגדרות תוכן, צבעים, רדיוס, אנימציות בסיסיות
- `tsconfig.json`: ניתוב אליאס `@/*`, `strict: true`, `moduleResolution: bundler`
- פונטים: Google `Onest` נטען ב-`app/layout.tsx` (CSS var `--orbitron-font`)
- SEO: מטאדאטה, OpenGraph ו-Twitter ב-`app/layout.tsx`

### סקריפטים
- `dev`: הפעלה בסביבת פיתוח
- `build`: בנייה
- `start`: הרצה בפרודקשן
- `lint`: בדיקות ESLint## מידע על הפרויקט (HE)

### תיאור כללי
אתר תדמית לסטודיו לאדריכלות MEIDAR ARCHITECTS, בנוי על Next.js (App Router), עם תצוגת פרויקטים, עמוד פרויקט מפורט, ועמוד יצירת קשר.

### סטאק טכנולוגי
- **Framework**: Next.js 14.2.16 (App Router, `app/`)
- **Runtime**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4 + `tailwindcss-animate`, משתני CSS ב-`app/globals.css`
- **אנימציות**: `framer-motion`
- **סליידר הירו**: `swiper` (כולל `effect-fade`, `autoplay`)
- **גלריה/לייטבוקס**: `photoswipe`
- **אייקונים**: `lucide-react`
- **UI Utilities**: `class-variance-authority`, `@radix-ui/react-slot`, `tailwind-merge`, `clsx`
- **אימיילים**: `resend` (שליחת לידים)

### תצורת פרויקט
- `next.config.mjs`: הרשאת דומיין תמונות `images.pexels.com`
- `tailwind.config.ts`: הגדרות תוכן, צבעים, רדיוס, אנימציות בסיסיות
- `tsconfig.json`: ניתוב אליאס `@/*`, `strict: true`, `moduleResolution: bundler`
- פונטים: Google `Onest` נטען ב-`app/layout.tsx` (CSS var `--orbitron-font`)
- SEO: מטאדאטה, OpenGraph ו-Twitter ב-`app/layout.tsx`

### סקריפטים
- `dev`: הפעלה בסביבת פיתוח
- `build`: בנייה
- `start`: הרצה בפרודקשן
- `lint`: בדיקות ESLint

### מבנה ראוטים (app/)
- `/` – דף הבית: `app/page.tsx` (HeroSlider, About, Philosophy, FeaturedProjects)
- `/projects` – רשימת פרויקטים: `app/projects/page.tsx` + `components/ProjectsClientPage.tsx`
- `/projects/[id]` – עמוד פרויקט דינמי: `app/projects/[id]/page.tsx` (מטאדאטה דינמית)
- `/contact` – צור קשר: `app/contact/page.tsx` + `components/contact-page-content.tsx`

### נתונים ותוכן
- `lib/projects.ts`: מערך פרויקטים סטטי כולל: `id`, `title`, `description`, `images[]`, `year`, `location`, `videoUrl`
- תמונות תחת `public/projects/<project-id>/...` + תמונות הירו תחת `public/hero/`

### רכיבים מרכזיים
- `components/navbar.tsx`: ניווט עליון רספונסיבי, תפריט מובייל עם Framer Motion
- `components/hero-slider.tsx`: סליידר מסך מלא עם Swiper + פרלקסה קלה
- `components/about.tsx`: טקסט תדמיתי + תמונת סטודיו
- `components/philosophy-section.tsx`: טקסט + סטטיסטיקות מונפשות
- `components/featured-projects.tsx`: שלושה פרויקטים נבחרים + קישור לכל הפרויקטים
- `components/projects-grid.tsx`: גריד פרויקטים עם hover ו-Image של Next
- `components/project-page-client.tsx`: עמוד פרויקט, וידאו (YouTube embed), Photoswipe Lightbox, כפתור שיתוף
- `components/contact-page-content.tsx`: עמוד יצירת קשר, טופס, פרטי משרדים, מפה (Google Maps embed)
- `components/contact-form.tsx` + `components/ContactFormFooter.tsx`: טפסים לשיגור ליד דרך Resend
- `components/page-transition.tsx`: אנימציית מעבר בין דפים
- `components/splash-screen.tsx`: מסך פתיחה קצר בעת טעינה
- `components/ui/*`: קומפוננטות UI בסיסיות (Button, Input, Textarea) מבוססות Tailwind + CVA

### שליחת אימיילים (לידים)
- `lib/actions.ts` (server action): שימוש ב-`resend` עם `RESEND_API_KEY` ב-ENV.
- פרטי שליחה:
  - `from`: `Contact Form <onboarding@resend.dev>` (מומלץ לעדכן לדומיין/שולח מאומת)
  - `to`: `ronen.meidar@gmail.com`
  - נשלח טקסט בסיסי עם name, email, message

דרישות הפעלה:
- הגדרת משתנה סביבה `RESEND_API_KEY`
- הפקודות: `npm install`, `npm run dev` / `npm run build && npm start`

### הערות תפעול ו-SEO
- מטא-דאטה כללית ו-OG מוגדרים ב-`app/layout.tsx` (כולל `metadataBase` לדומיין `https://ronenmeidar.co.il`)
- תמונת OG: `/bg.png`
- לוגואים: `/logo-white.png`, `/logo-black.png`

### אבטחה ונגישות
- ודא שמפתח `RESEND_API_KEY` לא נחשף לקליינט.
- רכיבי ניווט וכפתורים כוללים `aria-label` וטקסטי SR במקומות רלוונטיים.

### שיפורים פוטנציאליים
- החלפת `img` ב-Next `Image` בעמודי פרויקט/סליידר לשיפור ביצועים.
- הקשחת כתובות אימייל/טלפון לקונפיגורציה בקובץ env.
- הוספת `robots.txt` ו-`sitemap.xml` אוטומטיים.
- אימות דומיין ב-Resend ושדרוג תבנית אימייל (HTML).
- i18n: הוספת תמיכה מלאה בעברית/אנגלית לפי צורך.
