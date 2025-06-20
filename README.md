📸 Photo Booking App

An end-to-end full-stack web application for booking photography sessions, built with:

    Backend: Node.js, Express, TypeScript, MongoDB, Zod

    Frontend: HTML, CSS, JavaScript (vanilla)

    Deployment: Vercel (frontend) + Local API (or Render/Railway ready)

🚀 Features

    Create new photo bookings via form

    View all bookings (API-ready)

    Zod-based request validation

    RESTful API architecture

    MongoDB data storage

    Frontend + backend connected via HTTP

    CORS enabled for smooth cross-origin access

🧠 Tech Stack

| Layer | Tech Used |
| ------------ | ------------- |
| Frontend	 | HTML, CSS, JS |
| Backend	 | Node.js, Express, TypeScript  |
| Database	 | MongoDB |
| Validation |Zod |
| Hosting	 | Vercel |


📡 API Endpoints
| Method	 | Route | Description |
| ------------ | ------------- | ------------- |
|  GET | /api/bookings | Get all bookings |
|  POST	 | /api/bookings	 | Create a new booking |

Example POST payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "date": "2025-06-15",
  "package": "portrait"
}
```

▶️ How to Run Locally

    
``` Clone this Repo ```
```bash
git clone https://github.com/rituraj-gharat/photo-booking-api.git

cd photo-booking-api
```
```bash
Install dependencies:

npm install
```

Start MongoDB locally (or connect to Atlas).

```bash
Create .env file:

MONGO_URI=mongodb://localhost:27017/photobooking
PORT=5050
```
```bash
Run the backend:

npm run dev

Open browser at: http://localhost:5050
```

🌐 Live Demo

https://photo-booking-api-gls8.vercel.app/
<!---Frontend: https://photo-booking-api.vercel.app
Backend: (Coming soon via Render/Railway) --->

📸 Screenshots

<img width="1015" alt="Screenshot 2025-06-12 at 5 03 42 AM" src="https://github.com/user-attachments/assets/22ae0309-d2aa-4c2e-baa6-f969608e0b2c" />

-----------------------------------------------------------------------------------------------------------------------------------------------------

<img width="1020" alt="Screenshot 2025-06-12 at 5 04 48 AM" src="https://github.com/user-attachments/assets/cd6b6990-b8d9-4665-81a8-1b44a3d15862" />




✨ Credits

Made with ❤️ by Rituraj Gharat

Connect with me !!!

🐙 [GitHub](https://github.com/rituraj-gharat) |
💼 [LinkedIn](https://www.linkedin.com/in/riturajgharat/) |
📧 [Contact me via email](mailto:rgharat1@asu.edu)

