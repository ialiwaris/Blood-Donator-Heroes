# Blood Donator Heroes — account deletion page

Standalone website for GitHub Pages. No installation, build, external fonts, or backend required.

## Before publishing

Edit `config.js` and provide all three values:

- `supportEmail`: a real, monitored inbox for deletion requests.
- `processingTime`: the actual time your team takes after verifying ownership.
- `retentionPolicy`: explain what is deleted, what (if anything) is retained, why, and the exact retention period. Include applicable backups. Only state practices you actually carry out.

The request button stays disabled until these are configured. Do not submit an unconfigured page to Google Play. This site prepares an email; it does not automatically delete accounts. Your team must verify ownership, delete the account and its associated data from your backend/storage, and reply to the requester.

## GitHub Pages par upload karna

1. GitHub par naya public repository banayein, misal `blood-donator-account-deletion`.
2. Sirf is folder ki files repository ke root mein upload karein: `index.html`, `config.js`, `script.js`, `.nojekyll`. Puri mobile app, `.env`, credentials ya user data upload na karein.
3. Repository → Settings → Pages → Build and deployment → Deploy from a branch.
4. Branch `main`, folder `/ (root)` select karke Save karein.
5. Deployment complete hone par Pages mein aapka live HTTPS link nazar aayega. Link ka format `https://YOUR-USERNAME.github.io/blood-donator-account-deletion/` hoga.
6. Live page mobile par khol kar actual request email bhej kar check karein. Email inbox mein receive honi chahiye.
7. Play Console → App content → Data safety ke account deletion URL field mein woh live link dein.

Google Play also requires an accessible deletion request path inside apps that support account creation. Add a prominent account/settings link to this hosted page if an in-app path is not already implemented. Creating this webpage alone does not add that path or implement backend deletion.

Official requirements: https://support.google.com/googleplay/android-developer/answer/13327111?hl=en
