/*document.getElementById('google-button').addEventListener('click', function() {
    let url = 'https://www.google.com';
    window.location.href = 'https://www.google.com';
    window.focus();

});

const fetchContent = async (url) => {
    con = await fetch(url);
    let a= await con.json();
    return a;
}

setInterval(async function()  {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    console.log(await fetchContent(url));
}, 5000);*/

setInterval(async function()  {
    document.querySelector('#bulb').classList.toggle('bulb');
}, 300);