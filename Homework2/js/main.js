function ShowDropdown() {
  if(document.getElementById('dropdown').style.display == 'none'){
    document.getElementById('dropdown').style.display = 'block';
    document.getElementById('main-bars').style.display = 'none';
  }
  else {
    document.getElementById('dropdown').style.display = 'none';
    document.getElementById('main-bars').style.display = 'block';
  }
}
