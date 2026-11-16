import io
import pandas as pd
import joblib

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field

app = FastAPI(title="House Price Prediction API")

# Load the trained model and feature names
model = joblib.load("house_model.joblib")
features = joblib.load("house_features.joblib")


# Input validation
class HouseFeatures(BaseModel):
    MedInc: float = Field(gt=0, description="Median income in the neighbourhood")
    HouseAge: float = Field(gt=0, description="Average age of houses")
    AveRooms: float = Field(gt=0, description="Average number of rooms")
    AveBedrms: float = Field(gt=0, description="Average number of bedrooms")
    Population: float = Field(gt=0, description="Population of the neighbourhood")
    AveOccup: float = Field(gt=0, description="Average number of occupants per household")
    Latitude: float = Field(ge=32, le=42, description="Latitude of the neighbourhood")
    Longitude: float = Field(ge=-125, le=-114, description="Longitude of the neighbourhood")


# Home endpoint
@app.get("/")
def home():
    return {
        "message": "House Price Prediction API is running"
    }


# Health endpoint
@app.get("/health")
def health():
    return {
        "status": "healthy",
        "model" : "RandomForestRegressor",
        "features" : features,
        "avg_error" : "$32,773"
        
    }


# Prediction endpoint
@app.post("/predict")
def predict_house_price(house: HouseFeatures):
    try:
        # Prepare input in the same feature order as training
        input_data = pd.DataFrame(
            [[
                house.MedInc,
                house.HouseAge,
                house.AveRooms,
                house.AveBedrms,
                house.Population,
                house.AveOccup,
                house.Latitude,
                house.Longitude
            ]],
            columns=features
        )

        # Predict house value
        prediction = float(model.predict(input_data)[0])

        # California Housing target is measured in units of $100,000
        predicted_price = prediction * 100000

        # Illustrative range only, not a calibrated confidence interval
        margin = 32773
        lower_price = max(0, predicted_price - margin)
        upper_price = predicted_price + margin

        return {
            "predicted_price": f"${predicted_price:,.0f}",
            "predicted_price_short": f"${prediction:.2f} hundred thousand",
            "estimated_range": (
                f"${lower_price:,.0f} to ${upper_price:,.0f}"
            )
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )

@app.post("/predict-file")    
async def predict_file(file : UploadFile=File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException (
            status_code= 400,
            detail = "please upload a csv file"
        )
    contents = await file.read()
    df = pd.reac_csv(io.BytesIO(contents))

    required_columns = [
        "MedInc",  "HouseAge", "AveRooms", "AveBedrms", "Population", "AveOccup", "Latitude", 
        "Longitude"

    ]

    missing_columns = [
        col for col in required_columns 
        if col not in df.columns
    ]

    if missing_columns :
        raise HTTPException (
            status_code=400,
            detail = f"These columns are missing from your file{missing_columns}"

        )
    if len(df)==0:
        raise HTTPException(
            status_code = 400,
            detail = "The uploaded file has not any data rows"
        )
    try :
        predictions = model.predict(df[required_columns])

        df["predicted_columns_usd"] = df["predicted_columns_usd"].apply(lambda x : f"${x:,.0f}")
        output = df.to_csv(index=False)

        return StreamingResponse(
            io.StringIO(output),
            media_type="text/csv",
            headers = {
                "Content-Disposition": "attachment;filename=predictions.csv"
            }
        )
    except Exception as e :
        raise HTTPException(
            status_code=500,
            detail = f"Prediction failed {str(e)}"
        )       

        