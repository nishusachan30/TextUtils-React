import React, { useState } from 'react'

function About(props) {
    return (
        <div className='container my-3' style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === 'dark' ? '#434040' : 'white'
        }} >
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === 'dark' ? '#434040' : 'white'
            }}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === 'dark' ? '#434040' : 'white'
                    }}>
                        <button className="accordion-button" type="button" style={{
                            color: props.mode === "dark" ? "white" : "black",
                            backgroundColor: props.mode === 'dark' ? '#434040' : 'white',
                            border: props.mode === 'light' ? '2px solid black' : '2px solid white',
                        }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{
                            color: props.mode === "dark" ? "white" : "black",
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            border: props.mode === 'light' ? '2px solid black' : '2px solid white',
                        }}>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempora earum? Repellendus ad doloribus corrupti sapiente at qui a ipsa dolorem repellat et culpa alias non vel minus reiciendis aliquid, cupiditate quis sed ipsam. At minus quis placeat nisi odio accusantium harum quam hic culpa consequatur quo consequuntur magni porro, ad dolore aliquam, dolorum tempore rem numquam, laborum optio voluptates sequi provident. Tempore ut atque facere. Autem officiis praesentium ad sit deleniti a quisquam temporibus fuga laudantium quo. Nobis neque dignissimos beatae, incidunt cum eveniet quo tempora sapiente qui cumque, a reiciendis, doloremque illum rem asperiores obcaecati consequuntur id! Autem pariatur a in et, aliquam culpa eius ut nam repellendus corrupti accusantium exercitationem vitae consequuntur incidunt laudantium vel voluptatibus officiis repudiandae dolorum eveniet ipsam labore doloremque voluptates. Rem culpa nulla amet consectetur veniam recusandae quasi quaerat quia iure dolore incidunt doloribus qui placeat officiis sed voluptas asperiores voluptatum, eius laboriosam delectus dignissimos! Nulla, quasi! Laborum, ratione aut molestiae commodi et illo incidunt sunt magnam? Ullam quam eveniet impedit porro sequi dolorem! Ut cupiditate laudantium molestiae rerum architecto quos voluptatum magni? Reprehenderit temporibus omnis maiores consequatur a, maxime deleniti cupiditate quia qui autem obcaecati quo quidem explicabo dignissimos debitis earum fugit sed minus quisquam commodi labore cumque placeat consectetur nam. Doloribus, dolor alias harum quasi, sunt corrupti possimus praesentium, cumque dolore iure vero facere ullam id ipsum dolores quo ad at adipisci beatae ipsa facilis nulla quis molestias temporibus. Veniam qui omnis consequatur accusantium alias, nobis laborum iusto architecto deleniti officia aperiam eaque, quae reprehenderit deserunt iste, labore perspiciatis ipsa nesciunt! Enim veritatis sapiente perferendis est ipsum, quo dignissimos, sint voluptatem expedita vero quis corporis placeat odio nihil itaque eum minima repellendus. Similique perspiciatis facilis eius error eaque architecto officiis fuga. Veniam voluptatum consequuntur nemo possimus dolores dicta officia et perferendis.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About