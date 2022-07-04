export default function Layout() {

    // fill this array with 10 compliments
    const compliments = [
        "You're a candle in the darkness",
        "When you make up your mind, nothing stands in your way",
        "On a scale of 1 to 10, you're 11",
        "You help me be the best version of myself",
        "You're always learning new things and trying to better yourself, which is awesome",
        "The way you treasure your loved ones is incredible"
    ]

    // a function to pick a random element from the array
    function randomizeCompliment() {
        var index = Math.floor(Math.random() * compliments.length)
        var compliment = compliments[index];
        return compliment
    }

    function setCompliment() {
        // get a randomized compliment and set it to h2
        var compliment = randomizeCompliment()
        document.getElementById("complimentHeading").innerHTML = compliment;
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 id="complimentHeading" className="text-5xl font-bold">This is a gift for you</h1>
                        <button onClick={setCompliment} className="btn btn-primary mt-8">Compliment me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}