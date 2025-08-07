import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  const [formData, setFormData] = useState({
    aftertaste: "",
    overall: "",
    balance: "",
    flavor: "",
    aroma: "",
    acidity: "",
    body: "",
    moisture: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Prediction failed");
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10" id="predict-form">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="space-y-6">
          <h1 className="text-3xl font-bold text-center mt-4">
            Coffee Quality Predictor
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { label: "Aftertaste", name: "aftertaste", range: "0–10" },
              { label: "Overall", name: "overall", range: "0–10" },
              { label: "Balance", name: "balance", range: "0–10" },
              { label: "Flavor", name: "flavor", range: "0–10" },
              { label: "Aroma", name: "aroma", range: "0–10" },
              { label: "Acidity", name: "acidity", range: "0–10" },
              { label: "Body", name: "body", range: "0–10" },
              { label: "Moisture (%)", name: "moisture", range: "0–100" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  type="number"
                  name={field.name}
                  id={field.name}
                  placeholder={`Enter value (${field.range})`}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div className="sm:col-span-2 flex justify-center mt-6">
              <Button
                type="submit"
                className="w-full !bg-red-600 !text-white !hover:bg-red-700"
                disabled={loading}
              >
                {loading ? "Predicting..." : "Predict"}
              </Button>
            </div>
          </form>

{prediction !== null && (
  <div className="mt-8 p-6 bg-gradient-to-r from-green-100 via-green-200 to-green-300 border border-green-400 rounded-lg shadow-lg max-w-md mx-auto text-center">
    <h2 className="text-2xl font-semibold mb-4 text-green-800">
      Prediction Result
    </h2>
    <p className="text-3xl font-extrabold text-green-900">
      {prediction === "1"
        ? "🌟 Very Good"
        : prediction === "0"
        ? "🏆 Excellent"
        : prediction}
    </p>
    <p className="mt-2 text-green-700 italic">
      Thank you for using the Coffee Quality Predictor!
    </p>
  </div>
)}

          {error && (
            <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <p>Error: {error}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
