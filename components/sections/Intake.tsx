"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import IntakeForm from "@/components/forms/IntakeForm";

export default function Intake() {
  return (
    <SectionWrapper id="intake" alternate>
      <ScrollFadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] text-center mb-12">
          Let&apos;s talk
        </h2>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <ScrollFadeIn>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
              Describe Your Situation
            </h3>
            <IntakeForm />
          </div>
        </ScrollFadeIn>

        {/* Right: Cal.com placeholder */}
        <ScrollFadeIn delay={100}>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
              Or Let&apos;s Just Talk
            </h3>
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 border-2 border-dashed border-[var(--color-border)] text-center min-h-[400px] flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">📞</div>
              <p className="text-lg font-semibold text-[var(--color-text)]">
                Book a 30-Minute Call
              </p>
              <p className="mt-3 text-[var(--color-text-secondary)] max-w-sm">
                If you&apos;d rather just have a conversation, book a 30-minute
                call. No pitch, no pressure — just tell me what&apos;s going on
                and I&apos;ll let you know if I can help.
              </p>
              <p className="mt-6 text-sm text-[var(--color-text-light)]">
                Cal.com booking widget will appear here once configured.
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </SectionWrapper>
  );
}
