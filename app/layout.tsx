import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Tales of Us Home Boarding | A home away from home for your dog",
    description: "Warm, small-group home dog boarding in Bengaluru, personally hosted by a dog-loving couple with garden play, familiar routines, and daily photo updates.",
    keywords: ["home dog boarding", "dog boarding Bengaluru", "Golden Retriever boarding", "Labrador boarding", "dog daycare"],
    openGraph: {
      title: "Tales of Us Home Boarding",
      description: "A holiday for them. Peace of mind for you.",
      type: "website",
      images: [{ url: imageUrl, width: 1731, height: 909, alt: "Tales of Us Home Boarding with a Golden Retriever and Labrador" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tales of Us Home Boarding",
      description: "A holiday for them. Peace of mind for you.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
