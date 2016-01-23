# Project Summary 

**Insignia jQuery Plugin**

```
I created this plugin from scratch taking advantage of HTML5 data-* attributes which "allow us to store extra information on standard, semantic HTML elements without other hacks such as classList, non-standard attributes, extra properties on DOM, or setUserData" according to [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes).

This plugin makes it easy to show off your online learning badges, specifically those you've earned from [Treehouse](https://teamtreehouse.com/home) and [Code School](https://www.codeschool.com/).

```
 
You can see my badges on my site here http://audreyklammer.com/about.html

I simply include this tag:

`<div class="insignia" data-codeschool="audreyklammer" data-treehouse="audreyklammer"></div>` 


## Usage Instructions

1. Download the dist file. 

2. An index.html file is provided with my username so you can see how it might look. 

3. Adjust the CSS based on the styles on your site. Include the styles.css and jquery.insignia.js files either in the head or concatenated with your other files based on your preferred method.

4. On the page where you'd your badges to appear, include the following div tag, replacing "yourUsername" with your Code School and Treehouse username:

`<div class="insignia" data-codeschool="yourUsername" data-treehouse="yourUsername"></div>`

5. **Or if you'd like to attach your badges to something other than a div tag**, on the page where you'd your badges to appear, include the following insignia class and data-* attributes on your tag (such as the section tag below), still replacing "yourUsername" with your Code School and Treehouse username:

`<section class="insignia" data-codeschool="yourUsername" data-treehouse="yourUsername"></section>`




