function disclaimer(){
  var body = document.getElementsByTagName('body');
  var userTips = document.getElementById('user-tips').value;
  if(userTips){

    var disclaimer = document.createElement('input');
    disclaimer.type = "checkbox";
    disclaimer.name = "disclaimer";
    disclaimer.value = "disclaimer";
    checkbox.id = "id";

    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('I agree to the a.t.l disclaimer'));

    body.appendChild(disclaimer);
    body.appendChild(label);
  }

}


disclaimer();
