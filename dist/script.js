'use strict';
const links = Array.from(document.querySelectorAll('.tabs a'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
const copyButton = document.getElementById('copy-email');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText('kamiyan460@gmail.com');
      status.textContent = 'メールアドレスをコピーしました。';
    } catch {
      status.textContent = 'コピーできませんでした。上のアドレスを選択してコピーしてください。';
    }
  });
}
// 送信後の戻り先。公開先のURLを書かずに済むよう、表示中のURLから組み立てる。
const next = document.querySelector('input[name="_next"]');
if (next && (location.protocol === 'https:' || location.protocol === 'http:')) {
  next.value = new URL('thanks.html', location.href).href;
}
