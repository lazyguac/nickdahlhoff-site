import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Payment | Nick Dahlhoff",
  description: "Pay for consulting services",
};

export default function PayPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-[var(--color-accent)]">
          Payment
        </h1>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Payment page coming soon. Nick will send you a payment link directly
          when it&apos;s time to get started.
        </p>
        <div className="mt-8">
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
