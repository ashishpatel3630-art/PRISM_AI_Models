import streamlit as st
import pandas as pd
import numpy as np
import joblib
from pathlib import Path

# =====================================================
# PAGE CONFIG
# =====================================================

st.set_page_config(
    page_title="CustomerIQ AI",
    page_icon="🚀",
    layout="wide"
)

# =====================================================
# LOAD MODELS
# =====================================================

MODEL_DIR = Path("models")


@st.cache_resource
def load_models():

    seg_model = joblib.load(
        MODEL_DIR / "customer_segmentation.pkl"
    )

    seg_scaler = joblib.load(
        MODEL_DIR / "segmentation_scaler.pkl"
    )

    churn_model = joblib.load(
        MODEL_DIR / "churn_model.pkl"
    )

    churn_scaler = joblib.load(
        MODEL_DIR / "churn_scaler.pkl"
    )

    churn_features = joblib.load(
        MODEL_DIR / "churn_features.pkl"
    )

    return (
        seg_model,
        seg_scaler,
        churn_model,
        churn_scaler,
        churn_features
    )


try:

    (
        seg_model,
        seg_scaler,
        churn_model,
        churn_scaler,
        churn_features

    ) = load_models()

except Exception as e:

    st.error("Unable to load models.")
    st.exception(e)
    st.stop()

# =====================================================
# TITLE
# =====================================================

st.title("🚀 CustomerIQ AI")

st.caption(
    "Enterprise Customer Intelligence Platform"
)

st.divider()

# =====================================================
# SIDEBAR
# =====================================================

menu = st.sidebar.radio(

    "Navigation",

    [
        "Customer Segmentation",
        "Churn Prediction"
    ]

)

# =====================================================
# CUSTOMER SEGMENTATION
# =====================================================

if menu == "Customer Segmentation":

    st.header("👥 Customer Segmentation")

    col1, col2, col3 = st.columns(3)

    with col1:

        age = st.number_input(
            "Age",
            18,
            100,
            30
        )

        income = st.number_input(
            "Income",
            0.0,
            500000.0,
            50000.0
        )

        tenure = st.number_input(
            "Tenure",
            0.0,
            20.0,
            3.0
        )

    with col2:

        spend = st.number_input(
            "Total Spend",
            0.0,
            100000.0,
            10000.0
        )

        transactions = st.number_input(
            "Total Transactions",
            0,
            500,
            50
        )

        avg_order = st.number_input(
            "Average Order Value",
            0.0,
            10000.0,
            200.0
        )

    with col3:

        purchase = st.number_input(
            "Purchase Frequency",
            0.0,
            50.0,
            5.0
        )

        last_purchase = st.number_input(
            "Last Purchase Days",
            0,
            500,
            30
        )

        health = st.number_input(
            "Customer Health Score",
            0.0,
            100.0,
            70.0
        )

    if st.button("Predict Customer Segment"):

        data = np.array([[
            age,
            income,
            tenure,
            spend,
            transactions,
            avg_order,
            purchase,
            last_purchase,
            health
        ]])

        scaled = seg_scaler.transform(data)

        segment = seg_model.predict(scaled)[0]

        st.success(
            f"Predicted Segment : {segment}"
        )

# =====================================================
# CHURN PREDICTION
# =====================================================

else:

    st.header("⚠️ Churn Prediction")

    input_data = {}

    cols = st.columns(2)

    for i, feature in enumerate(churn_features):

        with cols[i % 2]:

            input_data[feature] = st.number_input(
                feature,
                value=0.0
            )

    if st.button("Predict Churn"):

        df = pd.DataFrame([input_data])

        scaled = churn_scaler.transform(df)

        prediction = churn_model.predict(
            scaled
        )[0]

        probability = churn_model.predict_proba(
            scaled
        )[0]

        risk = {
            0: "🟢 Low Risk",
            1: "🟡 Medium Risk",
            2: "🔴 High Risk"
        }

        st.success(
            risk[prediction]
        )

        st.subheader("Prediction Probability")

        prob_df = pd.DataFrame({

            "Risk": [

                "Low",

                "Medium",

                "High"

            ],

            "Probability (%)": [

                probability[0] * 100,

                probability[1] * 100,

                probability[2] * 100
            ]
        })

        st.dataframe(
            prob_df,
            use_container_width=True
        )

        st.bar_chart(
            prob_df.set_index("Risk")
        )