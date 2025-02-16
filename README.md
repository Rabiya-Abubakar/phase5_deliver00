# Phase 5 Project
## Introduction 
Deliveroo is a courier service that helps users deliver parcels to different destinations. Deliveroo is a powerful and user-friendly courier service that simplifies parcel delivery. With essential features like user accounts, parcel order creation, and real-time tracking, it offers a seamless experience. The integration of Google Maps ensures transparency and reliability. Optional email notifications enhance user convenience.

## Learning goals
- SQLAlchemy Migrations
    - SQLAlchemy Relationships
    - Class & Instance Methods
    - SQLAlchemy Querying
    - Manipulating & Formulating using Python
    - Build a full-stack project with a React frontend and a Flask backend.
    - Configure environments with project-specific parameters using Pipenv.
   


## LIVE SERVER
 - FRONTEND: You can view the web live on
 - (https://phase5deliver001.vercel.app/)

 - BACKEND: You can view the backend routes on 
 - ()
## Presentation
https://1drv.ms/p/c/ee04752a27f936a4/EZAFF8yDp-1AuXnYgjsm5s0BtqIS93cM4R8n1kKIZwB-CA?e=0k1Ro3

# Project Setup 

Follow the instructions below to set up and run the application.

## **Getting Started**

1. **Clone or Download the Repository**
   - Clone the repository 

   ```bash
   git clone git@github.com:lio-web/phase5_deliver00.git
   ```

2. **Navigate to the Project Directory**
   - Use your terminal to navigate to the project folder:

   ```bash
   cd  phase5_deliver00
   ```

3. **Open the Project in VS Code**
   - Open the folder using VS Code:

   ```bash
   code .
   ```

## **Backend Setup**

1. **Install Dependencies**
   - Use `pipenv` to install the necessary dependencies:

   ```bash
   pipenv install
   pipenv shell
   ```

2. **Activate the Backend Server**
   - Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

   - Start the Flask server:

   ```bash
   python app.py
   ```

## **Frontend Setup**

1. **Navigate to the Frontend Folder**
   - Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. **Install Dependencies**
   - Install the required frontend dependencies:

   ```bash
   npm install
   ```

3. **Activate the Frontend Server**
   - Start the frontend server:

   ```bash
   npm start
   ```

## **Ready to Go**

Your application is now up and running! You can access it via your browser once both the backend and frontend servers are active.


## FEATURES

### USER MANAGEMENT:
- **CREATE**: Allows users to register (sign in & sign up)
- **READ**: Display user profile/account details
- **UPDATE**: Enable users to edit their profile
- **UPDATE**: User can reset their password
- **DELETE**: Ability to logout

### PARCEL MANAGEMENT:
- **CREATE**: Users can create a parcel delivery order
- **UPDATE**: Users can change the destination of a parcel delivery order
- **DELETE**: Users can cancel a parcel delivery order
- **READ**: Users can see the details of a delivery order
- **ADMIN UPDATE**: Admin can change the status and present location of a parcel delivery order

### GOOGLE MAPS INTEGRATION:
- **READ**: Display a Google Map with Markers showing the pickup location and the destination
- **READ**: Display a Google Map with a line connecting both Markers (pickup location and the destination)
- **READ**: Display a Google Map with computed travel distance and journey duration between the pickup location and the destination

### EMAIL NOTIFICATIONS (Optional Features):
- **CREATE**: The user gets real-time email notifications when he creats a new order.


# Technology used
- **Backend**: Python (Flask)
- **Database**: PostgreSQL
- **Wireframes**: Figma 
- **Testing Framework**: Jest & Pytest
- **Frontend**: ReactJs 


## Contributing
We welcome contributions from the community! If you have any suggestions or would like to contribute, please create a pull request or open an 


## Conclusion
Deliveroo offers a straightforward and efficient way to manage parcel deliveries. With features like user accounts, parcel orders, and real-time tracking, it ensures a smooth user experience.

