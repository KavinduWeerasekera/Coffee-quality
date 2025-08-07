from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend fetch requests

# Load model once
with open("best_model.pkl", "rb") as f:
    model = pickle.load(f)

# Mapping frontend keys to model expected feature names (order matters)
frontend_to_model_map = {
    "aftertaste": "Aftertaste",
    "overall": "Overall",
    "balance": "Balance",
    "flavor": "Flavor",
    "aroma": "Aroma",
    "acidity": "Acidity",
    "body": "Body",
    "moisture": "Moisture Percentage"
}

# Define the feature order the model expects
model_feature_order = [
    "Aftertaste",
    "Overall",
    "Balance",
    "Flavor",
    "Aroma",
    "Acidity",
    "Body",
    "Moisture Percentage"
]

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    print("Received data:", data)  # Debug print

    try:
        input_values = []
        for model_feature in model_feature_order:
            frontend_key = None
            for fk, mf in frontend_to_model_map.items():
                if mf == model_feature:
                    frontend_key = fk
                    break
            if frontend_key is None:
                return jsonify({"error": f"Mapping missing for model feature {model_feature}"}), 500
            
            val_str = data.get(frontend_key)
            print(f"Value for {frontend_key}: {val_str}")  # Debug print
            val = float(val_str)  # This can raise if val_str is None or non-numeric
            input_values.append(val)

        input_array = np.array([input_values])
        print("Model input array:", input_array)  # Debug print

        prediction = model.predict(input_array)
        print("Prediction:", prediction)

        return jsonify({"prediction": str(prediction[0])})

    except Exception as e:
        print("Error:", e)  # Debug print
        return jsonify({"error": str(e)}), 400



if __name__ == "__main__":
    app.run(debug=True)
