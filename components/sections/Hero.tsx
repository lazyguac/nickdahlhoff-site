"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[var(--color-accent)]">
            Your business has problems technology can solve. I&apos;ll find them
            and fix them.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mt-6 max-w-xl">
            I&apos;m Nick Dahlhoff — AI &amp; business systems specialist in the
            Grand Rapids area. Things are changing fast. I help business owners
            cut through the noise, figure out what new technology actually means
            for their business, and build the systems to take advantage of it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="#intake" size="large">
              Tell Me About Your Business
            </Button>
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-light)]">
            Currently accepting new clients — ~20 hours/week available
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <ImagePlaceholder
            label="Professional photo coming soon"
            aspectRatio="aspect-[3/4]"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
