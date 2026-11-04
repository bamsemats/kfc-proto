# NewSeed IT Solutions — Family of Apps Design & Functional Research

> **Primary Sources Investigated (Retrieved 2026-11-04)**
> - **K for Contact (Public Marketing & Share SPA):** `https://kforcontact.com/` (`/manifest.json`, `/static/css/main.2f073ff8.chunk.css`, `/static/css/2.07d00440.chunk.css`, `/static/js/main.6b1cf1da.chunk.js`)
> - **K for Contact (Headless WordPress CMS API):** `https://origin.kforcontact.com/wp-json/wp/v2/pages`, `https://origin.kforcontact.com/wp-json/wp/v2/posts`, `https://origin.kforcontact.com/wp-json/wp/v2/k-feature`, `https://origin.kforcontact.com/wp-json/k-menu/v1/main-menu`
> - **K for Contact (Web App / PWA Client):** `https://app.kforcontact.com/login` (`/static/css/main.f7f7cecb.chunk.css`, `/static/js/main.a96be568.chunk.js`, API base `https://api.kforcontact.com/v1/`)
> - **Katjing (Public Marketing & Documentation SPA):** `https://katjing.newseed.se/` (`/assets/styles-tGG4UO9O.css`, `/assets/index-BXX5u_Sz.js`)
> - **Katjing Admin (Subscription Web App):** `https://katjing-admin.newseed.se/` (`/assets/index-C6Bz8SAr.css`, `/assets/index-BKMt863s.js`)
> - **Fritidsbidraget (Grant Application & Club Admin SPA):** `https://fritidsbidraget.se/` (`/assets/index-BGJWjAAd.css`, `/assets/index-Dxjbhyn4.js`, `/assets/ApplicationPage-CgTRw4V_.js`, `/assets/DashboardPage-CRbeRJDZ.js`, `/assets/ApplicationDetailPage-Iqom9VZ4.js`, `/assets/SettingsPage-DpZOCyIh.js`, `/assets/OrganizationsPage-CVL2XLQX.js`, `/assets/AdminsPage-CrJoQbKA.js`, `/assets/ConfirmDeleteModal-CSSnehpw.js`)
> - **Corporate Parent:** `https://www.newseed.se/` (NewSeed IT Solutions AB, org.nr `556775-9963`, founded 2009 by Magnus Lindgren, offices in Lund and Kista/Stockholm; and K for Contact AB, org.nr `556907-4601`).

---

## 1. Functional & Domain Analysis of the Three NewSeed Apps

All three applications are developed by **NewSeed IT Solutions AB** (`newseed.se`) under the guiding product philosophy of simplifying everyday workflows for associations (*föreningar*), clubs, individuals, and businesses through frictionless mobile/web tools, QR-driven interactions, and strong privacy postures.

### 1.1 K for Contact (`kforcontact.com` & `app.kforcontact.com`)

#### Origin & Core Purpose
- **Origin:** Conceived by NewSeed founder Magnus Lindgren and his team during the **TechCrunch Hackathon in Berlin (December 2017)** (`origin.kforcontact.com/wp-json/wp/v2/pages?slug=om-oss`, `wp/v2/posts?slug=videos-from-techcrunch`) and launched on the App Store and Google Play in April 2019 (`wp/v2/posts?slug=lanserad-i-april-2019`).
- **Core Thesis ("Inverted GDPR"):** While traditional CRM and address-book systems treat companies as the custodians of contact records—creating stale data and GDPR compliance burdens—K for Contact flips the ownership model: **the individual owns their personal contact data** (*"DU SOM INDIVID ÄGER DINA UPPGIFTER. Det är du som bestämmer vem som har tillgång till dem."* — `wp/v2/pages?slug=privat`). Users *lend* (*lånar ut*) contact details on their own terms and can update or revoke them at any time (`wp/v2/pages?slug=om-oss`).

#### Target Users & Dual Audience
K for Contact explicitly serves two distinct but overlapping worlds (`wp/v2/pages?slug=privat`, `foretag`, `medlemsorganisationer`):
1. **Associations, Sports Clubs & Private Networks (*Privat & Medlemsorganisationer*):**
   - Parents, coaches, and youth leaders in sports teams (e.g., *"dela telefonnummer inom fotbollsgruppen"*, *"kommunicera med föräldrarna i dina barns idrottslag, skolan eller din förening"* — `wp/v2/pages?slug=privat`).
   - Membership organizations struggling with outdated member registries (*medlemsregister*), where members can verify and self-maintain their own contact details via SMS/email verification links or QR codes printed in letters, even without installing the app (`wp/v2/pages?slug=medlemsorganisationer`).
