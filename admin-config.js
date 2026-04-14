// admin-config.js

export const ADMIN_EMAILS = [
  "wmtcreator@gmail.com",
  "italokauan4444@gmail.com",
  "william.teles3000@gmail.com",
  "EMAIL_DA_OUTRA_CONTA_AQUI"
];

export function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

export function getAdminEmails() {
  return ADMIN_EMAILS.map(normalizeEmail).filter(Boolean);
}

export function isAdminEmail(email) {
  return getAdminEmails().includes(normalizeEmail(email));
}

export function isAdminUser(user) {
  return isAdminEmail(user?.email || "");
}
