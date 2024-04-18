async function navigate(title, url){
  document.title = title;
  let content = document.querySelector('#content');
  if(url === null){
    content.innerHTML = "";
  }else{
    let response = await fetch(url);//fetch another page eg battery.html
    content.innerHTML = await response.text();
    executeScripts();
  }
}