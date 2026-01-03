import { SectionWrapper } from "./SectionWrapper";
import { ContactMethod } from "./ContactMethod";
import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

/**
 * Contact section component
 * Display contact methods and optional contact form
 */
export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Happy to discuss opportunities, collaborations, or just share my work!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <ContactMethod
            icon={Mail}
            label="Email"
            value="visheshrsde@gmail.com"
            href="mailto:visheshrsde@gmail.com"
            color="blue"
          />
          <ContactMethod
            icon={Linkedin}
            label="LinkedIn"
            value="/in/vishesh-raju"
            href="https://www.linkedin.com/in/vishesh-raju/"
            color="blue"
          />
          <ContactMethod
            icon={Github}
            label="GitHub"
            value="@Vishesh0-7"
            href="https://github.com/Vishesh0-7"
            color="gray"
          />
        </div>

        {/* Image Placeholder */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s Connect!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              
            </p>
          </div>
          <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/myself.jpeg"
                alt="Vishesh Raju"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
