
from sklearn.datasets import fetch_california_housing
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import pandas as pd
import joblib

# Load dataset
data = fetch_california_housing()

X = pd.DataFrame(data.data, columns=data.feature_names)
Y = data.target

print(f"Total records: {X.shape[0]}")
print(f"Total features: {X.shape[1]}")

# Split dataset
X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, Y_train)

# Make predictions
Y_pred = model.predict(X_test)

# Evaluate model
mae = mean_absolute_error(Y_test, Y_pred)
r2 = r2_score(Y_test, Y_pred)

print(f"Average error: ${mae * 100000:,.0f}")
print(f"R2 Score: {r2:.4f}")

# Save trained model
joblib.dump(model, "house_price_model.pkl")

print("Model saved successfully!")

joblib.dump(model, "house_model.joblib")
joblib.dump(list(X.columns), "house_features.joblib")