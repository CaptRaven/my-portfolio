"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Senior Role",
    budget: "Not specified",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Senior Role",
        budget: "Not specified",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full rounded-3xl border border-white/10 bg-zinc-900/50 p-8">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Sent</h3>
          <p className="mt-3 max-w-md text-muted-foreground">
            Thanks for reaching out. I will reply with next steps as quickly as I can.
          </p>
          <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8 border-white/10">
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-white/10 bg-zinc-950/50 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-white/10 bg-zinc-950/50 focus:border-primary/50"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="projectType">Inquiry Type</Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-white/10 bg-zinc-950/50 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option>Senior Role</option>
                <option>Contract / Consulting</option>
                <option>AI Product Build</option>
                <option>Mobile Product</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Stage</Label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-white/10 bg-zinc-950/50 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option>Not specified</option>
                <option>Exploring now</option>
                <option>Hiring this quarter</option>
                <option>Active project</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Share the role, product problem, or project scope."
              required
              value={formData.message}
              onChange={handleChange}
              className="min-h-[140px] border-white/10 bg-zinc-950/50 focus:border-primary/50"
            />
          </div>

          {status === "error" ? (
            <div className="flex items-center rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
              <AlertCircle className="mr-2 h-4 w-4" />
              {errorMessage}
            </div>
          ) : null}

          <Button type="submit" disabled={status === "submitting"} className="w-full" size="lg">
            {status === "submitting" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
