const resources = [
  {
    name: 'Fractal Audio family comparison',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Axe-Fx_III%2C_FM9%2C_FM3',
    note: 'Fractal Audio Wiki comparison for FM3, FM9, and Axe-Fx III hardware, block differences, instance counts, and feature limits.',
  },
  {
    name: 'Effects list',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Effects_list',
    note: 'Fast block inventory table across Fractal products. Use it to check which blocks exist on each unit.',
  },
  {
    name: 'Fractal Audio Blocks Guide (PDF)',
    url: 'https://www.fractalaudio.com/downloads/manuals/fas-guides/Fractal-Audio-Blocks-Guide.pdf',
    note: 'Complete reference for every block and every parameter across Axe-Fx III, FM9, and FM3. Updated regularly to track firmware.',
  },
  {
    name: 'Fractal Audio Wiki',
    url: 'https://wiki.fractalaudio.com/wiki/',
    note: 'Community-maintained wiki. Product comparison pages, per-block pages, amp model guides, and firmware release notes are all worth bookmarking.',
  },
  {
    name: 'Fractal Audio downloads',
    url: 'https://www.fractalaudio.com/support/',
    note: 'Owner manuals, firmware, editors, USB drivers, factory presets, and preset banks for FM3, FM9, and Axe-Fx III.',
  },
  {
    name: 'Fractal-Bot',
    url: 'https://www.fractalaudio.com/fractal-bot/',
    note: 'Cross-platform installer/uploader for firmware updates and preset backups.',
  },
  {
    name: 'Fractal editors',
    url: 'https://www.fractalaudio.com/support/',
    note: 'FM3-Edit, FM9-Edit, and Axe-Edit are the practical way to inspect block pages, type lists, IR workflows, and preset layouts.',
  },
  {
    name: 'Fractal Audio Systems Forum',
    url: 'https://forum.fractalaudio.com/',
    note: 'Official forums for all current units: release-note threads, preset sharing, tone tips, and direct posts from Fractal staff.',
  },
  {
    name: 'AustinBuddy Naked Amps & Tone-Pack',
    url: 'https://austinbuddy.com/',
    note: '(Third party) Curated preset packs and detailed "Naked Amps" tone-base presets for Fractal units.',
  },
  {
    name: 'Yek’s Guide to the Fractal Audio Amp Models',
    url: 'https://archive.axefx.fr/AxeFX%20II/Docs%20%26%20Manuals/Yeks_Guide_to_the_Fractal_Audio_Amp_Models.pdf',
    note: 'Archived PDF with in-depth, model-by-model history and recommended settings.',
  },
  {
    name: 'Leon Todd / Tom Quayle / Cooper Carter videos',
    url: 'https://www.youtube.com/results?search_query=fractal+audio+fm3+fm9+axe-fx+iii+tutorial',
    note: 'Established educators who post useful Fractal tutorials across FM3, FM9, and Axe-Fx III.',
  },
]

export function ResourcesPage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Where to learn more</p>
        <h1>Resources</h1>
        <p className="lede">
          Official documentation, tools, and community resources. Use these sources to
          confirm firmware-specific details before changing presets or live rigs.
        </p>
      </header>

      <section className="block-section">
        <ul className="resource-list">
          {resources.map((r) => (
            <li key={r.url} className="resource-item">
              <a href={r.url} target="_blank" rel="noopener noreferrer">
                {r.name}
              </a>
              <p>{r.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
