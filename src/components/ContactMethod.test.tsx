import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Mail } from "lucide-react";
import { ContactMethod } from "./ContactMethod";

describe("ContactMethod", () => {
  it("renders label and value with the given href", () => {
    render(
      <ContactMethod icon={Mail} label="Email" value="me@example.com" href="mailto:me@example.com" />
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("me@example.com")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "mailto:me@example.com");
  });

  it("opens external links in a new tab with rel=noopener noreferrer", () => {
    render(
      <ContactMethod icon={Mail} label="GitHub" value="@user" href="https://github.com/user" />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not set target/rel for non-http links like mailto", () => {
    render(<ContactMethod icon={Mail} label="Email" value="me@example.com" href="mailto:me@example.com" />);

    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });
});
