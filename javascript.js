var quotes = [
  "Just pretend like we're talking until the cops leave. <br> - Creed Bratton",
  "But on Pretzel Day? I like Pretzel Day. <br>- Stanley Hudson",
  "I am Beyonce, always. <br>- Michael Scott",
  "Dwight doesn't blow anything up and I wear a costume. <br>- Jim Halpert",
  "He said, 'If I'm dead, you guys have been dead for weeks.' <br>- Pam Beesly",
  "I hooked up with her on February 13th. <br>- Ryan Howard",
  "I don't talk trash, I talk smack. They're totally different. <br>- Kelly Kapoor",
  "RYAN STARTED THE FIRE. <br>- Dwight Schrute",
  "Dwight, you ignorant slut! <br>- Michael Scott",
  "The worst thing about prison was the dementors. <br>- Michael Scott",
  "I'm hot, you're hot. Let's get it poppin. <br>- Darryl Philbin",
  "Do you think doing alcohol is cool? <br>- Michael Scott",
  "Identity theft is not a joke Jim. Millions of families suffer every year! <br>- Dwight Schrute",
  "I'm not superstitious, but I am a little stitious. <br>- Michael Scott",
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
