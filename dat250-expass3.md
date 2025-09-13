
Expass3 Report Kai Waløen

For this assignment I decided to use Next.js because that is what I am most familiar with. I did not use any server side rendering and therefore I feel this implementation is a SPA. The frontend comprises of three components CreateUser, Poll and Vote. In addition I used assets from shadcn for buttons and input boxes, which can be found in the components/ui directory.

This assignment was a little more challenging than expass2 where we set up Spring for API endpoints. The primary reason for this was that since the backend was not properly well throught through at the time I built it, I had to create some hacks and excessive logic on the frontend. A prime example of this is the addUpVotes function in Vote.jsx. In hindsight I would have created an endpoint to serve exactly what the frontend needed instead of writing logic to add up the votes. The code itself is not pretty as it is a nested for loop but due to time constraints I did not try to improve this further. 

I did not encounter significant technical problems during the completion of the tutorial besides the lack of foresight when building the backend. That being said, I did not manage to complete Step 5: Deploy as the directory was not built in Next.js. I think this was a mistake on my part to use Next.js for this in this regard. 

Links:
Frontend: https://github.com/KWaloen/dat250-expass3
Backend: https://github.com/KWaloen/dat250-expass2