2. **Corporate, Retail & Conference Networking (*Företag*):**
   - Professionals exchanging business cards at conferences, trade fairs (*mässor*), and networking groups (`wp/v2/pages?slug=foretag`).
   - Brick-and-mortar shops, restaurants, and e-commerce sites displaying a physical or digital QR code to collect GDPR-compliant customer consent and contact details without manual registry maintenance (*"slippa mycket registervård"* — `wp/v2/pages?slug=foretag`, `wp/v2/posts?slug=pitch-for-almi-och-planer-for-k-for-contact-i-foretag`).

#### Functional Features (Verified against Primary Source Code & API)
1. **Dynamic / Live Contact Details (*Aktuella uppgifter*):**
   - When a user updates their phone number, email, postal address, company/position, or social channels, the update propagates automatically to all connected contacts (`wp/v2/k-feature?slug=valj-kontaktvag`, `kfc-app.js` `PUT /v1/profile/{id}`).
   - Users can also specify their preferred contact channel (phone, SMS, or email) (`wp/v2/k-feature?slug=valj-kontaktvag`) and add multiple phone numbers/emails (`phone_list`, `email_list`), website, timezone, and 20+ social platforms (`facebook`, `linkedin`, `github`, `whatsapp`, `instagram`, `twitter`, `skype`, `wechat`, etc. — `kfc-main.js` `_renderProfileDataTitle`, `kfc-app.js` `Oe.SocialMedia`).
2. **Multiple Profiles & Granular Filters (*Profiler / Filter*):**
   - Users can maintain multiple context-specific profiles or filters (`GET/POST /v1/filter/` in `kfc-app.js`), such as a **Work Profile** (*arbetsprofil* with work email, company, title, phone), a **Private Profile** (*privat*), or a **Minimal Club Profile** (e.g., sharing *only* a mobile number with a youth football group — `wp/v2/pages?slug=privat`, `wp/v2/pages?slug=faq`).
   - On any share or group connection, the user selects which profile filter (`Full profile` or custom `filterid`) is exposed (`kfc-app.js` `_renderFilterRows`, `_setFilter`).
3. **Groups (*Grupper*) & Member Management:**
   - Users can create and manage groups (`profiletype === 4` in `kfc-app.js` `getGroups`, `createEmptyProfile(session, 4)`), used for sports teams, school classes, project teams, or professional networks (`wp/v2/k-feature?slug=grupper`, `wp/v2/pages?slug=privat`).
   - **Dynamic Group Membership:** When a new member joins a group, they automatically receive access to shared group member details, and existing members receive the newcomer's shared details. When someone leaves a group (`DELETE /v1/connection/{groupguid}` via `_leaveGroup`), their shared details automatically disappear from the group and all members' devices (`wp/v2/pages?slug=privat`, `kfc-app.js`).
   - **Organization / Club Admin Tools in Web App:** The web app (`kfc-app.js`) includes **Virtual Profiles** (`profile.type === 7`), **CSV Bulk Import/Export** with row-by-row email/phone/duplicate validation (`_validateCSVData`, `virtual-profiles-export.csv`), and **Excel Group Roster Export** (`POST /v1/connection/{groupguid}/report` returning `report.xlsx` via *"Get members as Excel"*).
4. **Temporary Sharing (*Dela temporärt*) & Share Controls:**
   - Users can share contact details for a limited time during temporary interactions (`wp/v2/k-feature?slug=dela-temporart`).
   - In the API and web app (`kfc-app.js` `SET_SHARE` reducer & `Ut` ShareView component), shares (`POST /v1/share/`) support:
     - `expires`: Expiration timestamp for temporary shares.
     - `single`: Single-use share toggle (*"This share can only be scanned once, then it is consumed"*).
     - `auto_accept`: Direct access vs. approval required (*"If someone scans this share then they are directly granted access to your information"*).
     - `public`: Public web share card at `https://kforcontact.com/share/{id}` with a *"Hämta som vCard"* (`.vcf` download) button (`kfc-main.js` `_saveVCard`).
5. **Status Updates (*Status / Frånvaromeddelande*):**
   - Users can set live availability metadata on their profile (`wp/v2/k-feature?slug=status`), implemented in `kfc-main.js` and `kfc-app.js` as two dedicated `profiledata` types:
     - `status_note` (*"Notering"* / *"Status note"*)
     - `out_of_office` (*"Frånvaromeddelande"* / *"Out of office"*, e.g., vacation or away status).
6. **QR Code Sharing, Deep Linking & Passwordless Login:**
   - Every share generates a high-error-correction (`level="Q"`) QR code encoding `https://link.kforcontact.com/share/{guid}` alongside a deep link `kforcontact://share/{guid}` (`kfc-main.js` `class M`, `kfc-app.js` `Ut`).
   - **Passwordless / Token Login & E-commerce Checkout:** The web app (`app.kforcontact.com/login`, `kfc-app.js` `class N`) supports 3 login modes: (1) Email-based one-time token login (`POST /v1/login/` -> *"Email with login details sent to..."* -> `POST /v1/login/{tokenGuid}`), (2) QR code scan login, and (3) Username/password. Furthermore, K for Contact integrates with WordPress and WooCommerce (*K for Commerce*) so users can log in without passwords or autofill checkout shipping/contact details by scanning a QR code (`wp/v2/posts?slug=wordpress-and-woocommerce-support`).
