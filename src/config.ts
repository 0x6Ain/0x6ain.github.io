// Get a free access key at https://web3forms.com (just enter an email, no account needed).
// Local dev: put it in a .env file as WEB3FORMS_ACCESS_KEY=... (gitignored).
// Production: set it as a "WEB3FORMS_ACCESS_KEY" secret in the GitHub repo
// (Settings → Secrets and variables → Actions) — the deploy workflow passes it
// through to the build. The key still ends up visible in the deployed page
// source since Web3Forms is designed to be called directly from the browser;
// this only keeps it out of the repo's source code and git history.
export const WEB3FORMS_ACCESS_KEY = import.meta.env.WEB3FORMS_ACCESS_KEY ?? 'YOUR_WEB3FORMS_ACCESS_KEY';
