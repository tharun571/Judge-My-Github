function compareCommits(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    return 0;
}

function compareTime(a, b) {
    if (a.created_at < b.created_at) {
        return -1;
    }
    if (a.created_at > b.created_at) {
        return 1;
    }
    return 0;
}

function compareCommitsDividedByTime(a, b) {
    const ratio1 = a.length / a.created_at
    const ratio2 = b.length / b.created_at
    if (ratio1 < ratio2) {
        return -1;
    }
    if (ratio1 > ratio2) {
        return 1;
    }
    return 0;
}

function compareSize(a, b) {
    if (a.size < b.size) {
        return -1;
    }
    if (a.size > b.size) {
        return 1;
    }
    return 0;
}
