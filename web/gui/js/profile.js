// ── Profile dropdown (top right — auto-switch on select) ────────────
async function loadProfiles() {
  try {
    const res = await fetch('/profiles');
    const d = await res.json();
    const sel = $('profile-select');
    sel.innerHTML = '';
    for (const p of (d.profiles || [])) {
      const opt = document.createElement('option');
      // The API returns {name, locked, is_default} objects now.
      const name = typeof p === 'string' ? p : p.name;
      const locked = typeof p === 'string' ? false : !!p.locked;
      opt.value = name;
      opt.textContent = name + (locked ? ' 🔒' : '');
      sel.appendChild(opt);
    }
    sel.value = d.current || 'default';
  } catch (e) { /* server may be mid-boot */ }
}
$('profile-select').addEventListener('change', async e => {
  const target = e.target.value;
  try {
    const res = await fetch('/profiles/switch', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({profile: target}),
    });
    const d = await res.json();
    if (d.ok) {
      // Auto-switch the ACTIVE profile across the ENTIRE website.
      ACTIVE_PROFILE = target;
      // Load the new profile's sessions + chat history (no placeholders).
      loadSessionDropdown();
      loadChatHistory();
      loadSessions();
      loadVaultGrid();
      loadUsage();
      loadSettings();
      loadFooter();
    }
  } catch (e) { /* ignore */ }
});

