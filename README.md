# ImaGen

**ImaGen is an image generation application that allows users to create and share their image creations with the community. It is inspired from DALL-E, which is an AI program developed by OpenAI that can create images from textual descriptions.**

ImaGen uses OpenAI's DALL-E 2 API for image generation. The application is built using the MERN stack, which stands for **MongoDB, Express, React, and Node**. It uses React JS for the frontend, and for the backend, it uses Express and Node.

The database used is MongoDB, and the schema for the database is defined under `./server/mongodb/models/post.js`. The project also uses Tailwind CSS for styling the frontend. The images are stored on Cloudinary.

### Live-Link - https://imagenhy.000webhostapp.com/

### How to Use
In the home page you can see the images created by others, you can search in the search bar by using a keyword from the prompt or by user who created it. 
You can hover or hold(touch-devices) over the image to see the creator and the prompt, you can even download the image.

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/97509220/226175063-9e5c6521-9c8f-429d-b868-848252363f78.gif)

Click on Create Now on the right hand corner, you'll be led to the next page.
here you can use your own prompt or click on Suprise me, Now click on generate. you can re-generate or change prompt until you like your output.

You can share your creation with the community by clicking Share.

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/97509220/226175297-8f49258e-0a82-4889-a2cb-48838bf80c52.gif)

You can get back to home by clicking on the logo. Note that you can generate upto 10 images per minute as the API limits it and loading the page for the first time might take some time, please be patient.
This is relatively the first version and might have bugs or feel laggy.

The design is completely responsive and here is how it looks on a mobile view.

![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/97509220/226175657-7cd13322-51d9-48ea-ae4e-07e2e58a6008.gif)


### Technical Details
- Frontend: React JS, Tailwind CSS
- Backend: Express, Node, OpenAI's DALL-E 2 API
- Database: MongoDB
- Image storage: Cloudinary

### How to clone
To use ImaGen, follow these steps:

1. Clone the repository: git clone `https://github.com/Userfound404/ImaGen.git`
2. Install the dependencies: `cd imagen && npm install`
3. Start the server: `cd server && npm start1`
4. Start the client: `cd ../client && npm start`
The server should start running on http://localhost:8080, and the client should start running on http://localhost:5173. You should now be able to use ImaGen by visiting the client URL in your web browser.
5. Do the following changes for the local host to work
   - In the file `.\ImaGen\client\src\page\Home.jsx` change the link of the function *fetchpost* from `https://imagen-lskv.onrender.com/api/v1/post` to `https://localhost:8080/api/v1/post` 
   - In the file `.\ImaGen\client\src\page\CreatePost.jsx` change the link of the function *generateImage* and *handleSubmit* from `[https://imagen-lskv.onrender.com/api/v1/dalle` to `https://localhost:8080/api/v1/dalle` 
 6. Add a `.env` file which should contain your API keys (your credentials)
 <img width="613" alt="image" src="https://user-images.githubusercontent.com/97509220/226174652-01119cfa-fdbd-4e4d-b757-e2ff3a36accf.png">

    

### How to Contribute and make changes
We welcome contributions to ImaGen! To contribute or fix bugs to the project, follow these steps:

1. Fork the repository: `https://github.com/Userfound404/ImaGen.git`
2. Clone the forked repository: `git clone https://github.com/Userfound404/ImaGen.git`
3. Create a new branch for your changes: `git checkout -b <branch-name>`

Make your changes and test them thoroughly.
4.Commit your changes: `git commit -m "<commit-message>"`
5.Push your changes to your forked repository: `git push origin <branch-name>`

Create a pull request on the original repository.

#### Hosting Details
The backend of ImaGen is hosted on Render, and the frontend is hosted on 000webhost.
This code or part of it was inspired from this repository as a guided project: https://github.com/adrianhajdin/project_ai_mern_image_generation. I do not own this software. 
