"use client";

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactFormCard() {
  const [isHydrated, setIsHydrated] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <div className="bg-surface rounded-2xl p-8 lg:p-10 shadow-2xl" />;
  }

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Message sent! We’ll get back to you soon.");
      reset();
    } catch (e) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border outline-none transition-all";
  const inputNormal =
    "border-border focus:border-primary focus:ring-2 focus:ring-primary/20";
  const inputError =
    "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";

  return (
    <div
      className="bg-surface rounded-2xl p-8 lg:p-10 shadow-2xl"
      suppressHydrationWarning
    >
      <h3 className="text-2xl font-bold mb-6 text-text">Send Us a Message</h3>

      {/* success message (optional) */}
      {isSubmitSuccessful && (
        <div className="mb-6 rounded-lg border border-border bg-bg p-4 text-sm text-text">
          Thanks — your message has been received. We’ll get back to you soon.
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-muted mb-2"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              {...register("firstName", {
                required: "First name is required.",
                minLength: {
                  value: 2,
                  message: "Must be at least 2 characters.",
                },
              })}
              className={`${inputBase} ${
                errors.firstName ? inputError : inputNormal
              }`}
            />
            {errors.firstName && (
              <p className="mt-2 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-muted mb-2"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              {...register("lastName", {
                required: "Last name is required.",
                minLength: {
                  value: 2,
                  message: "Must be at least 2 characters.",
                },
              })}
              className={`${inputBase} ${
                errors.lastName ? inputError : inputNormal
              }`}
            />
            {errors.lastName && (
              <p className="mt-2 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-muted mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            className={`${inputBase} ${
              errors.email ? inputError : inputNormal
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-muted mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone", {
              validate: (val) =>
                !val ||
                val.replace(/\D/g, "").length >= 10 ||
                "Please enter at least 10 digits.",
            })}
            className={`${inputBase} ${
              errors.phone ? inputError : inputNormal
            }`}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-muted mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message: "Please write at least 10 characters.",
              },
            })}
            className={`${inputBase} resize-none ${
              errors.message ? inputError : inputNormal
            }`}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p className="text-xs text-muted text-center">
          By submitting, you agree to be contacted by Essenza Wellness Center.
          Do not include sensitive medical details in this form.
        </p>
      </form>
    </div>
  );
}