7. **Revocation & GDPR Privacy Control (*Kontroll & Integritet*):**
   - **Instant Revocation:** Users can see every contact who has their details (marked with the `K` symbol in the contact list — `wp/v2/pages?slug=faq`), inspect active shares (`GET /v1/share/` and `GET /v1/connection/?shareguid={guid}`), revoke an invite (`DELETE /v1/share/{guid}` — *"Revoke Invite"*), or sever a connection (`DELETE /v1/connection/{guid}`), which immediately purges the shared contact details from the recipient's phone (`wp/v2/pages?slug=faq`).
   - **Right to Erasure & Data Residency:** Deleting an account (`DELETE /v1/user/{userid}` in `kfc-app.js`) erases all personal data from NewSeed's AWS Dublin (`eu-west-1`) servers and from all connected recipients; inactive accounts are automatically purged after 24 months (`wp/v2/pages?slug=privacy-policy`).
   - **Zero-Tracking Web Posture:** The `integritet` page (`wp/v2/pages?slug=integritet`) explicitly pledges: *no Facebook Pixel, no Google Analytics/AdWords, no cookies, and no third-party tracking libraries* (*"Vårt mål är att värna om den personliga integriteten och det kan vi endast göra om vi lever som vi lär"*).

---

### 1.2 Katjing (`katjing.newseed.se` & `katjing-admin.newseed.se`)

#### Core Purpose & Target Users
- **Core Purpose:** A mobile/tablet point-of-sale (kiosk) app that eliminates checkout math and queue bottlenecks by summing selected items and instantly generating a dynamic **Swish** or **MobilePay (DK/FI)** QR code (or calculating cash change) (`katjing.newseed.se/assets/index-BXX5u_Sz.js`).
- **Target Users:** Sports clubs (*idrottsföreningar*), youth teams, school classes, flea markets (*loppis*), market stalls (*torghandel*), and small event kiosks—operated by volunteer parents, youth players, and club treasurers (`katjing.js`).

#### Functional Features (Verified against Primary Source Code)
- **Katjing App (100% Free Standalone iOS/Android App):**
  - Predefined product buttons with prices, custom colors, and emojis/icons, plus ad-hoc free-text items at checkout (`katjing.js`).
  - Dynamic Swish & MobilePay QR code generation with the exact total amount and payment message pre-filled (`katjing.js`).
  - Cash mode (*kontantvy*) with automatic change calculation, optional member discounts (*medlemsrabatt*), rounding up (*avrundning*), or tipping (*dricks*) (`katjing.js`).
  - Digital receipts (*digitala kvitton*) via QR code (view, save, print, or email) (`katjing.js`).
  - Works 100% offline without requiring account registration; includes a child/volunteer lock (*barnlås*) for settings (`katjing.js`).
- **Katjing Admin (`katjing-admin.newseed.se` — Optional Paid SaaS Add-on):**
  - Multi-organization and multi-device management with live sync status (`katjing.js` `oh` array).
  - Real-time sales dashboard (daily, weekly, monthly, yearly up to 5 years), inventory tracking (*lagersaldo*), printable price lists with club logos, and sales logs (`katjing.js`).
  - Custom branding for the kiosk app and receipts (custom club logo, colors, display name, staff message) (`katjing.js`).
  - Cookie-less privacy analytics via self-hosted Matomo (`https://matomo.newseed.se/` with `_paq.push(['disableCookies'])` in `katjing.html`).

---

### 1.3 Fritidsbidraget (`fritidsbidraget.se`)

#### Core Purpose & Target Users
- **Core Purpose:** A multi-tenant web portal for Swedish sports clubs and associations to receive, review, and disburse financial aid / leisure activity grants (*föreningsstöd / bidragsansökan*) to families in need (`fritidsbidraget.se/assets/index-Dxjbhyn4.js`, `fb-app.js`).
- **Target Users:**
  1. **Parents / Guardians (*Vårdnadshavare*):** Applying for financial support for their child's club fees, equipment, or camps using a club-specific access code (*Föreningskod*, e.g., `LUND2024`).
  2. **Club Administrators (*Föreningsadmin*):** Reviewing applications, approving/rejecting grant amounts, and configuring club-specific application periods and messages.
  3. **NewSeed Super Admins (*Super Admin*):** Provisioning organizations (*Föreningar*) and assigning club administrators (`fritidsbidraget.js`).

