'use client';

import { useEffect, useState } from 'react';
import GjsEditor from '@grapesjs/react';
import grapesjs, { type Editor } from 'grapesjs';
import basicBlocks from 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';

const STATIC_BASE = '/cardilett-static';
const STORAGE_KEY = 'cardilett-editor';

type StaticContent = {
  bodyHtml: string;
  blocks: { id: string; label: string; content: string }[];
};

function parseStaticHtml(html: string): StaticContent {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const blocks = Array.from(doc.querySelectorAll<HTMLElement>('[data-block-id]')).map((el) => ({
    id: el.dataset.blockId ?? '',
    label: el.dataset.blockLabel ?? el.dataset.blockId ?? 'Block',
    content: el.outerHTML,
  }));
  return { bodyHtml: doc.body.innerHTML, blocks };
}

export default function GrapesEditor() {
  const [content, setContent] = useState<StaticContent | null>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('reset')) {
      localStorage.removeItem(STORAGE_KEY);
      window.history.replaceState({}, '', window.location.pathname);
    }
    fetch(`${STATIC_BASE}/index.html`)
      .then((r) => r.text())
      .then((html) => setContent(parseStaticHtml(html)));
  }, []);

  if (!content) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '100vh', color: '#666' }}>
        Loading editor…
      </div>
    );
  }

  return (
    <GjsEditor
      grapesjs={grapesjs}
      options={{
        height: '100vh',
        width: 'auto',
        storageManager: {
          type: 'local',
          autosave: true,
          autoload: true,
          stepsBeforeSave: 1,
          options: { local: { key: STORAGE_KEY } },
        },
        canvas: {
          styles: [
            `${STATIC_BASE}/styles.css`,
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap',
          ],
          scripts: [`${STATIC_BASE}/script.js`],
        },
        components: content.bodyHtml,
      }}
      plugins={[basicBlocks]}
      onReady={(editor: Editor) => {
        const bm = editor.Blocks;
        content.blocks.forEach((block) => {
          bm.add(block.id, {
            label: block.label,
            category: 'Cardilett Brand Sections',
            content: block.content,
          });
        });

        const iframe = editor.Canvas.getFrameEl();
        if (iframe?.contentDocument) {
          const style = iframe.contentDocument.createElement('style');
          style.innerHTML = `
            .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
            .preloader { display: none !important; }
          `;
          iframe.contentDocument.head.appendChild(style);
        }

        editor.Panels.getButton('views', 'open-blocks')?.set('active', true);
      }}
    />
  );
}
