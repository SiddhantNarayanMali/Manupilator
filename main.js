function preload()
{

}

function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    Video = createCapture(VIDEO);
    Video.size(550,550);
    Ml5 = ml5.poseNet(Video,ModelL);
    Ml5.on("pose" , posing);

}

function ModelL()
{
    console.log("Posenet Is Initiallized");
}

function posing(r)
{
    if (r.length > 0)
    {
        console.log(r)
    }
}

function draw()
{
    Canvas.background(red);
}
