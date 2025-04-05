"use client";

import { ContactFormData } from "@/types/global";
import { useState, useCallback, useMemo } from "react";
import { toast } from "sonner";

export function useContactLogic() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    channel: "",
    project: "",
    projectDetails: "",
    
  });
  const [error, setError] = useState("");

  // Validation logic
  const validateForm = useCallback(() => {
    const { firstName, lastName, email, channel, project, projectDetails } = formData;

    if (!firstName || !lastName || !email || !channel || !project || !projectDetails) {
      toast.error("All fields are required.");
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  }, [formData]);

  const handleInputChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user types
    if (value.trim() !== "") {
    }
  }, []);

  // Handle select input change
  const handleChannelSelectChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      channel: value,
    }));

  }, []);

   // Handle select input change
   const handleProjectSelectChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      project: value,
    }));

  }, []);

 
  // Submit form
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      if (!validateForm()) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Form submitted successfully!");
        } else {
          toast.error("Form submission failed");
        }
      } catch (error) {
        toast.error(`An error occurred. ${error}`);
      } finally {
        setLoading(false);
      }
    },
    [formData, validateForm]
  );

  return useMemo(
    () => ({
      loading,
      formData,
      error,
      handleInputChange,
      handleChannelSelectChange,
      handleProjectSelectChange,
      handleSubmit,
    }),
    [
      loading,
      formData,
      error,
      handleInputChange,
      handleChannelSelectChange,
      handleProjectSelectChange,
      handleSubmit,
    ]
  );
}
