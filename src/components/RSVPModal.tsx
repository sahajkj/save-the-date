"use client";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function RSVPModal({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mealPreference: "",
    dietaryRequirements: "",
    additionalGuests: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("Thank you! Your RSVP has been recorded.");
      onClose();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl mb-4">RSVP</h2>
        <input name="name" onChange={handleChange} placeholder="Your Name" required className="w-full mb-2 p-2 border" />
        <input name="email" onChange={handleChange} placeholder="Your Email" required className="w-full mb-2 p-2 border" />
        <select name="mealPreference" onChange={handleChange} className="w-full mb-2 p-2 border">
          <option value="">Meal Preference</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        <input name="dietaryRequirements" onChange={handleChange} placeholder="Dietary Requirements" className="w-full mb-2 p-2 border" />
        <input name="additionalGuests" type="number" onChange={handleChange} placeholder="Additional Guests" className="w-full mb-4 p-2 border" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
        <button type="button" className="mt-2 text-sm text-gray-500 underline w-full" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
