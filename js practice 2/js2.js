//exercise 1
window.onload = function() {
  const check = letters => {
    if (letters.length > 8) {
      return '<span class="edit">' + letters + '</span>'
    } else {
      return letters;
    }
  }

  const text = document.querySelector("#text");
  text.innerHTML = text
    .innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ')
}
//exercise 2
var a = document.createElement('a');
     var sourcelink = document.createTextNode("text source");
     a.appendChild(sourcelink);
     a.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
     document.body.appendChild(a);
//exercise 3
paragraph.innerHTML = paragraph.innerHTML
  .split(/\.[^\.|<]/)
  .join('.</p><p>') + '</p>';
