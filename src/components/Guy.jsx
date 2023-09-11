import React from 'react';
import boobs from './resources/puh8HaCX.jpg';

function Guy() {

    return (
        <div>
            <canvas id="myCanvas" width="300" height="200" />
            <script>
                var canvas = document.getElementById("myCanvas"),
                context = canvas.getContext("2d");
                context.beginPath();
                context.moveTo(30, 20);
                context.lineTo(150, 140);
                context.lineTo(250, 30);
                context.closePath();
                context.strokeStyle = "red";
                context.stroke();
            </script>
        </div>

    )
}

export default Guy;