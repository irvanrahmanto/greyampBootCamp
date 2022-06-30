function normalize(string) {
    try {
        return string.trim().toLowerCase().replace(".", "")
    } catch (error) {
        if (error.message === "string.trim is not a function") {
            console.log("Please pass a String!")
        } else {
            console.log("No idea!");
        }
    } finally {
        console.log("Don't worry about it.");
    }
}

const raw = "    I could do this ALL DAY.";
const normalized = normalize(53784);

console.log(normalized);