#### Functional Features (Verified against Primary Source Code)
- **Club Code Verification Gate (`/` -> `/ansok/:orgCode`):**
  - Applicants enter a club code (`Föreningskod` input, uppercase monospace) which verifies the organization and loads custom club header/bonus text and open/closed status (`fb-app.js`).
- **4-Step Guided Grant Application Wizard (`fb-app.js`):**
  - **Step 1 (`Barn`):** Child's Swedish personal identity number (`Personnummer` `YYYYMMDD-XXXX`, validated via Luhn checksum and date math in class `D`) and name.
  - **Step 2 (`Vårdnadshavare`):** Primary (and optional secondary) guardian details, address, email, and phone.
  - **Step 3 (`Ansökan`):** Reason for application, requested amount in SEK, and file attachments (`FRITIDSKORT` and `OTHER`).
  - **Step 4 (`Bank & Samtycke`):** Bank clearing/account number, explicit GDPR storage consent checkbox, Cloudflare Turnstile + honeypot spam protection, and an application summary card (`Sammanfattning`).
  - Auto-persists form state and current step in `localStorage` so parents on mobile don't lose progress (`fb-app.js`).
- **Admin & Super Admin Portal (`/login`, `/admin/*`, `/superadmin/*`):**
  - **Google OAuth 2.0 Sign-In** (`@react-oauth/google`, pill-shaped button, *"Secure Authentication by Google"* — `fritidsbidraget.js`).
  - **Dashboard (`/admin/dashboard`):** 4 KPI summary cards (*Totalt*, *Ogranskade*, *Beviljade*, *Avslag*), search/status filters, and collapsible year-by-year application tables with SEK totals (`fb-dash.js`).
  - **Application Review (`/admin/applications/:id`) & Settings (`/admin/settings`):** Detailed view of child/guardian data, attachment viewer/downloader, approval/rejection workflow, and destructive-action confirmation modals requiring typing `RADERA` (`fb-detail.js`, `fb-modal.js`).

---

## 2. Visual Identity, Design Tokens & UI Patterns Across the Family

All values below are extracted directly from the production CSS and JS bundles of the three sites.

### 2.1 Color Palettes & Exact CSS Variables

#### A. Katjing (`katjing.newseed.se` & `katjing-admin.newseed.se`)
Katjing's marketing site (`katjing.css`, Tailwind CSS v4.3.3) uses a **warm, organic, editorial Scandinavian palette** built around forest/olive green, warm cream/oatmeal surfaces, and sunny gold/mint accents:

```css
/* Extracted verbatim from katjing.newseed.se/assets/styles-tGG4UO9O.css (:root) */
:root {
  --radius: .875rem;                 /* 14px base border radius */
  --background: #faf9f5;             /* Warm alabaster / off-white page canvas */
  --foreground: #1b1f17;             /* Deep forest-tinted charcoal body text */
  --surface: #f1f0e8;                /* Warm oatmeal secondary section surface */
  --highlight-card: #4f6d32;         /* Primary forest/olive green feature card */
  --row-stripe: #f8f8f8;
  --card: #fff;                      /* Pure white elevated cards */
  --card-foreground: #343b2c;        /* Muted dark olive-charcoal text on cards */
  --popover: #fff;
  --popover-foreground: #343b2c;
  --primary: #4f6d32;                /* Brand Forest Green */
  --primary-foreground: #faf9f5;     /* Warm off-white text on primary */
  --secondary: #f1f0e8;
  --secondary-foreground: #4f6d32;
  --muted: #f1f0e8;
  --muted-foreground: #40443a;       /* Secondary body copy */
  --accent: #e8c96e;                 /* Warm cheddar/gold accent */
  --accent-foreground: #343b2c;
  --destructive: #4f6d32;
  --destructive-foreground: #faf9f5;
  --border: #deded2;                 /* Warm stone border */
  --input: #deded2;
  --ring: #4f6d32;
  --ink: #4f6d32;
  --ink-foreground: #faf9f5;
  --ink-muted: #deded2;
  --mint: #b8cda3;                   /* Soft sage/mint highlight */
  --mint-foreground: #343b2c;
  --sun: var(--mint);                /* Used for marker-underline highlights */
  --sun-foreground: #343b2c;
  --cheddar: var(--mint);
  --sky: #c8d5dc;                    /* Soft Nordic sky blue-gray */
  --sky-foreground: #343b2c;
}
/* Additional section & dark-surface hexes in katjing.css:
   #e5e7dc (FAQ section background), #15251f (deep pine dark card) */
```

In **Katjing Admin** (`katjing-admin.newseed.se/assets/index-C6Bz8SAr.css`), the palette shifts to a cleaner, high-contrast operational dashboard workspace while keeping the green brand DNA:
```css
/* Extracted verbatim from katjing-admin.newseed.se/assets/index-C6Bz8SAr.css (:root) */
:root {
  --color-primary: #457f24;                  /* Vibrant operational leaf green */
  --color-background: #fdfdfd;               /* Crisp near-white surface */
  --color-background-complementary: #f2f2f2; /* Desktop app outer canvas (>=80rem) */
  --color-text: #222;
  --color-text-white: #eee;
  --color-text-inverted: #eee;
  --color-danger: #da0000;
  --color-info: #0086da;                     /* Operational info blue */
}
```

