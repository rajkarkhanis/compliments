export default function Layout(){

    // fill this array with 10 compliments
    const compliments = [
        "You're a candle in the darkness",
        "When you make up your mind. nothing stands in your way",
        "On a scale of 1 to 10, you're 11",
        "You help me be the best version of myself",
        "You're always learning new things and trying to better yourself, which is awesome",
        "The way you treasure your loved ones is incredible"
    ]

    // a function to pick a random element from the array
    function randomizeCompliment(){
        var index = Math.floor(Math.random() * compliments.length)
        var compliment = compliments[index];
        return compliment
    }

    function setCompliment(){
        // get a randomized compliment and set it to h2
        var compliment = randomizeCompliment()
        document.getElementById("complimentHeading").innerHTML = compliment;
    }

    return(
        <div>
            <section className="mx-auto container w-full py-36">
                <div className="flex flex-col justify-center items-center">
                    <div className="md:text-5xl text-4xl font-black text-center text-gray-800 leading-snug lg:w-3/4">
                        <h2 id="complimentHeading">This is a gift for you</h2>
                    </div>
                    <div className="flex justify-center items-center mt-16">
                        <button onClick={setCompliment} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded font-medium">Compliment me</button>
                    </div>
                </div>
            </section>
        </div>
    )
}