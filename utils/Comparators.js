function compareCommits(a, b) {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
    return 0;
}

function compareTime(a, b) {
    if (a[4] < b[4]) {
        return -1;
    }
    if (a[4] > b[4]) {
        return 1;
    }
    return 0;
}

function compareCommitsDividedByTime(a, b) {
    const ratio1 = a[1] / a[4]
    const ratio2 = b[1] / b[4]
    if (ratio1 < ratio2) {
        return -1;
    }
    if (ratio1 > ratio2) {
        return 1;
    }
    return 0;
}

function compareSize(a, b) {
    if (a[3] < b[4]) {
        return -1;
    }
    if (a[4] > b[4]) {
        return 1;
    }
    return 0;
}
