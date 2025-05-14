export const contactFormValidation = {
  name: {
    required: "Full Name is required",
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address",
    },
  },
  subject: {
    required: "Subject is required",
  },
  message: {
    required: "Message is required",
  },
};
