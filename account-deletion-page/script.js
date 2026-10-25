"use strict";
(() => {
  const config = window.DELETION_CONFIG || {};
  const email = String(config.supportEmail || "").trim();
  const ready = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    Boolean(String(config.processingTime || "").trim()) &&
    Boolean(String(config.retentionPolicy || "").trim());
  document.getElementById("setup").hidden = ready;
  document.getElementById("send").disabled = !ready;
  if (config.processingTime) document.getElementById("processing").textContent = config.processingTime;
  if (config.retentionPolicy) document.getElementById("retention").textContent = config.retentionPolicy;
  if (ready) {
    const link = document.getElementById("email-link");
    link.textContent = email;
    link.href = "mailto:" + email + "?subject=" + encodeURIComponent("Account deletion request — Blood Donator Heroes");
    document.getElementById("direct").hidden = false;
  }
  document.getElementById("request-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!ready) return;
    const identity = document.getElementById("identity").value.trim();
    if (!identity) {
      document.getElementById("status").textContent = "Enter your registered email or phone number.";
      document.getElementById("identity").focus();
      return;
    }
    const body = ["Hello Blood Donator Heroes support,", "", "Please permanently delete my account and the personal data associated with it.", "", "Registered email / phone: " + identity, "", "Additional details: " + document.getElementById("notes").value.trim(), "", "I confirm that I am the account holder. Please let me know if verification is needed and confirm when deletion is complete."].join("\n");
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent("Account deletion request — Blood Donator Heroes") + "&body=" + encodeURIComponent(body);
    document.getElementById("status").textContent = "Your email app has been requested to open. Send the prepared email to submit your request. If it did not open, use the support email below. Your request has not been submitted by this webpage.";
  });
})();
