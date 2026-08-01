required_columns = [
"Age",
"Gender",
"Income",
"Location",
"Membership",
"Tenure",
"TotalSpend",
"TotalTransactions",
"AverageOrderValue",
"PurchaseFrequency",
"LastPurchaseDays",
"PreferredCategory",
"WebsiteVisits",
"AppUsageMinutes",
"LoginFrequency",
"WishlistCount",
"CartAbandonmentRate",
"EmailOpenRate",
"MarketingClicks",
"SatisfactionScore",
"Rating",
"SupportCalls",
"Complaints",
"Reviews",
"CustomerHealthScore"
]


for col in required_columns:
    if col not in df.columns:
        df[col]=0