"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // Control the dialog visibility

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formsubmit.co/developer15246@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setOpen(true); // Show pop-up message
      setForm({ name: "", email: "", message: "" }); // Reset form fields
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me!</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full bg-black text-[#06B6D4] border-none outline-none "
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full bg-black text-[#06B6D4] border-none outline-none "
          />
        </div>
        <div>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full bg-black text-[#06B6D4] border-none outline-none "
          />
        </div>
        <Button
          className="w-full bg-cyan-400 hover:bg-cyan-500"
          disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* ShadCN Dialog (Pop-up Confirmation) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Sent!</DialogTitle>
            <DialogDescription>
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
