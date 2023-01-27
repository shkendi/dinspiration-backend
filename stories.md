# User Stories

### 1. "As a user, I want to be able to sign up for account and be confident that my details are held securely and my information hidden appropriately."

Given that I have the user signup form, containing username, email address and password..
When I sign up that user, it should save the hashed password with the email address and username, and return only the username and email address as a JSON object.   

### 2. "As a user, I want to sign up for an account and store my food groups and dietary needs, so that every time I log on, the app offers me a food that meets my basic requirements" 

Given I have the user's completed signup form, containing food groups and preferences..
When I sign up that user, it should save their food groups and preferences to the database user collection and return the saved user (with confidential fields hidden) as a JSON object.

### 3. "As a signed-up user, I want to login with my email address and password so that I can see my personalised food results and post and edit inspirations securely." 

Given that I have the correct email address and password from the login form.. 
When I log in that user, it should assign a jwt to the user for a limited session, allowing the user to post an inspiration and edit his own inspirations.  

### 4. "As a visitor user, I want to access the landing page, so that I can understand the purpose of the app and be offered a random food and corresponding inspirations as a thrilling example of what the app offers."

Given that I have a request for a random food.. 
When I get random food, it should return a random food along with the inspirations for that food

### 5. "As a logged-in user, I want to post an inspiration, so that I can share an inspiration on a particular food." 

Given that I have an inspiration with a body of text and (optional) a url and an image url, then it should save that inspiration to the database and return the saved inspiration as a JSON object. 

### 6. "As a logged-in user, I want my empty inspiration not to post, so that if I accidentally submit before I type my text, it isn't posted." 

Given I have an inspiration with a missing text-field, when I click post, then it should notify me that I cannot post without a text description.  

### 7. "As a logged-in user, I want to edit my inspirations, so that I can change the text, or add or delete an image url or a link."

Given I have a put request for an inspiration from an authorised user, then it should save the updated inspiration to the database and return the updated inspiration as a JSON object.  

### 8. "As a logged-in user, I want to delete an inspiration, so that I can remove an inspiration I created in the past."

Given I have a delete request for an authorised user, then I want to delete that inspiration and return a message confirming that it has been removed from the database.