#### B. Fritidsbidraget (`fritidsbidraget.se`)
Fritidsbidraget (`fritidsbidraget.css`, Tailwind CSS v4.2.1 + arbitrary hex classes in `fritidsbidraget.js` and `fb-app.js`) uses a **high-trust civic & institutional navy/royal-blue palette** with semantic status tokens:

| Role / Element | Exact Token / Class | Hex / Value | Source |
| :--- | :--- | :--- | :--- |
| **App Canvas** | `bg-gray-50` | `oklch(98.5% .002 247.839)` (`#f9fafb`) | `fritidsbidraget.js`, `fritidsbidraget.css` |
| **Card Surface** | `bg-white` + `border-gray-100` | `#ffffff` + `oklch(96.7% .003 264.542)` | `fb-app.js`, `fb-detail.js` |
| **Primary Brand / Header / Active Step / CTA** | `bg-[#003399]`, `text-[#003399]` | `#003399` (Civic Royal Blue) | `fritidsbidraget.js`, `fb-app.js` |
| **Primary Hover / Focus** | `bg-[#002f5f]`, `focus:ring-blue-500`, `bg-blue-600` | `#002f5f` / `oklch(62.3% .214 259.815)` | `fritidsbidraget.css`, `fb-app.js` |
| **Admin / SuperAdmin Active Nav Pill** | `bg-[#001f3f]` | `#001f3f` (Deep Navy) | `fritidsbidraget.js` |
| **Secondary Modal Action Button** | `bg-[#1e2a4a]` -> `hover:bg-[#2a3a5c]` | `#1e2a4a` -> `#2a3a5c` (Slate Navy) | `fb-app.js` |
| **Info Banner / Summary Box** | `bg-[#ebf5ff]`, `border-[#cfe4ff]`, `bg-[#f0f7ff]` | `#ebf5ff` (bg), `#cfe4ff` (border), `#f0f7ff` (summary) | `fb-app.js` |
| **Semantic Status: Approved / Completed Step** | `bg-green-500`, `bg-green-200`, `text-green-700` | `oklch(72.3% .219 149.579)` (Emerald Green) | `fb-app.js`, `fb-dash.js` |
| **Semantic Status: Warning / GDPR / Closed** | `bg-amber-50`, `border-amber-200`, `text-amber-900` | `oklch(98.7% .022 95.277)` (Warm Amber) | `fb-app.js` |
| **Semantic Status: Rejected / Destructive** | `bg-red-50`, `bg-red-600`, `text-red-700` | `oklch(57.7% .245 27.325)` (Alert Red) | `fb-app.js`, `fb-modal.js` |

#### C. K for Contact (`kforcontact.com` & `app.kforcontact.com`)
K for Contact (`kfc-main.css` & `kfc-app.css`, Bootstrap 4 + Material-UI v4) uses a **cyan-to-purple / indigo-to-cyan diagonal gradient identity**:

| Role / Element | Exact CSS Rule / Token | Hex / Value | Source |
| :--- | :--- | :--- | :--- |
| **Brand Gradient (Marketing Hero, FAQ, Footer)** | `linear-gradient(120deg, #30a4dc, #7961aa)` (and reversed `120deg, #7961aa, #30a4dc`) | `#30a4dc` (Cyan Blue) -> `#7961aa` (Royal Violet) | `kfc-main.css` (`.background`, `.main-img`, `.que`, `footer`) |
| **Web App Full-Viewport Gradient** | `linear-gradient(162deg, #3e5dbc, #30a4dc)` | `#3e5dbc` (Indigo Blue) -> `#30a4dc` (Cyan Blue) | `kfc-app.css` (`.background-gradient-linear`) |
| **Primary Headings (`h1`) & Icons** | `color: #30a4dc` | `#30a4dc` | `kfc-main.css` |
| **Section Headings (`h2`, `h4`) & Borders** | `color: #3b79ad` (also `h4: #7961aa`) | `#3b79ad` (Steel Blue) / `#7961aa` (Purple) | `kfc-main.css` |
| **Mobile Nav Link Accent** | `color: #008cd3` | `#008cd3` | `kfc-main.css` |
| **NewSeed Corporate CTA Button** | `backgroundColor: "#3788D0"` | `#3788D0` | `kfc-app.js`, `kfc-app.css` (`.link-button`) |
| **Loading Indicator Accent** | `color="#00BFFF"` | `#00BFFF` | `kfc-app.js` |
| **Destructive / Delete Profile Button** | `backgroundColor: "#f44336"` | `#f44336` (Material Red) | `kfc-app.js` (`_renderAddData`) |
| **CSV Import Errors / Warnings** | `color: "#cc3300"` / `color: "#ffcc00"` | `#cc3300` (Error) / `#ffcc00` (Warning) | `kfc-app.js` |
| **Neutral Text & Surfaces** | `#ffffff`, `#212529`, `#3c4858`, `#707070`, `#333333` | White cards, charcoal text, `#333` bottom bar | `kfc-main.css` |

