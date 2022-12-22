// fetch("http://127.0.0.1:5500/D_javascript/14_fetch/data.html")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });

const get = async () => {
    const res = await fetch("http://127.0.0.1:5500/D_javascript/14_fetch/data.html");
    const data = await res.json();
    console.log(data);
    console.log(res);
};
get();