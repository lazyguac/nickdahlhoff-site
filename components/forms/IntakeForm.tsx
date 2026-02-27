"use client";

import { useState, FormEvent, useEffect } from "react";
import Button from "@/components/ui/Button";

// TODO: Uncomment Convex imports after running `npx convex dev` to set up the project
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";

export default function IntakeForm() {
  // TODO: Uncomment when Convex is configured:
  // const createLead = useMutation(api.leads.create);

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState<string | undefined>(undefined);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Capture ref param for flyer campaign tracking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setSource(ref);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    // Validation
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setError("Please tell me a bit more about your situation (at least a couple sentences).");
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Replace with Convex mutation when configured:
      // await createLead({
      //   email: email.trim(),
      //   name: name.trim() || undefined,
      //   businessName: businessName.trim() || undefined,
      //   phone: phone.trim() || undefined,
      //   website: website.trim() || undefined,
      //   message: message.trim(),
      //   source,
      // });

      // Temporary: log form data until Convex is connected
      console.log("Lead submission:", {
        email: email.trim(),
        name: name.trim() || undefined,
        businessName: businessName.trim() || undefined,
        phone: phone.trim() || undefined,
        website: website.trim() || undefined,
        message: message.trim(),
        source,
      });
      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-success)] text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-[var(--color-text)]">Got it!</h3>
        <p className="mt-3 text-[var(--color-text-secondary)]">
          I&apos;ll review what you sent and get back to you within 1-2 business
          days.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
            Your name{" "}
            <span className="font-normal text-[var(--color-text-light)]">
              (optional)
            </span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
            Business name{" "}
            <span className="font-normal text-[var(--color-text-light)]">
              (optional)
            </span>
          </label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Smith & Sons HVAC"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
          Email <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@smithhvac.com"
          required
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
            Phone{" "}
            <span className="font-normal text-[var(--color-text-light)]">
              (only if you want me to call)
            </span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(616) 555-0123"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
            Website{" "}
            <span className="font-normal text-[var(--color-text-light)]">
              (optional)
            </span>
          </label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://smithhvac.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
          What&apos;s going on?{" "}
          <span className="text-[var(--color-error)]">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your business and what you're dealing with. The more detail the better. What's frustrating you? What's eating up your time? What do you wish worked better?"
          required
          rows={6}
          className={`${inputClasses} min-h-[150px] resize-y`}
        />
      </div>

      {error && (
        <p className="text-[var(--color-error)] text-sm font-medium">{error}</p>
      )}

      <Button
        type="submit"
        size="large"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Send It Over"}
      </Button>

      <p className="text-sm text-[var(--color-text-light)] text-center">
        I&apos;ll review what you send and get back to you within 1-2 business
        days.
      </p>
    </form>
  );
}
