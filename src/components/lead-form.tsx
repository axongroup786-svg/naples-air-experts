"use client";

import { useState } from "react";
import { BUSINESS, SERVICES } from "@/lib/site";
import { Icon } from "@/components/icons";

type Props = {
  variant?: "ticket" | "full" | "inline";
  source?: string;
  page?: string;
  title?: string;
  tone?: "light" | "navy";
};

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

const PROPERTY_TYPES = ["Residential", "Commercial"];

export default function LeadForm({
  variant = "ticket",
  source = "website",
  page = "/",
  title = "Work Order",
  tone = "light",
}: Props) {
  const full = variant === "full";
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "Residential",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate(): boolean {
    const er: Errors = {};
    if (values.name.trim().length < 2) er.name = "Please enter your name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) er.phone = "Enter a 10-digit phone number.";
    if (full) {
      if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
        er.email = "Enter a valid email address.";
      if (!values.service) er.service = "Choose the service you need.";
    }
    if (values.message.length > 1200) er.message = "Message is too long.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source, page }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) throw new Error(data.message || "Request failed");
      setServerMsg(data.message || "Request received.");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const isNavy = tone === "navy";
  const labelCls = isNavy ? "!text-white/60" : "";

  if (status === "done") {
    return (
      <div
        className="ticket p-6 sm:p-7"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-navy text-white">
            <Icon name="check" className="h-5 w-5" />
          </span>
          <div>
            <p className="micro text-flare-ink">Request Logged</p>
            <h3 className="display-md mt-1.5">Thank you — we have your request</h3>
          </div>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {serverMsg ||
            "A Naples Air Experts coordinator will call you back to confirm your appointment window."}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-rule pt-5">
          <span className="micro text-muted">Need help now?</span>
          <a href={BUSINESS.phoneHref} className="btn btn-flare !py-2.5 !text-[13px]">
            <Icon name="phone" className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="ticket">
      <div className="ticket-head flex items-center justify-between gap-3 bg-navy px-4 py-3 sm:px-5">
        <div>
          <p className="micro-sm text-flare">Naples Air Experts</p>
          <p className="display text-[16px] tracking-normal text-white sm:text-[18px]">
            {title}
          </p>
        </div>
        <span className="micro-sm tnum shrink-0 border border-white/30 px-2 py-1 text-white/70">
          No. {String(1200 + (page.length * 7) % 800)}
        </span>
      </div>

      <div className="grid gap-3.5 p-4 sm:p-5">
        <div className={full ? "grid gap-3.5 sm:grid-cols-2" : "grid gap-3.5"}>
          <div>
            <label className={`field-label ${labelCls}`} htmlFor={`${page}-name`}>
              Full Name *
            </label>
            <input
              id={`${page}-name`}
              name="name"
              type="text"
              autoComplete="name"
              className="field"
              placeholder="Jane Doe"
              value={values.name}
              onChange={set("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${page}-name-err` : undefined}
            />
            {errors.name && (
              <p id={`${page}-name-err`} className="mt-1 text-[12.5px] font-medium text-alarm">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className={`field-label ${labelCls}`} htmlFor={`${page}-phone`}>
              Phone Number *
            </label>
            <input
              id={`${page}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className="field tnum"
              placeholder="(239) 555-0100"
              value={values.phone}
              onChange={set("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${page}-phone-err` : undefined}
            />
            {errors.phone && (
              <p id={`${page}-phone-err`} className="mt-1 text-[12.5px] font-medium text-alarm">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {full && (
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div>
              <label className={`field-label ${labelCls}`} htmlFor={`${page}-email`}>
                Email
              </label>
              <input
                id={`${page}-email`}
                name="email"
                type="email"
                autoComplete="email"
                className="field"
                placeholder="you@example.com"
                value={values.email}
                onChange={set("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 text-[12.5px] font-medium text-alarm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className={`field-label ${labelCls}`} htmlFor={`${page}-service`}>
                Service Needed *
              </label>
              <select
                id={`${page}-service`}
                name="service"
                className="field"
                value={values.service}
                onChange={set("service")}
                aria-invalid={!!errors.service}
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.cardTitle}>
                    {s.cardTitle}
                  </option>
                ))}
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-[12.5px] font-medium text-alarm">{errors.service}</p>
              )}
            </div>
          </div>
        )}

        {!full && (
          <div>
            <label className={`field-label ${labelCls}`} htmlFor={`${page}-service-c`}>
              Service Needed
            </label>
            <select
              id={`${page}-service-c`}
              name="service"
              className="field"
              value={values.service}
              onChange={set("service")}
            >
              <option value="">Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.cardTitle}>
                  {s.cardTitle}
                </option>
              ))}
              <option value="Other / Not Sure">Other / Not Sure</option>
            </select>
          </div>
        )}

        {full && (
          <fieldset className="border-0 p-0">
            <legend className={`field-label ${labelCls}`}>Property Type *</legend>
            <div className="grid grid-cols-2 gap-2">
              {PROPERTY_TYPES.map((t) => (
                <label
                  key={t}
                  className={`flex cursor-pointer items-center justify-center gap-2 border px-3 py-2.5 text-[13.5px] font-semibold uppercase tracking-wide transition-colors ${
                    values.propertyType === t
                      ? "border-navy bg-navy text-white"
                      : "border-[#c9d5e2] bg-white text-muted hover:border-navy hover:text-navy"
                  }`}
                >
                  <input
                    type="radio"
                    name="propertyType"
                    value={t}
                    checked={values.propertyType === t}
                    onChange={set("propertyType")}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div>
          <label className={`field-label ${labelCls}`} htmlFor={`${page}-message`}>
            Message {full ? "*" : ""}
          </label>
          <textarea
            id={`${page}-message`}
            name="message"
            rows={full ? 4 : 3}
            className="field resize-y"
            placeholder={
              full
                ? "System type, age, what the unit is doing, best time to reach you…"
                : "Tell us what your AC is doing…"
            }
            value={values.message}
            onChange={set("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-[12.5px] font-medium text-alarm">{errors.message}</p>
          )}
        </div>

        {status === "error" && (
          <p className="border-l-4 border-alarm bg-alarm/5 px-3 py-2 text-[13px] text-alarm">
            Something went wrong sending your request. Please call{" "}
            <a href={BUSINESS.phoneHref} className="font-bold underline">
              {BUSINESS.phoneDisplay}
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-flare w-full disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : full ? "Request Free Estimate" : "Request Service"}
        </button>

        <p className="micro-sm text-center leading-relaxed text-muted">
          {full ? "No obligation · No pressure" : "We respond fast during business hours"} · Or call{" "}
          <a href={BUSINESS.phoneHref} className="tnum font-bold text-sky-deep">
            {BUSINESS.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
