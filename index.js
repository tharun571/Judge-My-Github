var inputField = document.getElementById("handleInput")
var resultTitle = document.getElementById("resultTitle")
var result = document.getElementById("result")
console.log(result)
var result1 = document.getElementById("result1")
var result2 = document.getElementById("result2")
var result3 = document.getElementById("result3")
var result4 = document.getElementById("result4")
var result5 = document.getElementById("result5")
var len = 0

var bool = false

async function onSubmit(e) {
    e.preventDefault()
    hideResult()
    var handle = inputField.value
    if (handle) {
        try {
            const userData = await (await fetch(`https://api.github.com/users/${handle}`)).json()
            await followers(userData.followers, userData.following)

            const repoData = await (await fetch(`https://api.github.com/users/${handle}/repos`)).json()
            await repos(repoData.length)

            var j = 0
            var repoArray = []
            len = userData.public_repos
            while (j < userData.public_repos) {
                var name = repoData[j].name
                commitData = await (await fetch(`https://api.github.com/repos/${handle}/${name}/commits`)).json()

                var array = []
                array.push(name)
                array.push(commitData.length)
                array.push(repoData[j].watchers)
                array.push(repoData[j].size)
                var start = new Date(repoData[j].created_at)
                var end = new Date(repoData[j].updated_at)
                array.push(end.getTime() - start.getTime())

                repoArray.push(array)

                j++
            }

            console.table(repoArray)

            await sortedByCommits(repoArray.sort(compareCommits))
            await sortedByTime(repoArray.sort(compareTime))
            await sortedByCommitsDividedByTime(repoArray.sort(compareCommitsDividedByTime))
            await sortedBySize(repoArray.sort(compareSize))

        } catch (err) {
            console.log(err)
        }
    } else {
        alert("Handle cannot be Empty!")
    }
    return false
}

async function repos(l) {
    var c = ""
    if (l > 50) {
        c += l + " Repos. Do you even have a life?"
    }
    else if (l > 35) {
        c += l + " Repos. Work more, your girlfriend will leave you soon."
    }
    else if (l > 20) {
        c += l + " Repos. Hmm Not Bad."
    }
    else {
        c += l + " Repos. Either you're new to Github or made Github to show off."
    }

    await showResult(c, result1)
}

async function followers(fol, fwg) {
    var c = ""
    if (fol > 500) {
        c = c + "Daamn, " + fol + " followers. " + "Must be famous eh? "
    }
    else if (fol > 100) {
        c = c + fol + "Decent amount of followers, not bad. "
    }
    else {
        c = c + fol + " followers? " + "You don't have social life, atleast be active here. "
    }

    c = c + " and. "
    if (fol > fwg) {
        c = c + "Commmon man, follow back people."
    }
    else if (fol == fwg) {
        c = c + "Perfect ratio of followers and following eh? "
    }
    else {
        c = c + "Don't be that generous lol, unfollow people who don't follow you 🌚."
    }
    await showResult(c, result)
}

async function sortedByCommits(repoArray) {
    await showResult("Most Committed Repo : " + repoArray[len - 1][0] + " - " + repoArray[len - 1][1] + " Commits", result2)
    console.table(repoArray)
}

async function sortedByTime(repoArray) {
    await showResult("Most Time Taken Repo : " + repoArray[len - 1][0] + " - " + repoArray[len - 1][4] / 86400 + " Days", result3)
    console.table(repoArray)
}

async function sortedByCommitsDividedByTime(repoArray) {
    await showResult("Most Efficient Repo : " + repoArray[len - 1][0] + " - " + repoArray[len - 1][4] / 86400 * repoArray[len - 1][1] + " Commits per Day", result4)
    console.table(repoArray)
}

async function sortedBySize(repoArray) {
    await showResult("Largest Repo : " + repoArray[len - 1][0], result5)
    console.table(repoArray)
}

var speed = 50
var ch = ""

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typewriter(char, ele) {
    for (let i = 0; i < char.length; i++) {
        ele.innerHTML += char[i]
        await sleep(50)
    }
}

function hideResult() {
    resultTitle.style.visibility = "hidden"
    result.style.visibility = "hidden"
    result1.style.visibility = "hidden"
    result2.style.visibility = "hidden"
    result3.style.visibility = "hidden"
    result4.style.visibility = "hidden"
    result5.style.visibility = "hidden"
}

async function showResult(resutlString, ele) {
    ele.style.visibility = "visible"
    resultTitle.style.visibility = "visible"
    await typewriter(resutlString, ele)
}