---

### 2.2 Typography Across the Family

| App | Display / Heading Font | Body / UI Font | Monospace Font | Key Typographic Patterns |
| :--- | :--- | :--- | :--- | :--- |
| **Katjing** (`katjing.css`) | **`Bricolage Grotesque`** (`--font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif`) | **`Public Sans`** (`--font-sans: "Public Sans", ui-sans-serif, system-ui, sans-serif`) | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas...` | Bold editorial display headings (`font-extrabold`, `tracking-tight`), uppercase kickers/eyebrows (`text-sm font-semibold uppercase tracking-[0.18em] text-primary`), marker-underline highlights (`.marker-underline` 34% bottom linear-gradient in `--color-sun`). |
| **Fritidsbidraget** (`fritidsbidraget.css`) | **System UI Sans** (`ui-sans-serif, system-ui, sans-serif`) | **System UI Sans** (`--font-sans`) | `ui-monospace, SFMono-Regular...` (used for `Föreningskod` input and application `nr`) | High-contrast hierarchy: `font-bold` / `font-black` headings (`text-xl` to `text-3xl`), uppercase tracking-widest micro-labels (`text-xs uppercase tracking-widest` for subtitles, table headers, and `"NewSeed Platform"` badge). |
| **K for Contact** (`kfc-main.css`, `kfc-app.css`) | **`Montserrat-Bold`** (`/static/media/Montserrat-Bold.a6bc51ef.otf`, weight `700`) on public site; System Roboto/Helvetica in web app | **`Montserrat Light`** (`/static/media/Montserrat-Light.34270926.ttf`, weight `400`) on public site; `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"...` in web app | `source-code-pro, Menlo, Monaco, Consolas...` | Geometric sans-serif headings (`Montserrat-Bold`) paired with light-weight body copy (`line-height: 1.8em`, `font-size: 20px` on marketing sections). |

---

### 2.3 UI Components, Layout & PWA/Mobile-First Patterns

1. **Card & Surface Architecture:**
   - **Fritidsbidraget:** Generously rounded white cards (`rounded-2xl` = `1rem`, `rounded-3xl` = `1.5rem`, and `rounded-[2.5rem]` on Login) with subtle borders (`border border-gray-100`) and soft elevation (`shadow-sm` for content cards, `shadow-lg` / `shadow-2xl` for focal modals and entry cards) on a cool `bg-gray-50` canvas (`fb-app.js`, `fritidsbidraget.js`).
   - **Katjing:** Warm, tactile cards (`--radius: 0.875rem` / `14px`, `border border-border bg-card`) using custom multi-layered OKLCH shadows:
     - `.shadow-card`: `0 1px 2px oklch(22% .03 265 / .06), 0 12px 32px -18px oklch(22% .03 265 / .35)`
     - `.shadow-lift`: `0 2px 4px oklch(22% .03 265 / .08), 0 24px 48px -24px oklch(22% .03 265 / .45)`
     Paired with high-contrast feature callout cards in `bg-highlight-card` (`#4f6d32`) with `--primary-foreground` (`#faf9f5`) text (`katjing.css`, `katjing.js`).
   - **K for Contact:** Legacy Bootstrap/MUI cards (`.card-image` with deep material shadow `0 16px 38px -12px rgba(0,0,0,.56)`, `border-radius: 3px` to `5px`) and two-column public share profile cards (`col-md-4` avatar + vCard download, `col-md-8` key-value rows + QR code card — `kfc-main.css`, `kfc-main.js`).
2. **Buttons & Interactive Controls:**
   - Pill and rounded-rect CTAs are a signature of the modern NewSeed apps: Katjing uses `.katjing-button { border-radius: 25px !important }` and `font-weight: 600` with `0.16s` transitions (`katjing.css`); Fritidsbidraget uses `rounded-full` (`px-8 py-3 font-bold`) for wizard navigation buttons and `rounded-xl` (`0.75rem`) for form inputs and admin nav pills (`fb-app.js`, `fritidsbidraget.js`).
