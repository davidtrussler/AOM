window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('init!');

  var button = document.getElementById('button');
  var container = document.getElementById('container');

  button.setAttribute('tabindex', 0);
  container.setAttribute('hidden', true);

  button.accessibleNode.role = button;
  container.accessibleNode.expanded = false;

  console.log('button:', button);
  console.log('container:', container);
}
