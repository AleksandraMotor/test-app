import { useState } from "react";

export default function Article({ title, author, text }) {

    const [underline, setUnderline] = useState(false);
//     let classes = "";
//     if (text.length > 10) classes += " big";

//     return (
//         <article onClick={() => setUnderline(!underline)}>
//             <h3 className={underline ? "underline" : ""}>{title}</h3>
//             <span>{author}</span>
//             <p className={classes}>{text}</p>
//         </article>
//     );
// };


const classes = ['one'];
if (text.length > 10) classes.push(" big");
if (underline) classes.push(' underline');
return (
    <article onClick={() => setUnderline(!underline)}>
        <h3 className={underline ? "underline" : ""}>{title}</h3>
        <span>{author}</span>
        <p className={classes.join(" ")}>{text}</p>
    </article>
);
};