3. **Navigation & Responsive Shells:**
   - **Public/Consumer Views:** Sticky/fixed top header bar with brand mark on the left, section links in the center/right, and a prominent `Admin` button on the far right (present in both `katjing.newseed.se` and `fritidsbidraget.se`!), collapsing into a slide-over drawer/sheet (`Vd` Sheet in `katjing.js`) or hamburger bar on mobile.
   - **Admin/Workspace Views:** Left vertical sidebar (`w-64 bg-white border-r border-gray-100 p-6`) that is sticky on desktop (`md:sticky md:top-0 md:h-screen`) and transforms into a slide-over off-canvas drawer (`fixed inset-y-0 left-0 z-50 ... -translate-x-full` with `bg-black/40` backdrop) on mobile (`fritidsbidraget.js` `Qn` & `dr`).
4. **PWA & Mobile-First Ergonomics:**
   - `kforcontact.com` and `app.kforcontact.com` ship with a Web App Manifest (`/manifest.json`, `"short_name": "K"`, `"display": "standalone"`, `"theme_color": "#000000"`, `"background_color": "#ffffff"`).
   - Touch-friendly targets (`min-h-12` on mobile nav items in `katjing.js`; `w-6 h-6` checkboxes and `p-3` inputs with `inputMode="numeric"` in `fb-app.js`).
   - QR-centric cross-device handoffs: every app bridges desktop/tablet and mobile via scannable QR codes (Swish/MobilePay QR + digital receipt QR in Katjing; `https://link.kforcontact.com/share/{guid}` + `kforcontact://` deep links + vCard export in K for Contact).
   - Reduced-motion accessibility support (`@media (prefers-reduced-motion: reduce)` in `katjing.css`) and semantic `role="alert"` / `aria-label` attributes across both modern apps.

---

## 3. Synthesis: Common Design Threads & Bridging K for Contact's Dual Audience

### 3.1 The 6 Design Threads Linking the NewSeed Family of Apps
Comparing the older 2017–2019 K for Contact frontend (`kfc-main.css`, `kfc-app.css`) with NewSeed's newer 2024–2026 apps (`fritidsbidraget.se` and `katjing.newseed.se`) reveals a clear evolution and shared family DNA:

1. **Dual-Mode Product Architecture (Zero-Friction Consumer Flow + Structured Admin Workspace):**
   - *Katjing* pairs a zero-registration mobile kiosk app with `Katjing Admin`.
   - *Fritidsbidraget* pairs a club-code consumer wizard (`/ansok/:orgCode`) with a sidebar-driven `LHF Admin` / `Super Admin` portal.
   - *K for Contact* pairs one-tap/QR mobile contact & group sharing with organization roster management (Groups, Virtual Profiles, CSV import/export, Excel reports).
2. **QR Codes & Short Tokens as the Universal Handoff Primitive:**
   - All three apps replace tedious account/form friction with scannable QR codes or short human-friendly codes (`Föreningskod`, email login tokens, Swish QR, `link.kforcontact.com/share/{guid}`).
3. **Privacy-by-Design & Explicit GDPR Transparency:**
   - Every app foregrounds trust: K for Contact's zero-tracker pledge and instant share revocation; Katjing's cookie-less Matomo analytics and account-free operation; Fritidsbidraget's highlighted GDPR consent callout box and `RADERA` permanent-delete safeguard.
4. **Modern Tailwind v4 Card & Elevation Language:**
   - Both newer NewSeed apps (`katjing.newseed.se` and `fritidsbidraget.se`) are built with React + Vite + Tailwind CSS v4, featuring generous border radii (`14px`–`24px`), crisp `1px` borders, subtle tinted callout boxes, uppercase tracked eyebrow labels (`tracking-[0.18em]` / `tracking-widest`), and pill/rounded-xl interactive controls.
5. **Semantic Color Coding for Status & Actions:**
   - Across the family, green signals active/approved/safe states, amber/gold highlights consent or attention notices, blue denotes primary navigation/links/info, and red is strictly reserved for revocation, errors, and destructive actions.
6. **Subtle, Trust-Building NewSeed Attribution:**
   - Every app includes a clean footer signature linking back to `newseed.se` (e.g., *"Skapad av NewSeed IT Solutions | Innovativ mjukvaruutveckling"* in Fritidsbidraget; *"Utvecklad av NewSeed IT Solutions AB"* in Katjing; *"K for Contact - created by Newseed"* / *"NewSeed - Realising Ideas"* in K for Contact).

---

### 3.2 How K for Contact Can Visually Align with Katjing & Fritidsbidraget While Bridging Both Audiences

#### The Design Challenge
Currently, `kforcontact.com` and `app.kforcontact.com` still wear their 2018–2019 visual skin (Bootstrap 4 / Material-UI v4, heavy full-screen `linear-gradient(120deg, #30a4dc, #7961aa)` backgrounds, sharp `3px`–`5px` card corners, and extreme `transform: scale(2.5)` hover effects). Meanwhile, its sister apps have evolved into two complementary poles of the NewSeed visual system:
- **Katjing (`#4f6d32` forest green + `#faf9f5` warm cream + `Bricolage Grotesque` / `Public Sans`)** feels **warm, community-driven, and approachable** for club parents and kiosk volunteers.
- **Fritidsbidraget (`#003399` royal blue + `#001f3f` deep navy + `#f9fafb` cool gray + `rounded-2xl` white cards)** feels **institutional, structured, and trustworthy** for financial/administrative workflows.

