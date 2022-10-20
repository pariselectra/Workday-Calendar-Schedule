# Workday-Calendar-Schedule

## Description

The goal of this project was to demonstrate an understanding of local storage. I started this challenge with CSS and HTML code already written out. I was tasked with appending Javascript elements to the page to make a working calendar. The calendar needed to have a functional "save" button, that would save a user's entry locally. I used local storage so even if a user closed out of the browser, their entry would still be saved on the page. 

To start, I had to set up the structure of the page. I used Javascript for loops to create rows for each hour of the 9-5 workday. Then, I attached columns to the rows. The columns allowed the rows to have a space to display the time, a text box, and a save button respectively. In order to get the time to display, I had to write if statements to change the stylings to either am or pm. From there, I attached the already writen CSS styling, which made formating extremely easy.

Additionally, depending on the time, the page format needed to respond. Although I could have written a for loop, after some technical difficulties, I wrote out the styling the long way. I used one of the existing for loops to assign a special div class to each row, and then edited the styling based of what hour it is.

Overall, a user now has the ability to save their local schedule and visually see how on track they are for the day based off of a clear color scheme.

## Installation

-HTML: https://github.com/pariselectra/Workday-Calendar-Schedule/blob/main/index.html

-CSS: https://github.com/pariselectra/Workday-Calendar-Schedule/blob/main/assets/style.css

-Javascript: https://github.com/pariselectra/Workday-Calendar-Schedule/blob/main/assets/script.js

-Live: https://pariselectra.github.io/Workday-Calendar-Schedule/

## Usage

![baseline](images/Screen%20Shot%202022-10-20%20at%202.01.10%20AM.png)
![entry](images/Screen%20Shot%202022-10-20%20at%202.01.28%20AM.png)
![localStorage](images/Screen%20Shot%202022-10-20%20at%202.01.58%20AM.png)


## Credits

This challenge was created while in attendance at the University of Texas at Austin Coding Bootcamp in conjunction with Trilogy Education.

## License
MIT License
https://github.com/pariselectra/Workday-Calendar-Schedule/blob/main/LICENSE