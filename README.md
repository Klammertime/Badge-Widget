# jQuery Badge Plugin: Insignia

This plugin uses HTML5 data-* attributes which "allow us to store extra information on standard, semantic HTML elements without other hacks such as classList, non-standard attributes, extra properties on DOM, or setUserData" according to [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes).

This plugin makes it easy to show off your online learning badges, specifically those you've earned from [Treehouse](https://teamtreehouse.com/home) and [Code School](https://www.codeschool.com/).
 
You can see an example of how it might look on my about page: http://audreyklammer.com/about.html

I include this tag:

`<div class="insignia" data-codeschool="audreyklammer" data-treehouse="audreyklammer"></div>` 

## Usage Instructions

1. Download the dist file. 

2. An index.html file is provided with my username so you can see how it might look. 

3. Adjust the CSS based on the styles on your site. Include the styles.css and jquery.insignia.js files either in the head or concatenated with your other files based on your preferred method.

4. Include the following div tag, replacing "yourUsername" with your Code School and Treehouse usernames:

`<div class="insignia" data-codeschool="yourUsername" data-treehouse="yourUsername"></div>`

5. **Or if you'd like to attach your badges to something other than a div tag**, nclude the following insignia class and data-* attributes on your tag (such as the section tag below):

`<section class="insignia" data-codeschool="yourUsername" data-treehouse="yourUsername"></section>`