K for Contact sits **directly at the intersection of these two worlds**: it is used by **sports club parents and leaders** (the Katjing & Fritidsbidraget audience) to manage team contact lists, AND by **corporate professionals and event attendees** to exchange live business cards and manage GDPR-compliant customer directories.

#### Actionable Visual Alignment Strategy for K for Contact

1. **Preserve K for Contact's Brand Hues, Modernize Their Application (From Full-Bleed Gradients to Calm Surfaces + Focal Accents):**
   - **Retire** the full-viewport gradient background (`.background-gradient-linear`) behind data-heavy views (Contacts, Groups, CSV Import), which reduces legibility and feels dated compared to Katjing and Fritidsbidraget.
   - **Adopt the NewSeed Surface Hierarchy:** Use a calm, high-craft light canvas—either Fritidsbidraget's crisp cool alabaster (`#f8fafc` / `bg-gray-50`) or a neutral off-white (`#f9fafb`)—with pure white elevated cards (`#ffffff`), `1px` subtle borders (`#e2e8f0` / `border-gray-100`), and Katjing's refined multi-layer shadow tokens (`.shadow-card` and `.shadow-lift`).
   - **Anchor Primary Brand Identity in K for Contact's Signature Blue-Cyan (`#30a4dc` / `#008cd3`) and Deep Navy-Indigo (`#1e2a4a` / `#3e5dbc`), with Violet (`#7961aa`) as a Secondary Accent:**
     - Using **Deep Indigo-Navy (`#1e2a4a` / `#001f3f`)** for primary text, headers, and active sidebar navigation visually links K for Contact directly to **Fritidsbidraget** and conveys corporate credibility.
     - Retaining **K for Contact Cyan (`#30a4dc`) -> Indigo/Violet (`#3e5dbc` / `#7961aa`)** as a controlled accent—on the digital business card header banner, the QR share badge, primary CTA buttons, and the `K` live-connection indicator—preserves instant brand recognition without overwhelming the workspace.

2. **Bridge Club Approachability & Corporate Professionalism via Context-Aware Profile Cards:**
   - **Profile / Filter Visual Differentiation:** Since K for Contact's core superpower is multiple profiles (*Arbetsprofil* vs. *Privat / Fotbollsgruppen*), reflect this visually using family tokens:
     - **Work / Conference Profile (*Företag*):** Styled with crisp navy/cyan accents (`#1e2a4a` / `#30a4dc`), structured key-value rows, company/title prominence, LinkedIn/GitHub badges, and a one-tap vCard/QR share sheet.
     - **Club / Group Profile (*Förening / Privat*):** Styled with approachable warm accents inspired by Katjing (e.g., sage/emerald badge `#4f6d32` or soft sky `#ebf5ff`), highlighting group membership, role (Coach/Parent), and preferred quick-contact actions (`tel:`, `sms:`, WhatsApp).

3. **Unify Typography & Component Geometry with the Modern NewSeed Stack (Tailwind v4):**
   - Pair **`Public Sans`** (from Katjing) or clean **System UI / Inter** for high-legibility contact lists, tables, and forms with **`Montserrat` (600/700)** or **`Bricolage Grotesque`** for display headings and profile card names.
   - Standardize border radii to match the family:
     - `rounded-2xl` (`1rem`) / `rounded-3xl` (`1.5rem`) for Profile cards, QR Share modals, and Group cards.
     - `rounded-xl` (`0.75rem`) for form inputs, search bars, and sidebar navigation items (matching Fritidsbidraget's `aside` nav and inputs).
     - `rounded-full` (pill) for primary share CTAs, status chips (*Available*, *Out of Office*, *Temporary Share*), and profile filter switchers (matching Katjing's `.katjing-button` and Fritidsbidraget's wizard CTAs).

4. **Elevate Trust, Privacy & Revocation into First-Class Visual Components:**
   - Follow Fritidsbidraget's semantic callout pattern (`bg-[#ebf5ff] border-[#cfe4ff]` for info, `bg-amber-50 border-amber-200` for consent/temporary expiry, `bg-red-50 border-red-200` for revocation) so users can immediately see:
     - **Who has access** to which profile filter (with a clear `K` live-sync badge).
     - **Temporary Share Countdown** (amber chip showing time/scans remaining for `expires` and `single` shares).
     - **One-Click Revoke / Leave Group** with Fritidsbidraget's unmistakable destructive confirmation pattern, reinforcing the core promise that *you own and control your personal data*.
