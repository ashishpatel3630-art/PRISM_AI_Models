import streamlit as st
import pandas as pd
import numpy as np
import joblib


# -----------------------------
# Page Config
# -----------------------------

st.set_page_config(
    page_title="CustomerIQ AI",
    page_icon="🚀",
    layout="wide"
)


# -----------------------------
# Load Models
# -----------------------------

@st.cache_resource
def load_models():

    segmentation_model = joblib.load(
        "models/customer_segmentation.pkl"
    )

    segmentation_scaler = joblib.load(
        "models/segmentation_scaler.pkl"
    )


    churn_model = joblib.load(
        "models/churn_model.pkl"
    )

    churn_scaler = joblib.load(
        "models/churn_scaler.pkl"
    )

    churn_features = joblib.load(
        "models/churn_features.pkl"
    )


    return (
        segmentation_model,
        segmentation_scaler,
        churn_model,
        churn_scaler,
        churn_features
    )



seg_model, seg_scaler, churn_model, churn_scaler, churn_features = load_models()



# -----------------------------
# Title
# -----------------------------

st.title("🚀 CustomerIQ AI")
st.subheader(
    "Customer Intelligence Platform"
)


st.divider()



# -----------------------------
# Sidebar
# -----------------------------

menu = st.sidebar.selectbox(

    "Select Module",

    [
        "Customer Segmentation",
        "Churn Prediction"
    ]

)



# =====================================================
# SEGMENTATION
# =====================================================


if menu == "Customer Segmentation":


    st.header("👥 Customer Segmentation")


    col1,col2,col3 = st.columns(3)


    with col1:

        age = st.number_input(
            "Age",
            18,
            80,
            30
        )

        income = st.number_input(
            "Income",
            0,
            500000,
            50000
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
            0,
            100000,
            10000
        )


        transactions = st.number_input(
            "Total Transactions",
            0,
            500,
            50
        )


        avg_order = st.number_input(
            "Average Order Value",
            0,
            10000,
            200
        )


    with col3:


        purchase = st.number_input(
            "Purchase Frequency",
            0,
            50,
            5
        )


        last_purchase = st.number_input(
            "Last Purchase Days",
            0,
            500,
            30
        )


        health = st.number_input(
            "Customer Health Score",
            0,
            100,
            70
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


        scaled = seg_scaler.transform(
            data
        )


        segment = seg_model.predict(
            scaled
        )[0]


        st.success(
            f"Customer Segment : {segment}"
        )



# =====================================================
# CHURN
# =====================================================


else:


    st.header("⚠️ Churn Prediction")


    input_data = {}


    for feature in churn_features:

        input_data[feature] = st.number_input(
            feature,
            value=0.0
        )



    if st.button("Predict Churn Risk"):


        df = pd.DataFrame(
            [input_data]
        )


        scaled = churn_scaler.transform(
            df
        )


        prediction = churn_model.predict(
            scaled
        )[0]


        probability = churn_model.predict_proba(
            scaled
        )[0]



        risk = {

            0:"Low Risk 🟢",
            1:"Medium Risk 🟡",
            2:"High Risk 🔴"

        }



        st.success(
            f"Churn Risk : {risk[prediction]}"
        )


        st.write(
            "Probability"
        )


        st.write({

            "Low Risk":
            f"{probability[0]*100:.2f}%",

            "Medium Risk":
            f"{probability[1]*100:.2f}%",

            "High Risk":
            f"{probability[2]*100:.2f}%"

        })