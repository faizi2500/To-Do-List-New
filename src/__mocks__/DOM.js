const dom = () => {
  document.body.innerHTML = `<form class="input-form" id="my-form">
  <input type="text" class="input-task" id="task" placeholder="Add to your List...">
  <button type="submit" class="submit-task" id="enter-task"><i class="fas fa-reply"></i></button>
  </form>`;
  return document;
}

export default dom