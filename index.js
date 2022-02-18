const url = "http://localhost:3000/posts";

const get_posts = async () => {
    const response = await fetch(url);
    const posts = await response.json();

    for (post of posts) {
        // <tr id={id}>
        //     <td>{title}</td>
        //     <td>{body} </td>
        //     <td><button>DEL</button></td>
        //     <td><button>UPD</button></td>
        // </tr>

        const { id, title, body } = post;

        const tr = document.createElement("tr");
        tr.id = id;

        const td_title = document.createElement("td");
        td_title.innerHTML = title;

        const td_body = document.createElement("td");
        td_body.innerHTML = body;

        //------
        // td for delete button
        const td_del = document.createElement("td");
        //create button
        const btn_del = document.createElement("button");
        btn_del.innerHTML = "DEL";

        btn_del.onclick = async(e) => {

            const response = await fetch(`http://localhost:3000/posts/${id}`, {
                method : 'DELETE',
                headers : {
                    'Content-Type': 'application/json'
                }
                //body:
            });
            // location.reload();

            // const id = document.parentNode.parentNode.id;
            // console.log("====================================");
            // console.log(id);
            // console.log("====================================");
        };
        td_del.appendChild(btn_del);

        //----- update button

        const td_upd = document.createElement("td");
        const btn_upd = document.createElement("button");
        btn_upd.innerHTML = "UPD";

        btn_upd.onclick = (e) => {
            location.replace('/update.html');
            // const id = document.parentNode.parentNode.id;
            // console.log("====================================");
            // console.log(id);
            // console.log("====================================");
        };
        td_upd.appendChild(btn_upd);

        tr.appendChild(td_title);
        tr.appendChild(td_body);
        tr.appendChild(td_del);
        tr.appendChild(td_upd);

        document.getElementById("tbl").appendChild(tr);
    }
};

get_posts();
