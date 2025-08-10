# Coffee-quality Prediction Analysis

1.The dataset contains variables such as ID, Farm Name, Lot Number, Mill, ICO Number, Producer, Status, Defects, Certification Address, Certification Contact.

2.A new variable Shelf_life_days was created by calculating the time difference between the Grading date and Expiration date 📅.

3.In the Altitude column, some values were given as ranges, so we took the average in such cases 📊.

4.A new response variable Specialty coffee score grade with 4 categories was created based on the Total cup points variable 🏆.

5.13 rows with missing values were removed ❌.

6.No duplicate records were found ✅.

7.Checked for outliers. Outliers were present in numerical variables (except for Clean cup, Sweetness, and Shelf-life days). However, we chose not to remove these outliers and proceeded with the original data ⚠️.

8.The dataset was split into training and test sets, with the training set containing 155 observations 🔄.

9.Descriptive analysis was conducted using the training set. Relevant reports and files are in the repo 📂.

10.For advanced analysis, we removed the minority class “Not a specialty” and proceeded to fit ML models like Random Forest, SVC, and XGBoost 🤖.

11.XGBoost performed well on both training and test sets. We performed feature selection and tuning for this model. More details are in the files in the repo 🎯.

 # Website🌐

A website was created for users to interact with our ML model:

Frontend: React + Vite, Tailwind CSS, ShadCn UI ⚛️

Backend: Flask 🐍

 # Docker & CI/CD 🐳
Using a GitHub Actions workflow, we automated the Docker build and deployment process. When changes are made in the website2 folder, the Docker container updates automatically 🚀.
