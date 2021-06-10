const cheerio = require("cheerio");

const $ = cheerio.load(` <form
action="/add-form"
method="POST"
style="width: 60vh; display: flex; flex-direction: column"
>
<input type="text" name="title" id="" />
<textarea name="htmlCode" id="" cols="30" rows="10"></textarea>
<button>New Form!</button>
</form>`);

$("input,textarea").map((i, el) => console.log(el.attribs.name));
