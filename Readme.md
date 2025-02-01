# Discord Bot

This bot notifies my project group members about project deadlines and the tasks to be completed.



### Commands:
- `/info`: Provides information about the project, including the remaining days until the final deadline and pre-defense.
- `/joke`: Tells a joke.
- `/bye`: Says goodbye and resets the greeting flag for the user.

### Message Replies:
- Responds to mentions of: **project**, **hi**,  **hello**....
- Greets the user (Discord username mentioned in `privateinfo.js`) upon sending their first message.

## How to Use

1. Set up Discord and obtain your **TOKEN**, **CLIENT_ID**, and **GUILD_ID**.
2. Clone this repository.
3. Create a `.env` file to add the information from step 1.
4. Customize `privateinfo.js` according to your project details and Discord username.

---------------------- `privateinfo.js`: -------------------------------
const projectTitle = "Your Project Title";
const deadline = "YYYY-MM-DD";
const myUname = "your_discord_username";
module.exports = {
projectTitle,
deadline,
myUname,
};